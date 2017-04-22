/// <reference path="../typings/tsd.d.ts" />

class CountrySelect {

  initial_event(){
    $.ajax({
      url: "/country_select?type=countries",
      type: "GET",
      dataType: "json",
      success: function(data){
        $.each(data, function(val, country){
          $('#country-select').append($('<option>').text(country).attr('value', val));
        });
      }
     });
   }

   country_select_event(){
     $('#country-select').change(function(){
       $.ajax({
         url: "/country_select?type=states&country=" + $('#country-select').val(),
         type: "GET",
         dataType: "json",
         success: function(data){
           $.each(data, function(val, state){
             $('#state-select').append($('<option>').text(state).attr('value', val));
           });
         }
        });
      });

   }

   state_select_event(){
     $('#state-select').change(function(){
       $.ajax({
         url: "/country_select?type=cities&country=" + $('#country-select').val() + "&state=" + $('#state-select').val(),
         type: "GET",
         dataType: "json",
         success: function(data){
           $.each(data, function(val, city){
             $('#city-select').append($('<option>').text(city).attr('value', val));
           });
         }
        });
      });

   }

}
