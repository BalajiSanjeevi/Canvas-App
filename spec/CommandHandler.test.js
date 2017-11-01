import * as helper from '../src/CommandHandler';
import commandHandler from '../src/CommandHandler';
import * as validate from '../src/validators/Validator';
import toolSelector from '../src/ToolSelector';
import Canvas from '../src/canvas/Canvas';
import write from '../src/io/OutputWriter';

jest.enableAutomock();
jest.unmock('../src/CommandHandler');

describe("Helper utility function test", () => {

    describe("isQuit", () => {
        it("should return true when command 'Q' is passed", () => {
            expect(helper.isQuit('Q')).toBeTruthy();
        });

        it("should return false when command 'D' is passed", () => {
            expect(helper.isQuit('DD')).toBeFalsy();
        });
    });

    describe("isInitializeCanvas", () => {
        it("should return true when command 'C' is passed", () => {
            expect(helper.isInitializeCanvas('C')).toBeTruthy();
        });

        it("should return false when command 'D' is passed", () => {
            expect(helper.isInitializeCanvas('D')).toBeFalsy();
        });
    });
});

describe("CommandHandler", () => {

    it("should return false when command 'Q' is passed", () => {
        validate.validateCommand.mockReturnValue(true);
        expect(commandHandler('Q')).toBeFalsy();
        expect(validate.validateCommand).toBeCalledWith('Q');
    });

    it("should have called toolSelector when command 'R' is passed", () => {
        expect(commandHandler('R 1 2')).toBeTruthy();
        expect(toolSelector).toBeCalledWith(undefined, 'R', ['1', '2']);
    });

    it("should have called canvas draw when command 'C' is passed", () => {
        Canvas.validate.mockReturnValue(true);
        expect(commandHandler('C 1 2')).toBeTruthy();
        expect(Canvas.mock.instances[0].draw).toBeCalled();
    });

    it("should have called canvas validate when command 'C' is passed", () => {
        expect(commandHandler('C 1 20')).toBeTruthy();
        expect(Canvas.validate).toBeCalledWith(['1', '20']);
    });

    it("should write the error with the writer when any error is thrown", () => {
        validate.validateCommand.mockImplementationOnce(() => {
            throw Error("Error Occurred");
        });
        commandHandler('Q')
        expect(write).toBeCalledWith("Error Occurred");
    })
});