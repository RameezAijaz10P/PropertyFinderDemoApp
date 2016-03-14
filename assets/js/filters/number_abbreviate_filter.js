/**
 * Created by Rameez Aijaz on 3/14/2016.
 */
(function(){
    'use strict';
    angular.module('sntDemoApp').filter('abbreviate', function() {
        return function(value) {
            var abbreviations=['K','M'];
            var devisors = [1000,1000000];
            var suffix='',new_value='',prefix='$';
            value=value.replace?value.replace(/[^\w\s]/gi, '').trim():value;
            value=parseInt(value);
            if(value >= 1000000)
            {
                suffix = abbreviations[1];
                new_value = value/devisors[1];


            }
            else{

                suffix = abbreviations[0];
                new_value = value/devisors[0];
            }
            new_value = prefix+parseFloat(new_value.toFixed(2))+suffix;
            return new_value;


        };
    });



})();
