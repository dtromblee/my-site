/*global angular*/

angular.module('mySite')
    .factory('productsService', ['$resource', function($resource) {
        return {
            'products' : $resource(
                '/rest/products',
                {},
                {
                    'get': {method: 'GET'}
                }
            ),
            'product' : $resource(
                '/rest/product/:productId',
                {
                    productId: '@productId'
                },
                {
                    'get': {method: 'GET'}
                }
            ),
             'mockProducts' : $resource(
                'assets/js/mock-products.json',
                {},
                {
                    'get': {method: 'GET'}
                }
            ),
            'mockProduct' : $resource(
                'assets/js/mock-product.json',
                {
                    productId: '@productId'
                },
                {
                    'get': {method: 'GET'}
                }
            )
            
        };
    }]);
