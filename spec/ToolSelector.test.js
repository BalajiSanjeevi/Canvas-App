import toolSelector from '../src/ToolSelector';
import Rectangle from '../src/elements/Rectangle';
import line from '../src/elements/Line';
import bucketFill from '../src/elements/BucketFill';
import {CANVAS_NOT_INITIALIZED_ERR_MSG} from '../src/constants/ErrorConstants';

jest.enableAutomock();
jest.unmock('../src/ToolSelector');

describe("ToolSelector", () => {
    let canvas = {}, coordinates;
    it("should call draw on the rectangle object when command = R", () => {
        coordinates = [1, 2, 3, 4];
        toolSelector(canvas, 'R', coordinates);
        expect(Rectangle.mock.instances[0].draw).toBeCalled();
    });

    it("should call draw on the rectangle object when command = L", () => {
        coordinates = [1, 2, 3, 4];
        toolSelector(canvas, 'L', coordinates);
        expect(line.mock.instances[0].draw).toBeCalled();
    });

    it("should call draw on the rectangle object when command = B", () => {
        coordinates = [1, 2, 3, 4];
        toolSelector(canvas, 'B', coordinates);
        expect(bucketFill.mock.instances[0].draw).toBeCalled();
    });

    it("should throw error when canvas is passed as valid object", () => {
        [null, undefined, ''].forEach((value) => {
            expect(() => {
                toolSelector(value, 'B', coordinates);
            }).toThrow(CANVAS_NOT_INITIALIZED_ERR_MSG);
        });
    });
});