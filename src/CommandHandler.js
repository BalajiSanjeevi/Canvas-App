import write from './io/OutputWriter';
import toolSelector from './ToolSelector';
import {validateCommand} from './validators/Validator';
import Canvas from './canvas/Canvas';

const QUIT = 'Q';
const CANVAS = 'C';

/*
 * Variable to persist the state of the canvas.
 */
let canvas;


/*
 * Checks whether the command keyed in is for exiting from the application.
 */
export function isQuit (command) {
    return command === QUIT;
}

/*
 * Checks whether the command keyed in is for initializing the canvas context.
 */
export function isInitializeCanvas(command){
    return command === CANVAS;
}

/*
 * Creates the canvas context.
 */
export function drawCanvas(commandSet) {
    if(Canvas.validate(commandSet)) {
        canvas = new Canvas(commandSet);
        canvas.draw();
    }
}

/*
 * Function takes the input and process it to create the canvas context for further drawing.
 * It will exit the application if the command === 'Q' else continue drawing if its valid command.
 *
 */
export default (input) => {
    //try catch block is provided here to handle all error to avoid
    // exiting from the application until the user key in quit command.
    try {
        let commandSet = input.split(" ");
        const command = commandSet.shift().toUpperCase();
        if(validateCommand(command) && isQuit(command)){
            return false;
        } else if(isInitializeCanvas(command)){
            drawCanvas(commandSet);
        } else {
            toolSelector(canvas, command, commandSet);
        }
    } catch(e){
        write(e.message);
    }
    return true;
};


