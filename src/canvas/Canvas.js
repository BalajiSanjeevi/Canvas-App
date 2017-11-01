import write from '../io/OutputWriter';
import {validateNumbers, validateCommandSetLength} from '../validators/Validator';

const EXPECTED_INPUT_LENGTH = 2;

const BOUNDARY_BORDER_PIXEL_LENGTH = 2;

const LEFT_AND_RIGHT_CANVAS_BORDER_CHAR = "|";

const TOP_AND_BOTTOM_CANVAS_BORDER_CHAR = "-";


/*
 * Canvas class is meant to hold the canvas context which will have the canvas boundary within which we can play around
 * and it has couple of function to help in drawing line and getting the context.
 */
export default class Canvas {

    /*
     * Validates the commandset for the required length and checks whether the command set is all numbers.
     */
    static validate = function (commandSet){
        return  validateCommandSetLength(commandSet, EXPECTED_INPUT_LENGTH) && validateNumbers(commandSet);
    };

    /*
     * Constructor to create the canvas object and initializes the canvas boundary.
     */
    constructor([width, height]){
        this._pixels = [[]];
        this._width = parseInt(width);
        this._height =  parseInt(height);
        this.initializeCanvasBoundary(this._height + BOUNDARY_BORDER_PIXEL_LENGTH, this._width + BOUNDARY_BORDER_PIXEL_LENGTH);
    }

    /*
     * Helps in initializing the canvas boundary.
     */
    initializeCanvasBoundary(height, width){
        this._pixels = [... new Array(height)].map((row, i) => {
            return [... new Array(width)].map((column, j) => {
                if(i === 0 || i === height - 1){
                    return TOP_AND_BOTTOM_CANVAS_BORDER_CHAR;
                } else if(j === 0 || j === width - 1) {
                    return LEFT_AND_RIGHT_CANVAS_BORDER_CHAR;
                }
                return " ";
            });
        });
    }

    /*
     * Exposes the pixels which contains the actual canvas boundary with the state of it.
     */
    get pixels(){
        return this._pixels;
    }

    /*
     *  Calls the write function to print all the rows and columns.
     */
    draw(){
        this._pixels.forEach((row) => {
            write(row.join(""));
        })
    }

    /*
     * Fills the character 'X' from the given startPoint and endPoint index in the given axisY row
     */
    drawHorizontalLine(startPoint, endPoint, axisY){
        // As per Fill function, it fills the character until < endPoint. As we need to include the last position like (<=endPoint). so adding 1 to the endpoint.
        this._pixels[axisY].fill('X', startPoint, endPoint + 1);
    }
    /*
     * Fills the character 'X' on each row from the given startPoint and endPoint index at the given axisX column index.
     */
    drawVerticalLine(startPoint, endPoint, axisX){
        for(var i = startPoint; i <= endPoint; i++){
            this._pixels[i][axisX] = 'X';
        }
    }
}