/**
 * Created by Rameez Aijaz on 3/11/2016.
 */
(function () {
    'use strict';
    angular.module('sntDemoApp').service('homeService', homeService);

    homeService.$inject = ['$q','$http'];
    function homeService($q,$http) {

        this.getCurrentLocation = getCurrentLocation;
        this.getAddressFromCoordinates = getAddressFromCoordinates;

        function getAddressFromCoordinates(lng,lat){

            return $http({
                method: 'GET',
                url: ' https://maps.google.com/maps/api/geocode/json',
                params:{
                    latlng:lat+','+lng
                }
            })

        }
        function getCurrentLocation() {

            var deferred = $q.defer();
            if (navigator.geolocation) {


                navigator.geolocation.getCurrentPosition(function(position){
                    deferred.resolve(position);
                },function(){

                    deferred.reject();

                });



            }
            else{
                deferred.reject();
            }
            return deferred.promise;


        }


    }


})();

