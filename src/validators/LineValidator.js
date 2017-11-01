import * as validate from './Validator';
import {INVALID_COORDINATES_PAIR_LINE_ERR_MSG} from '../constants/ErrorConstants';

const EXPECTED_INPUT_LENGTH = 4;


/*
 * Checks whether the given coordinate pair satisfy for drawing either vertical or horizontal line.
 */
function isValidCoordinates([axisX1, axisY1, axisX2, axisY2]){
    if(!(axisX1 === axisX2 || axisY1 === axisY2))
        throw Error(INVALID_COORDINATES_PAIR_LINE_ERR_MSG);
    return true;
}

/*
 * Checks whether the given coordinate pair satisfy for drawing either vertical or horizontal line and falls within the canvas boundary.
 */

function validateCoordinates(commandSets, canvas){
    let pixels = [{axisX: commandSets[0], axisY: commandSets[1]}, {axisX: commandSets[2], axisY: commandSets[3]}];
    return isValidCoordinates(commandSets) && validate.isCoordinatesWithinCanvasBoundary(canvas, pixels);
}

/*
 * validates the given command set for the set of validations to check whether it satisfy for creating the Line.
 * 1. Given input should have 4 characters
 * 2. All 4 characters should be a number
 * 3. The coordinate pair should satisfy for drawing either vertical or horizontal line
 * 4. The coordinate pairs should fall with in the boundary.
 */

export default (commandSets, canvas) => {
    validate.validateCommandSets(commandSets, EXPECTED_INPUT_LENGTH);
    const params = commandSets.map((value) => parseInt(value));
    validateCoordinates(params, canvas);
    return true;
}