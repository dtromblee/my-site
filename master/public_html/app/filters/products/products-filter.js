/*global angular*/
'use strict';

angular.module('mySite')
    .filter('productTagsFilter', function() {
        return function (products, tags) {
            tags = (tags != 'undefined' && Array.isArray(tags)) ? tags : [];
            
            if(tags.length == 0)
                return products;
            
            var filtered = [];
            angular.forEach(products, function(pkey, product) {
                angular.forEach(product.tags, function(tkey, value) {
                    if($.inArray(value, tags) && !$.inArray(product, filtered))
                        filtered.push(product);
                });
            });
            
            return filtered;
        };
    });