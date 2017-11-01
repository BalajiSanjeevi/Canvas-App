import Pixel from '../canvas/Pixel';
import bucketValidate from '../validators/BucketFillValidator';

export default class BucketFill {

    constructor([axisX, axisY, fillChar]){
        this._startPoint = new Pixel(axisX, axisY);
        this._fillChar = fillChar;
    }

    static validate = bucketValidate;

    /*
     * Flood fill, also called seed fill, is an algorithm that determines the area connected to a given node in a multi-dimensional array.
     * It is used in the "bucket" fill tool of paint programs to fill connected. The below function has been implemented based on
     * Recursive flood fill with 4 directions. https://en.wikipedia.org/wiki/Flood_fill
     */
    floodFill(canvas, pixel){
        if(canvas.pixels[pixel.axisY][pixel.axisX] === " "){
            canvas.pixels[pixel.axisY][pixel.axisX] = this._fillChar;
            this.floodFill(canvas, new Pixel(pixel.axisX + 1, pixel.axisY));
            this.floodFill(canvas, new Pixel(pixel.axisX - 1, pixel.axisY));
            this.floodFill(canvas, new Pixel(pixel.axisX, pixel.axisY + 1));
            this.floodFill(canvas, new Pixel(pixel.axisX, pixel.axisY - 1));
        }
    }
    /*
     * Function which is being called to fill and draw the pixels for bucket fill command.
     */
    draw(canvas){
        this.floodFill(canvas, this._startPoint);
        canvas.draw();
    }
}