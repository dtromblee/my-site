/*global angular*/
'use strict';

angular.module('mySite')
    .directive('pageHeader', [function() {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                title: '@'
            },
            templateUrl: 'app/components/page-header/page-header.html',
            link: function(scope, element){

            }
        };
    }]);
