/*global angular*/

angular.module('mySite')
    .controller('HomeCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
        $scope.test = $location.url();
    }]);