console.log("Hello world");

$(document).ready(function() {
    console.log("rejoice - jquery is enabled!");
    $.getJSON("https://raw.githubusercontent.com/jeremywrnr/jeremywrnr.github.io/master/weather.json", function(data) {
        conso
        var sum = 0;
        var count = 0;
        for(d in data) {
            $('#weather').append("<li>"+d.TimeEST+": "+d.TemperatureF+"</li>");
            sum += d.TemperatureF;
            count++;
        }
        $('#average').append(sum/count);
    });
});

