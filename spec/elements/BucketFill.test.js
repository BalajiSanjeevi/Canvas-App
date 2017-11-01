import BucketFill from '../../src/elements/BucketFill';
import Canvas from '../../src/canvas/Canvas';

jest.mock('../../src/io/OutputWriter');

describe("BucketFill", () => {
    let bucketFill, canvas;

    beforeEach(() => {
        canvas = new Canvas([10, 4]);
    });

    it("should match snapshot", () => {
        canvas.drawHorizontalLine(1, 4, 2);
        canvas.drawVerticalLine(2, 4, 4);
        bucketFill = new BucketFill([5, 2, '*']);
        bucketFill.draw(canvas);
        expect(canvas.pixels).toMatchSnapshot();
    });

});