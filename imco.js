angular.module('imco', [])
    .factory('utils', function() {
        // ...
        String.prototype.capitalize = function() {
            return this.toLowerCase().replace(/(^|[\s])\w/g, function(m) {
                return m.toUpperCase();
            });
        };
        return this;
    });
