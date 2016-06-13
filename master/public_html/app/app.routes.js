/*global angular*/
angular.module('mySite')
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        var compPath = 'app/views/';
        var titleBase = 'AmyLDesign | ';
        $routeProvider
            .when('/', {
                title: titleBase + 'Home',
                templateUrl: compPath + 'home/home.html',
                controller: 'HomeCtrl'
            })
            .when('/about', {
                title: titleBase + 'About',
                templateUrl: compPath + 'about/about.html',
                controller: 'AboutCtrl'
            })
            .when('/products', {
                title: titleBase + 'Products',
                templateUrl: compPath + 'products/products.html',
                controller: 'ProductsCtrl'
            })
            .when('/products/:productId', {
                title: titleBase + 'Product Details',
                templateUrl: compPath + 'product-details/product-details.html',
                controller: 'ProductDetailsCtrl',
                resolve: {
                    productDetails : function(productsService, $route) {
                        var prodId = $route.current.params.productId;
                        return productsService.product.get({productId : prodId}).$promise;
                    }
                }
            })
            .when('/contact-us', {
                title: titleBase + 'Contact Us',
                templateUrl: compPath + 'contact-us/contact-us.html',
                controller: 'ContactUsCtrl'
            })
            .when('/projects', {
                title: titleBase + 'Projects',
                templateUrl: compPath + 'projects/projects.html',
                controller: 'ProjectsCtrl'
            })
            .otherwise({
                title: titleBase + 'Home',
                templateUrl: compPath + 'home/home.html',
                controller: 'HomeCtrl'
            });
    //   $locationProvider.html5Mode(true);
    }]);
