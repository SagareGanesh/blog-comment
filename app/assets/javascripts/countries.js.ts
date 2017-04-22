/// <reference path="typings/tsd.d.ts" />
/// <reference path="countries/country_select.js.ts" />

$(() => {

    // For country select page
    var country_select = new CountrySelect();
    country_select.initial_event();
    country_select.country_select_event();
    country_select.state_select_event();

});
