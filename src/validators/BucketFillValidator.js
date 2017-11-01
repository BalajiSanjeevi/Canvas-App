import * as validate from './Validator';
import {FILL_COLOUR_CHARACTER_INVALID_LENGTH_ERR_MSG} from '../constants/ErrorConstants';

const EXPECTED_INPUT_LENGTH = 2;

/*
 * The fill character should be 1 character and should be defined.
 */
function validateFillChar(fillChar){
    if(!fillChar || fillChar.length !== 1)
        throw Error(FILL_COLOUR_CHARACTER_INVALID_LENGTH_ERR_MSG);
}
/*
 * Checks whether the coordinate pair falls within the boundary.
 */
function validateCoordinates([axisX, axisY], canvas) {
    return validate.isCoordinatesWithinCanvasBoundary(canvas, [{axisX: axisX, axisY: axisY}]);
}

/*
 * validates the given command set for the set of validations to check whether it satisfy for bucket filling.
 * 1. Given input should have 2 characters
 * 2. Both characters should be a number
 * 3. The coordinate pair should fall with in the boundary.
 * 4. The fill character should be single character.
 */
export default ([axisX, axisY, fillColor], canvas) => {
    validate.validateCommandSets([axisX, axisY], EXPECTED_INPUT_LENGTH);
    validateFillChar(fillColor);
    const params = [axisX, axisY].map((value) => parseInt(value));
    validateCoordinates(params, canvas);
    return true;
}