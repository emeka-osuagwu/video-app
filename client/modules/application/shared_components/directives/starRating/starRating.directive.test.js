
import { module, inject } from 'angular-mocks';
import DirectiveModule from '../directives.module';

describe('Star Rating Directive', function () {

    var $compile,
        $rootScope;

    beforeEach(module(DirectiveModule.name));

    beforeEach(inject(function ($injector) {
        $compile = $injector.get('$compile');
        $rootScope = $injector.get('$rootScope');
    }));

    it('should output star rating to expected HTML format', function () {
        $rootScope.ratingValue = 1;
        $rootScope.max = 1;
        $rootScope.size = 3;

        var element = $compile('<div star-rating rating-value="ratingValue" data-max="max" size="size"></div>')($rootScope);
        $rootScope.$digest();
        expect(element.find('ul').length).toBe(1);
    });
});