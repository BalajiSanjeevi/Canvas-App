import Pixel from '../canvas/Pixel';
import rectangleValidate from '../validators/RectangleValidator';

export default class Rectangle {

    constructor(commandSets){
        this._topLeftPixel = new Pixel(...commandSets);
        this._bottomRightPixel = new Pixel(commandSets[2], commandSets[3]);
        this.calculateOtherTwoPixels(commandSets);
    }

    calculateOtherTwoPixels(commandSets){
        this._topRightPixel = new Pixel(commandSets[2], commandSets[1]);
        this._bottomLeftPixel = new Pixel(commandSets[0], commandSets[3]);
    }

    static validate = rectangleValidate;
    /*
     * Draws the rectangle based on the input coordinates pairs.
     */
    draw(canvas){
        canvas.drawHorizontalLine(this._topLeftPixel.axisX, this._topRightPixel.axisX, this._topLeftPixel.axisY);
        canvas.drawHorizontalLine(this._bottomLeftPixel.axisX, this._bottomRightPixel.axisX, this._bottomLeftPixel.axisY);
        canvas.drawVerticalLine(this._topLeftPixel.axisY, this._bottomLeftPixel.axisY, this._topLeftPixel.axisX);
        canvas.drawVerticalLine(this._topRightPixel.axisY, this._bottomRightPixel.axisY, this._bottomRightPixel.axisX);
        canvas.draw();
    }
}

