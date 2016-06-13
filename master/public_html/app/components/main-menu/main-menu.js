/*global angular*/

angular.module('mySite')
    .directive('mainMenu', ['$location', function($location) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/components/main-menu/main-menu.html',
            controller: ['$scope', 'config', function($scope, config){
                $scope.menuItems = config.sitemap();
               
                $scope.gridSize = Math.floor(8 / $scope.menuItems.length);
                
                $scope.selectMenuItem = function(index) {
                    $scope.menuItemSelected = index;
                };
                $scope.menuItemSelected = undefined;
                
            }]
        };
    }]);
