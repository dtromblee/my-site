/*global angular*/
angular.module('mySite')
    .controller('MainCtrl', ['$scope', '$location', function($scope, $location) {
        $scope.view = function() {
            //angular gods, please forgive me
            angular.element(document.getElementById('view-master')).removeClass('hidden');
        };
    }]);
