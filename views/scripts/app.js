var app = angular.module('routerApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

        //HOME states and nested views
    $stateProvider

        .state('home', {
        url: '/home',
        templateUrl: 'partial-home.html'
    })

        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function($scope) {
                $scope.bands = ['Iron Maiden', 'Motorhead', 'Megadeth', 'Guns n Roses', 'Ac/DC'];
            }
        })

        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I am a man who walks alone. And when I\'m walking a dark road. At night or strolling through the park'
        })
    //About page and multiple named views

        .state('about', {
            url: '/about',
            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'partial-about.html' },

                // the child views will be defined here (absolutely named)
                'columnOne@about': { template: 'Look I am a column just chillin!' },

                // for column two, we'll define a separate controller
                'columnTwo@about': {
                    templateUrl: 'table-data.html',
                    controller: 'scotchController'
                }
            }

        });

}); // closes $app.config()


//Define the controller that we call up in the about state
app.controller('scotchController', function($scope) {

    $scope.message = 'test';

    $scope.heavy = [
        {
            name: 'KISS',
            awesomeness: 500000
        },
        {
            name: 'Motley Crue',
            awesomeness: 10000
        },
        {
            name: 'Nickelback',
            awesomeness: - 20000
        }
    ];

});

