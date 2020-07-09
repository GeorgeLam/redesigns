$(document).ready(function(){
    var data = ["London Heathrow [LHR]", "Shanghai Pudong [PVG]", "Tokyo Narita [NRT]", "Hong Kong [HKG]", "Singapore [SIN]", "Paris [CDG]", "Amsterdam [AMS]", "New York JFK [JFK]"];
    $(".lookahead").typeahead({ source:data });
});
