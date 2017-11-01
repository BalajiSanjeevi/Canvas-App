import Line from './elements/Line';
import Rectangle from './elements/Rectangle';
import BucketFill from './elements/BucketFill';
import {CANVAS_NOT_INITIALIZED_ERR_MSG} from './constants/ErrorConstants';

/*
 * Variable to hold the mapping of command with the various shapes element.
 */
let commandElementMap = {
    'L': Line,
    'R': Rectangle,
    'B': BucketFill
};

/*
 * Function to select the tool and draw based on the user command.
 */
export default (canvas, command, coordinates) => {
    if(!canvas) {
        throw Error(CANVAS_NOT_INITIALIZED_ERR_MSG);
    }
    commandElementMap[command].validate(coordinates, canvas);
    let shape = new commandElementMap[command](coordinates);
    shape.draw(canvas);
};
