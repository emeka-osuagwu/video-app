
import { module, inject } from 'angular-mocks';
import DirectiveModule from '../directives.module';

describe('NoParallelPlay Directive', function () {

    var $compile,
        $rootScope;

    beforeEach(module(DirectiveModule.name));

    beforeEach(inject(function ($injector) {
        $compile = $injector.get('$compile');
        $rootScope = $injector.get('$rootScope');
    }));

    it('should only play one video at a time', function () {
        var element = $compile('<div><video no-parallel-play><source src="videos/Getting_Started_With_React.js.mp4" type="video/mp4"></video></div>')($rootScope);
        $rootScope.$digest();

        document.body.innerHTML = '<div><video id="vid1" autoplay><source src="videos/Getting_Started_With_React.js.mp4" type="video/mp4"></div>';

        // angular.element(element.find('video')[0]).trigger('play');
        console.log(document.getElementById('vid1'));
        expect(document.getElementById('vid1').tagName).toBe('VIDEO');
    });
});