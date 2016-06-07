/*global angular*/
'use strict';

angular.module('mySite')
    .directive('breadcrumb', ['$location', function($location) {
        return {
            restrict : 'E',
            transclude : true,
            scope : {},
            link : function (scope, element) {
                 var isBaseUrl = function() {
                    return $location.$$path != '/';
                };
                
                var buildTrail = function() {
                    var trail = [];
                    var pathParts = (($location.$$path).split('/')).slice(1);
                    
                    for(var i=0; i<pathParts.length; i++) {
                        trail[i] = {};
                        trail[i]['part'] = pathParts[i];
                        
                        var hRef = '#';
                        for(var j=0; j<i+1; j++) {
                            hRef += '/' + pathParts[j];
                        }
                        
                        trail[i]['href'] = hRef;
                    }
                    
                    console.log(trail);
                    return trail;
                };
                
                scope.trail = buildTrail();
                
                scope.isBaseUrl = isBaseUrl();
                
                scope.$on('$locationChangeSuccess', function() {
                    scope.isBaseUrl = isBaseUrl();
                    scope.trail = buildTrail();    
                    console.log(scope.trail);
                });
                
            },
            templateUrl : 'app/components/breadcrumb/breadcrumb.html'
        };
    
    }]);