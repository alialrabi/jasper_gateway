(function() {
    'use strict';

    angular
        .module('jasperGatewayApp')
        .controller('StudentDetailController', StudentDetailController);

    StudentDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Student'];

    function StudentDetailController($scope, $rootScope, $stateParams, entity, Student) {
        var vm = this;
        vm.student = entity;
        
        var unsubscribe = $rootScope.$on('jasperGatewayApp:studentUpdate', function(event, result) {
            vm.student = result;
        });
        $scope.$on('$destroy', unsubscribe);

    }
})();
