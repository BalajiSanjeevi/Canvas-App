import * as validate from './Validator';
import {INVALID_COORDINATES_PAIR_RECTANGLE_ERR_MSG} from '../constants/ErrorConstants';

const EXPECTED_INPUT_LENGTH = 4;

/*
 * checks whether the given coordinate pair satisfy for creating the rectangle.
 */
function isValidCoordinates([axisX1, axisY1, axisX2, axisY2]){
    if(axisX2 <= axisX1 || axisY2 <= axisY1)
        throw Error(INVALID_COORDINATES_PAIR_RECTANGLE_ERR_MSG);
    return true;
}
/*
 * checks whether given coordinate pairs satisfy for creating rectangle and falls within the canvas boundary.
 */
function validateCoordinates(commandSets, canvas){
    let pixels = [{axisX: commandSets[0], axisY: commandSets[1]}, {axisX: commandSets[2], axisY: commandSets[3]}];
    return isValidCoordinates(commandSets) && validate.isCoordinatesWithinCanvasBoundary(canvas, pixels);
}

/*
 * validates the given command set for the set of validations to check whether it satisfy for creating the rectangle.
 * 1. Given input should have 4 characters
 * 2. All 4 characters should be a number
 * 3. The coordinate pairs should fall with in the boundary.
 */
export default (commandSets, canvas) => {
    validate.validateCommandSets(commandSets, EXPECTED_INPUT_LENGTH);
    const params = commandSets.map((value) => parseInt(value));
    validateCoordinates(params, canvas);
    return true;
}