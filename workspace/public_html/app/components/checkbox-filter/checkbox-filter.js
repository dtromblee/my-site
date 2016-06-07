/*global angular*/
angular.module('mySite')
    .directive('checkboxFilter', [function() {
         return {
            restrict : 'E',
            transclude : true,
            scope : {
                values : '=values',
                filteredValues : '=filtered'
            },
            link : function (scope, element) {
                scope.addToFilterList = function(value) {
                    var i = $.inArray(value, scope.filteredValues);
                    if(i > -1) {
                        scope.filteredValues.splice(i, 1);
                    } 
                    else {
                        scope.filteredValues.push(value);
                    }
                     console.log('is in filter list : ' + ', [' + scope.filteredValues + '], ' + value + ', ' + (scope.filteredValues.indexOf(value) > -1));
                };
                
                
            },
            templateUrl : 'app/components/checkbox-filter/checkbox-filter.html'
        };
    }]);