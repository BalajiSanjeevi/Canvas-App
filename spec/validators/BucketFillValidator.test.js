import BucketFillValidate from '../../src/validators/BucketFillValidator';
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

    it("should return true when called with commandsets [4, 2, *]) ", () => {
        expect(BucketFillValidate([4, 2, '*'], canvas)).toBeTruthy();
    });

    it("should throw error when called with commandsets [4, 2, **]) ", () => {
        expect((() => BucketFillValidate([4, 2, '**'], canvas))).toThrow();
    });

    it("should throw error when called with commandsets [4, 2]) ", () => {
        expect((() =>  BucketFillValidate([4, 2], canvas))).toThrow();
    });

    it("should have called isCoordinatesWithinCanvasBoundary with canvas and pixels", () => {
        const commandSets = [4, 2, '*'];
        BucketFillValidate(commandSets, canvas);
        let pixels = [{axisX: commandSets[0], axisY: commandSets[1]}];
        expect(validate.isCoordinatesWithinCanvasBoundary).toBeCalledWith(canvas, pixels);
    });

    it("should have called validateCommandSets with commandSets and expected input length(4)", () => {
        const commandSets = [4, 2, '*'];
        BucketFillValidate(commandSets, canvas);
        expect(validate.validateCommandSets).toBeCalledWith([4, 2], 2);
    });

});