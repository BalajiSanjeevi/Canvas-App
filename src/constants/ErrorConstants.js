import * as CONSTANTS from  './CommonConstants';

export const INVALID_COMMAND_ERR_MSG = `Command keyed in is invalid. Available command options are ${CONSTANTS.VALID_COMMANDS}. Key in any of these commands`;

export const OUT_OF_BOUNDARY_ERR_MSG = "Coordinates out of Canvas Boundary";

export const NOT_ENOUGH_PARAMS_ERR_MSG = "Not enough number of expected arguments";

export const NAN_ERR_MSG = "Not a number. Key in numbers";

export const NEGATIVE_COORDINATES_ERR_MSG= "Coordinate should be greater than 0";

export const INVALID_COORDINATES_PAIR_RECTANGLE_ERR_MSG = "Coordinate pair doesn't satisfy for drawing rectangle. The second pixel should always be greater than the first pixel";

export const INVALID_COORDINATES_PAIR_LINE_ERR_MSG = "Start and end coordinate pair doesn't satisfy for either drawing vertical nor horizontal line";

export const FILL_COLOUR_CHARACTER_INVALID_LENGTH_ERR_MSG = "Kindly input single character for fill colour";

export const CANVAS_NOT_INITIALIZED_ERR_MSG = "Canvas not initialized yet. Kindly execute command 'C' with Width and Height to create the canvas";
