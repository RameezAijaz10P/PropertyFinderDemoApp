/**
 * Created by Rameez Aijaz on 3/11/2016.
 */
(function () {
    'use strict';

    angular.module('sntDemoApp').config(routesConfig);
    routesConfig.$inject = [
        "$stateProvider",
        "$urlRouterProvider"
    ];
    function routesConfig($stateProvider, $urlRouterProvider) {


        $stateProvider
            .state('base_template', {
                abstract: true,
                templateUrl: "base_template/base_template.html",
                controller: "baseTemplateController",
                controllerAs: "baseTemplateController"
            }).state('base_template.partials', {
                abstract: true,
                views:{
                    header:{
                        templateUrl: "base_template/partials/_header.html"
                    },
                    content_wrapper:{
                        templateUrl: "base_template/partials/_content_wrapper.html"
                    }


                }
            }).state('base_template.partials.home', {
            url: "/home",
            templateUrl: "home/home.html",
            resolve:{
                current_location:function(homeService){
                    return homeService.getCurrentLocation().then(function(position){
                        console.log('________________Coordinates________________________');
                        console.log(position);
                        var lng = position.coords.longitude;
                        var lat = position.coords.latitude;
                        return homeService.getAddressFromCoordinates(lng,lat).then(function(data){
                            return data;
                        },function(){
                            alert('Error occurred in fetching your location!');
                        });

                    },function(){
                        alert('Error occurred in fetching your location!');
                    })
                }

            },
            controller: "homeController",
            controllerAs: "homeController"

        });

        /* Add New Routes Above */
        $urlRouterProvider.otherwise('/home');


    }


})();
