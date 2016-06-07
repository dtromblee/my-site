/*global angular*/
angular.module('mySite')
    .controller('ProductsCtrl', ['$scope', '$http', '$rootScope', 'productsService', function($scope, $http, $rootScope, productsService) {
        $scope.loading = true;
        $scope.tagFilters = [];
        $scope.categoryFilters = [];
        
        // TODO : replace mockProducts with products
        $scope.productData = productsService.mockProducts.get(function(response) {
            $scope.categoryCounts = response.categories;
            $scope.tagCounts = response.tags;
            $scope.galleryItems = response.products;
            $scope.loading = false;
        });

        
        $scope.filterTags = function(product) {
            if($scope.tagFilters.length == 0)
                return product;
            
            var hasTag = false;
            angular.forEach($scope.tagFilters, function(key, value) {
                hasTag = $.inArray(key, product.tags) > -1 || hasTag ? product : false; 
            });
            
            return hasTag;
        };
        
        $scope.filterCategories = function(product) {
            if($scope.categoryFilters.length == 0)
                return product;
            
            var hasCategory = false;
            angular.forEach($scope.categoryFilters, function(key, value) {
                // console.log(product.name + ' , ' + key + ' , [' + product.category + '] , ' + ($.inArray(key, product.category) > -1))
                hasCategory = key === product.category || hasCategory ? product : false; 
            });
            
            return hasCategory;
        };
        
       
        // $scope.$watch('tagFilters', function() {
        //     console.log('tags')
        //     console.log($scope.tagFilters)
        // })
        // $scope.$watch('categoryFilters', function() {
        //     console.log('cats')
        //     console.log($scope.categoryFilters)
        // })
        
    }]);