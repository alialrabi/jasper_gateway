(function() {
    'use strict';
    angular
        .module('jasperGatewayApp')
        .factory('Student', Student);

    Student.$inject = ['$resource'];

    function Student ($resource) {
        var resourceUrl =  'jasper_microservice/' + 'api/students/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'exportPDF': {method: 'GET',isArray: true, params: {id:'@id'}, url: 'jasper_microservice/api/exportPDF'},
            'exportWord': {method: 'GET',isArray: true, params: {id:'@id'}, url: 'jasper_microservice/api/exportWord'},
            'exportByAge': {method: 'GET', params: {age:'@age'}, url: 'jasper_microservice/api/exportByAge/:age'},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
