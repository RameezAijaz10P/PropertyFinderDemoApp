/**
 * Created by Rameez Aijaz on 3/11/2016.
 */
(function(){
    'use strict';
    angular.module('sntDemoApp').controller('homeController',homeController);

    homeController.$inject= ['$filter','$state','current_location'];
    function homeController($filter,$state,current_location){
        var homeController =this;
        var city =current_location?current_location.data.results[0].address_components[3].long_name:'Wichita';//in case of error city = Wichita
        var state=current_location?current_location.data.results[0].address_components[5].short_name:'KS';//in case of error city = KS
        homeController.current_location = city+', '+state;


        homeController.sliderOptions = {
            min: 85000,
            max: 2500000,
            orientation: 'horizontal',  // vertical
            handle: 'round', //'square', 'triangle' or 'custom'
            tooltip: 'always', //'hide','always'
            tooltip_position:'bottom',
            range: true,
            tooltipFormatter : function (value) {
            var min_value =value[0],
                max_value=value[1],
                avg=(min_value+max_value)/2;
            return $filter('currency')(avg, '$', 0) +' Average';
        }
        };
        homeController.clearSelection = function(){
            $state.reload();
        };





    }



})();

