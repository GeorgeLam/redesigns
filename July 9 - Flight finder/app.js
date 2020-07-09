//Navbar bg color switch on scroll
$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > ($('#main-bg').height() - $nav.height()));
        $('.navbar-light .navbar-nav').toggleClass('scrolled', $(this).scrollTop() > ($('#main-bg').height() - $nav.height()));
    });
});

//Typeahead for airports
$(document).ready(function(){
    var data = ["London Heathrow [LHR]", "Shanghai Pudong [PVG]", "Tokyo Narita [NRT]", "Hong Kong [HKG]", "Singapore [SIN]", "Paris [CDG]", "Amsterdam [AMS]", "New York JFK [JFK]"];
    $(".lookahead").typeahead({ source:data });
});
