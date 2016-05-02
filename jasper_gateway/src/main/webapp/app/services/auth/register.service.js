(function () {
    'use strict';

    angular
        .module('jasperGatewayApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
