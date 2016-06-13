/*global angular*/
/*global console*/

angular.module('mySite')
    .controller('ProductDetailsCtrl', ['$scope', 'productDetails', function($scope, productDetails) {
        $scope.productDetails = productDetails.products[0];
        console.log($scope.productDetails);

    }]);
