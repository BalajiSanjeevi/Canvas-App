import Line from '../../src/elements/Line';
import Canvas from '../../src/canvas/Canvas';

jest.mock('../../src/io/OutputWriter');

describe("Rectangle", () => {
    let line, canvas;

    beforeEach(() => {
        canvas = new Canvas([10, 4]);
    });

    it("should match snapshot for horizontal line", () => {
        line = new Line([2, 1, 6, 1]);
        line.draw(canvas);
        expect(canvas.pixels).toMatchSnapshot();
    });

    it("should match snapshot for vertical line", () => {
        line = new Line([2, 1, 2, 4]);
        line.draw(canvas);
        expect(canvas.pixels).toMatchSnapshot();
    });

});