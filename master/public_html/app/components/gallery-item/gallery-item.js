/*global angular*/
angular.module('mySite')
    .directive('galleryItem', [function() {
        return {
            restrict : 'E',
            scope : {
                item : '=item'
            },
            templateUrl : 'app/components/gallery-item/gallery-item.html'
        }
    }]);