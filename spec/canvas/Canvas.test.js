import Canvas from '../../src/canvas/Canvas';
import * as validate from '../../src/validators/Validator';
import writer from '../../src/io/OutputWriter';

jest.mock('../../src/validators/Validator');
jest.mock('../../src/io/OutputWriter');

describe("Canvas Test", () => {

    it("should initialize the canvas boundary", () => {
        const canvas = new Canvas([10, 10]);
        expect(canvas.pixels).toMatchSnapshot();
    });

    describe("validate", () => {

        it("should return true when input [1, 2]", () => {
            validate.validateCommandSetLength.mockReturnValue(true);
            validate.validateNumbers.mockReturnValue(true);
            expect(Canvas.validate(['1', '2'])).toBeTruthy();
        });

        it("should return false when input [1, 2, 3]", () => {
            validate.validateCommandSetLength.mockReturnValue(false);
            validate.validateNumbers.mockReturnValue(true);
            expect(Canvas.validate(['1', '2', '3'])).toBeFalsy();
        });

        it("should have called validateCommandSetLength with [3, 4] and 2", () => {
            Canvas.validate(['3', '4']);
            expect(validate.validateCommandSetLength).toBeCalledWith(['3', '4'], 2);
        });

        it("should have called validateNumber with [1,2]", () => {
            Canvas.validate(['1', '2']);
            expect(validate.validateNumbers).toBeCalledWith(['1', '2']);
        });
    });

    describe("Canvas core functions test", () => {
        let canvas;
        beforeEach(() => {
            canvas = new Canvas([10, 10]);
        });

        it("should fill row 2 with character x from index 1 to 6 when drawHorizontalLine called", ()=> {
            canvas.drawHorizontalLine(1, 6, 2);
            const row2 = canvas.pixels[2];
            row2.forEach((char, i) => {
                if(i >= 1 && i <= 6)
                    expect(row2[i]).toBe('X');
            });
        });

        it("should fill column 2 with character x from row 1 to 6 when drawVerticalLine called", ()=> {
            canvas.drawVerticalLine(1, 6, 2);

            canvas.pixels.forEach((row, i) => {
                if(i >= 1 && i <= 6)
                    expect(row[2]).toBe('X');
            });
        });

        it("draw function should call the write function 12 times with the each row as string", ()=> {
            canvas.draw();
            expect(writer.mock.calls.length).toBe(12);
            canvas.pixels.forEach((row, i) => {
                expect(writer.mock.calls[i].toString()).toBe(row.join(""));
            });
        })
    });

});