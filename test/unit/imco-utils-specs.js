describe('imco', function() {

    beforeEach(module('imco'));
    var utils;
    beforeEach(inject(function(_utils_) {
        utils = _utils_;
    }));
    it('Deberia ser capitalizar azul', function() {
        var color = 'azul';
        expect(color.capitalize()).toBe('Azul');
    });
    /*;

        it('should test the homePages controller', inject(function($controller, $rootScope) {
            var ctrl = $controller('HomeCtrl', {
                $scope: $rootScope
            });
            expect($rootScope.welcome_message.length).toBeGreaterThan(0);
        }));
       
              it('should properly provide a welcome message', inject(function(welcomeMessage) {
                  expect(welcomeMessage()).toMatch(/welcome/i);
              }));
          */

});
