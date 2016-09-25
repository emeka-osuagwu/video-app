
import { module, inject } from 'angular-mocks';
import DirectiveModule from '../directives.module';

describe('Infinite Scroll Directive', function () {

    var $compile,
        $rootScope;

    beforeEach(module(DirectiveModule.name));

    beforeEach(inject(function ($injector) {
        $compile = $injector.get('$compile');
        $rootScope = $injector.get('$rootScope');
    }));

    it('should add scroll event on window', function () {
        $rootScope.value = 1;
        $rootScope.increment = function () {
            $rootScope.value += 1;
        };
        var element = $compile('<div infinite-scroll="increment()"></div>')($rootScope);
        $rootScope.$digest();
        while(true) {
            $(window).trigger('scroll');
            if ($rootScope.value > 1) {
                break;
            }
        }
        expect($rootScope.value).toBe(2);
    });
});