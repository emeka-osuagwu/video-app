
import { module, inject } from 'angular-mocks';
import ServiceModule from './services.module';

describe('CommonUtil Service', function () {
    
    var CommonUtil = {};

    beforeEach(module('Services'));

    beforeEach(inject(function (_CommonUtil_) {
        CommonUtil = _CommonUtil_;
    }));

    describe('sortObjectArray function', function () {
        it('should return empty array if passed empty array', function () {
            var inputArray = [];

            expect(CommonUtil.sortObjectArray(inputArray, 'value')).toEqual(inputArray);
        });

        it('should sort an array of objects in ascending order of values that are numbers', function () {
            var inputArray = [{
                value: 2
            }, {
                value: 3
            }, {
                value: 1
            }];
            var expectedArray = [{
                value: 1
            }, {
                value: 2
            }, {
                value: 3
            }];

            expect(CommonUtil.sortObjectArray(inputArray, 'value')).toEqual(expectedArray);
        });

        it('should sort an array of objects in descending order of values that are numbers', function () {
            var inputArray = [{
                value: 2
            }, {
                value: 3
            }, {
                value: 1
            }];
            var expectedArray = [{
                value: 3
            }, {
                value: 2
            }, {
                value: 1
            }];

            expect(CommonUtil.sortObjectArray(inputArray, 'value', 'descending')).toEqual(expectedArray);
        });

        it('should sort an array of objects in ascending order of values that are not numbers', function () {
            var inputArray = [{
                value: 'Chirag'
            }, {
                value: 'Amit'
            }, {
                value: 'John'
            }];
            var expectedArray = [{
                value: 'Amit'
            }, {
                value: 'Chirag'
            }, {
                value: 'John'
            }];

            expect(CommonUtil.sortObjectArray(inputArray, 'value')).toEqual(expectedArray);
        });

        it('should sort an array of objects in descending order of values that are not numbers', function () {
            var inputArray = [{
                value: 'Chirag'
            }, {
                value: 'Amit'
            }, {
                value: 'John'
            }];
            var expectedArray = [{
                value: 'John'
            }, {
                value: 'Chirag'
            }, {
                value: 'Amit'
            }];

            expect(CommonUtil.sortObjectArray(inputArray, 'value', 'descending')).toEqual(expectedArray);
        });
    });
});