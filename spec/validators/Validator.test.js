import * as validate from '../../src/validators/Validator';
import {OUT_OF_BOUNDARY_ERR_MSG, NOT_ENOUGH_PARAMS_ERR_MSG,
    NEGATIVE_COORDINATES_ERR_MSG, NAN_ERR_MSG, INVALID_COMMAND_ERR_MSG} from '../../src/constants/ErrorConstants';

describe("Test functions in the validate file", () => {

    describe("isNumber", ()=> {
        it("should throw error when called with other than number ", () => {
            ['a', ''].forEach((input) => {
                expect(() => {validate.isNumber('input')}).toThrow(NAN_ERR_MSG);
            });
        });

        it("should return true when called with number : '10", () => {
            expect(validate.isNumber('10')).toBeTruthy();
        })
    });

    describe("validateNumber", ()=> {
        beforeEach(() => {
            jest.spyOn(validate, 'isNumber').mockImplementation(() => true);
        });
        it("should throw error when called with number <= 0", ()=> {
            ['0', '-10'].forEach((input) => {
                expect(() =>{
                    validate.validateNumber(input);
                }).toThrow(NEGATIVE_COORDINATES_ERR_MSG);
            });
        });

        it("should return true when called with number > 0", ()=> {
            ['10', 20].forEach((input) => {
                expect(validate.validateNumber(input)).toBeTruthy();
            });
        });

    });

    describe("validateNumbers", ()=> {
        beforeEach(() => {
            jest.spyOn(validate, 'isNumber').mockImplementation(() => true);
        });
        it("should throw error when called with number <= 0", ()=> {
            expect(() => validate.validateNumbers(['0', '-10'])).toThrow(NEGATIVE_COORDINATES_ERR_MSG);
        });

        it("should return true when called with number > 0", ()=> {
            expect(validate.validateNumbers(['10', 20])).toBeTruthy();
        });

    });

    describe("validateCommand", () => {
        it("should throw error when called with commands other than 'C', 'L', 'R', 'B', 'Q'", () => {
            ['10', 'D', 'E'].forEach((input) => {
                expect(() => {
                    validate.validateCommand(input);
                }).toThrow(INVALID_COMMAND_ERR_MSG);
            });
        });

        it("should return true when called with any of the command 'C', 'L', 'R', 'B', 'Q'", () => {
            ['C', 'L', 'R', 'B', 'Q'].forEach((input) => {
                expect(validate.validateCommand(input)).toBeTruthy();
            });
        });
    });

    describe("validateCommandSetLength", () => {
        it("should throw error when called with commandSet as [1, 2, 3] and expected as 2", () => {
            expect(() => {
                validate.validateCommandSetLength([1, 2, 3], 2);
            }).toThrow(NOT_ENOUGH_PARAMS_ERR_MSG);
        });

        it("should throw error when called with commandSet as [1, 2, 3] and expected as 4", () => {
            expect(() => {
                validate.validateCommandSetLength([1, 2, 3], 4);
            }).toThrow(NOT_ENOUGH_PARAMS_ERR_MSG);
        });

        it("should return true when called with commandSet as [1, 2, 3] and expected as 3", () => {
            expect(validate.validateCommandSetLength([1, 2, 3], 3)).toBeTruthy();
        });
    });

    describe("isCoordinatesWithinCanvasBoundary", () => {
        let canvas;
        beforeEach(() => {
            canvas = {
                pixels: [... new Array(7)].map(() => {
                    return new Array(7);
                })
            }
        });

        it("should throw error when called with 10, 2", () => {
            expect(() => {
                validate.isCoordinatesWithinCanvasBoundary(canvas, [{axisX: 10, axisY: 2}]);
            }).toThrow(OUT_OF_BOUNDARY_ERR_MSG);
        });

        it("should throw error when called with 1, 2 and -5, -3", () => {
            expect(() => {
                validate.isCoordinatesWithinCanvasBoundary(canvas, [{axisX: 1, axisY: 2}, {axisX: -5, axisY: -3}]);
            }).toThrow(OUT_OF_BOUNDARY_ERR_MSG);
        });

        it("should throw error when called with 1, 2 and 4, 0", () => {
            expect(() => {
                validate.isCoordinatesWithinCanvasBoundary(canvas, [{axisX: 1, axisY: 2}, {axisX: 4, axisY: 0}]);
            }).toThrow(OUT_OF_BOUNDARY_ERR_MSG);
        });

        it("should return true when called with 1, 2", () => {
            expect(validate.isCoordinatesWithinCanvasBoundary(canvas, [{axisX: 1, axisY: 2}])).toBeTruthy();
        });

        it("should return true when called with 1, 2 and 2, 4", () => {
            expect(validate.isCoordinatesWithinCanvasBoundary(canvas, [{axisX: 1, axisY: 2}, {axisX: 2, axisY: 4}])).toBeTruthy();
        });
    });

    describe("validateCommandSets", () => {
        it("should return true when called with [1, 2, 3, 4] and length 4", () => {
            expect(validate.validateCommandSets([1, 2, 3, 4], 4)).toBeTruthy();
        })
    });
});