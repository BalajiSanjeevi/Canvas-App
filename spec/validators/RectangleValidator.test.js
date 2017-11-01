import RectangleValidate from '../../src/validators/RectangleValidator';
import * as validate from '../../src/validators/Validator';

jest.mock('../../src/validators/Validator');

describe("RectangleValidate", () => {
    let canvas;
    beforeEach(() => {
        canvas = {
            pixels: [... new Array(10)].map(() => {
                return new Array(10);
            })
        }
    });
    it("should return true when called with coordinates [1, 2, 3, 4]) ", () => {
        expect(RectangleValidate([1, 2, 3, 4], canvas)).toBeTruthy();
    });

    it("should return true when called with coordinates [4, 2, 6, 4]) ", () => {
        expect(RectangleValidate([4, 2, 6, 4], canvas)).toBeTruthy();
    });

    it("should throw error when called with coordinates [4, 2, 3, 4]) ", () => {
        expect(( () => RectangleValidate([4, 2, 3, 4], canvas))).toThrow();
    });

    it("should throw error when called with coordinates [6, 3, 3, 1]) ", () => {
        expect((() => RectangleValidate([6, 3, 3, 1], canvas))).toThrow();
    });

    it("should throw error when called with coordinates [1, 2, 2, 1]) ", () => {
        expect(( () => RectangleValidate([1, 2, 2, 1], canvas))).toThrow();
    });

    it("should have called isCoordinatesWithinCanvasBoundary with canvas and pixels", () => {
        const commandSets = [1, 2, 3, 4];
        RectangleValidate(commandSets, canvas);
        let pixels = [{axisX: commandSets[0], axisY: commandSets[1]}, {axisX: commandSets[2], axisY: commandSets[3]}];
        expect(validate.isCoordinatesWithinCanvasBoundary).toBeCalledWith(canvas, pixels);
    });

    it("should have called validateCommandSets with commandSets and expected input length(4)", () => {
        const commandSets = [1, 2, 3, 4];
        RectangleValidate(commandSets, canvas);
        let pixels = [{axisX: commandSets[0], axisY: commandSets[1]}, {axisX: commandSets[2], axisY: commandSets[3]}];
        expect(validate.validateCommandSets).toBeCalledWith(commandSets, 4);
    });
});