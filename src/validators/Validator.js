import {VALID_COMMANDS} from '../constants/CommonConstants';
import {OUT_OF_BOUNDARY_ERR_MSG, NOT_ENOUGH_PARAMS_ERR_MSG,
    NEGATIVE_COORDINATES_ERR_MSG, NAN_ERR_MSG, INVALID_COMMAND_ERR_MSG} from '../constants/ErrorConstants';

/*
 * validates the user command against the available list of commands whether
 * it exist in the list and throws error if doesnt exist.
 */
export function validateCommand (command) {
    if(!VALID_COMMANDS.includes(command))
        throw Error(INVALID_COMMAND_ERR_MSG);
    return true;
}

/*
 * validates the given command sets against the given expected length and throws error if the length doesn't match.
 */
export function validateCommandSetLength(commandSet, expectedLength) {
    if(commandSet.length !== expectedLength)
        throw Error(NOT_ENOUGH_PARAMS_ERR_MSG);
    return true;
}

/*
 * Validates the given input whether its number or not. Throws error when any other character is passed other than number.
 */
export function isNumber(value) {
    if(isNaN(value))
        throw Error(NAN_ERR_MSG);
    return true;
}

/*
 * Validates the given input for number and should be greater than 0.
 */
export function validateNumber(value) {
    if(isNumber(value) && parseInt(value) <= 0)
        throw Error(NEGATIVE_COORDINATES_ERR_MSG);
    return true;
}

/*
 * Validates given array of input for number.
 */
export function validateNumbers(values) {
    values.forEach((char) => {
        validateNumber(char);
    });
    return true;
}

/*
 * Validates the given input for its lenght against the expected length and checks whether all characters are number.
 */
export function validateCommandSets(commandSets, expectedCommandLength){
    validateCommandSetLength(commandSets, expectedCommandLength);
    return validateNumbers(commandSets);
}

/*
 * Validates the given pixel whether it falls within the canvas boundary.
 */
export function isCoordinatesWithinCanvasBoundary(canvas, pixels) {
    pixels.forEach((pixel) => {
        if(pixel.axisY < 1 || pixel.axisY > canvas.pixels.length -2
            || pixel.axisX < 1|| pixel.axisX > canvas.pixels[0].length -2)
            throw Error(OUT_OF_BOUNDARY_ERR_MSG);
    });
    return true;
}
