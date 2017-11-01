import Rectangle from '../../src/elements/Rectangle';
import Canvas from '../../src/canvas/Canvas';

jest.mock('../../src/io/OutputWriter');

describe("Rectangle", () => {
    let rectangle, canvas;

    beforeEach(() => {
        canvas = new Canvas([10, 4]);
    });

    it("should match snapshot", () => {
        rectangle = new Rectangle([2, 1, 6, 3]);
        rectangle.draw(canvas);
        expect(canvas.pixels).toMatchSnapshot();
    });

});