import Coordinates from '../canvas/Pixel';
import lineValidate from '../validators/LineValidator';

export default class Line {

    constructor(commandSets){
        this._startPoint = new Coordinates(...commandSets);
        this._endPoint = new Coordinates(commandSets[2], commandSets[3]);
    }

    static validate = lineValidate;

    /*
     * Draws either vertical or horizontal line based on the input coordinate pairs.
     */
    draw(canvas){
        if(this.isDrawHorizontalLine()) {
            canvas.drawHorizontalLine(this._startPoint.axisX, this._endPoint.axisX, this._startPoint.axisY);
        } else {
            canvas.drawVerticalLine(this._startPoint.axisY, this._endPoint.axisY, this._startPoint.axisX);
        }
        canvas.draw();
    }

    isDrawHorizontalLine(){
        return this._startPoint.axisY === this._endPoint.axisY;
    }

}