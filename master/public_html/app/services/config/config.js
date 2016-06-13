/*global angular*/
angular.module('mySite')
    .service('config', function() {
        return {
            sitemap: [
                {
                    'title' : 'Home',
                    'route' : '/'
                },
                {
                    'title' : 'About',
                    'route' : '/about'
                },
                {
                    'title' : 'Products',
                    'route' : '/products'
                },
                {
                    'title' : 'Contact Us',
                    'route' : '/contact-us'
                },
                {
                    'title' : 'Projects',
                    'route' : '/projects'
                }
            ]
        };
    });
