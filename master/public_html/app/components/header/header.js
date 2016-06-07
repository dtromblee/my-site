/*global angular*/
'use strict';

angular.module('mySite')
    .directive('header', ['$location', function($location) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/components/header/header.html',
            controller: ['$scope', function($scope){
                $scope.menuItems = [
                    {
                        'label' : 'Home',
                        'path' : '/'},
                    {
                        'label' : 'About',
                        'path' : '/about'},
                    {
                        'label' : 'Products',
                        'path' : '/products'},
                    {
                        'label' : 'Contact Us',
                        'path' : '/contact-us'}
                ];
                
                $scope.gridSize = Math.floor(8 / $scope.menuItems.length);
                
                $scope.selectMenuItem = function(index) {
                    $scope.menuItemSelected = index;
                }
                $scope.menuItemSelected;
                
            }]
        };
    }]);