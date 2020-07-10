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


//Price slider
valueDetect = function () {
    if ($("#price-select").val() == 10) {
        $("#price-display").text(`£0 - £1000+`)
    } else if ($("#price-select").val() == 0) {
        $("#price-display").text(`<£100`)
    } else {
        console.log("L")
        $("#price-display").text(`£0 - £${$("#price-select").val() * 100}`)
    }
}

$("#price-select").on("mouseup", valueDetect)
$("#price-select").val(10);
valueDetect();




