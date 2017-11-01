import LineValidate from '../../src/validators/LineValidator';
import * as validate from '../../src/validators/Validator';

jest.mock('../../src/validators/Validator');


describe("LineValidate", () => {
    let canvas;
    beforeEach(() => {
        canvas = {
            pixels: [... new Array(5)].map(() => {
                return new Array(5);
            })
        }
    });

    it("should return true when called with coordinates for drawling vertical line [1, 2, 1, 4]) ", () => {
        expect(LineValidate([1, 2, 1, 4], canvas)).toBeTruthy();
    });

    it("should return true when called with coordinates for drawling horizontal line [1, 2, 4, 2]) ", () => {
        expect(LineValidate([1, 2, 4, 2], canvas)).toBeTruthy();
    });

    it("should throw error when called with coordinates [4, 2, 3, 4]) ", () => {
        expect((() => LineValidate([4, 2, 3, 4], canvas))).toThrow();
    });

    it("should throw error when called with coordinates [1, 2, 2, 1]) ", () => {
        expect((() =>  LineValidate([1, 2, 2, 1], canvas))).toThrow();
    });

    it("should have called isCoordinatesWithinCanvasBoundary with canvas and pixels", () => {
        const commandSets = [4, 2, 8, 2];
        LineValidate(commandSets, canvas);
        let pixels = [{axisX: commandSets[0], axisY: commandSets[1]}, {axisX: commandSets[2], axisY: commandSets[3]}];
        expect(validate.isCoordinatesWithinCanvasBoundary).toBeCalledWith(canvas, pixels);
    });

    it("should have called validateCommandSets with commandSets and expected input length(4)", () => {
        const commandSets = [4, 2, 8, 2];
        LineValidate(commandSets, canvas);
        expect(validate.validateCommandSets).toBeCalledWith(commandSets, 4);
    });

});