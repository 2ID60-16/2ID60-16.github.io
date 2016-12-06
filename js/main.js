/* Does your browser support geolocation? */
if ("geolocation" in navigator) {
    $('.js-geolocation').show();
} else {
    $('.js-geolocation').hide();
}

/* Where in the world are you? */
$('.js-geolocation').on('click', function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        loadWeather(position.coords.latitude + ',' + position.coords.longitude); //load weather using your lat/lng coordinates
    });
});


$(document).ready(function () {

    var searchedcity = getCookie("search_city");
    if (searchedcity !== "") {
        loadWeather(searchedcity, '');
        return;
    }
    else if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            loadWeather(position.coords.latitude + ',' + position.coords.longitude); //load weather using your lat/lng coordinates
        });
        //$('.js-geolocation').show();
    }
    else {
        loadWeather('Eindhoven', '729028');
        $('.js-geolocation').hide();
    }
});

function loadWeather(location, woeid) {
    $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'c',
        success: function (weather) {

            html = '<li>' + weather.city + ':</li> <li><i class="icon-' + weather.code + '"></i> ' + weather.temp + '&deg;' + weather.units.temp + '</li> <li>' + weather.currently + '</li>';


            $("#weather").html(html);
            setCookie("search_city", location, 1);
            if (document.title == "Beer") {

                if (weather.temp <= 5) {
                    $("#cold-button").addClass('active');
                    var drink = document.getElementById("drink");
                    drink.innerHTML = "<h1 class='name'>Westmalle Dubbel</h1><div class='col-md-12'><div class='col-md-4'><img class='img-responsive img-rounded' src='images/westmalle-beer.jpg' alt='Beer'></div><div class='cold-md-8'><p class='lead'>Westmalle dubbel is often called the king of dubbels, and for good reason. This bear, brewed by monks, is the perfect companion for those cold nights. With its smokey and bittersweet taste is will surely make all those great cold evenings with your friends even more enjoyable.</p></div></div>"
                }
                if (weather.temp >= 15) {
                    $("#mild-button").addClass('active');
                    var drink = document.getElementById("drink");
                    drink.innerHTML = "<h1 class='name'>FF Lekker met je Bek in het Zonnetje</h1><div class='col-md-12'><div class='col-md-4'><img class='img-responsive img-rounded' src='images/zonbier.jpg' alt='Beer'></div><div class='cold-md-8'><p class='lead'>This beer really does do justice to its name. Made by the local dutch brewer het uiltje this summer session ipa is charactarized by a combination of non dominant hops and a fruity aftertaste. After one sip you will find yourself unable to stop drinking this light session beer. </p></div></div>"

                }
                if (weather.temp < 15 && weather.temp > 5) {
                    $("#hot-button").addClass('active');
                    var drink = document.getElementById("drink");
                    drink.innerHTML = "<h1 class='name'>Tripel Karmeliet</h1><div class='col-md-12'><div class='col-md-4'><img class='img-responsive img-rounded' src='images/karmeliet.jpg' alt='Beer'></div><div class='cold-md-8'><p class='lead'>A beer that does not appear to upset anyone, tripel karmeliet is alot like steak, no matter the weather you can always enjoy it. Supporting enough hops to give the entire beer a fruity but still somewhat bitter flavor, this beer shines when temperatures are in the background. </p></div></div>"
                }
            }
            if (document.title == "Wine") {

                if (weather.temp <= 5) {
                    $("#cold-button").addClass('active');
                    var drink = document.getElementById("drink");
                    drink.innerHTML = "<h1 class='name'>Grecula Greco</h1><div class='col-md-12'><div class='col-md-4'><img class='img-responsive img-rounded' src='images/winterwine.jpg' alt='Beer'></div><div class='cold-md-8'><p class='lead'>You might be tempted to buy this just for the excellent comic-like label, but inside the bottle is great wine. Grecula, and the equally ghoulish Morbidella, are synonyms for the Greco variety in Campania, and Benevento, where this wine is made, is known as the ‘City of Witches’. From volcanic soils, the wine is herbal and savoury with green apple and citrus freshness and a hint of hay. Deadly delicious!</p></div></div>"
                }
                if (weather.temp >= 15) {
                    $("#mild-button").addClass('active');
                    var drink = document.getElementById("drink");
                    drink.innerHTML = "<h1 class='name'>Tanners Prosecco Brut</h1><div class='col-md-12'><div class='col-md-4'><img class='img-responsive img-rounded' src='images/summerwine.jpg' alt='Beer'></div><div class='cold-md-8'><p class='lead'>With demand pushing supply, there has never been a better time to choose your Prosecco wisely, and this appealing house fizz is a safe buy. It has lively, ripe white summer fruits and a lemon intensity. It’s a drier style than your average Prosecco and has a dazzling, tangy finish.</p></div></div>"

                }
                if (weather.temp < 15 && weather.temp > 5) {
                    $("#hot-button").addClass('active');
                    var drink = document.getElementById("drink");
                    drink.innerHTML = "<h1 class='name'>Vietti Nebbiolo Perbacco</h1><div class='col-md-12'><div class='col-md-4'><img class='img-responsive img-rounded' src='images/mid_wine.jpg' alt='Beer'></div><div class='cold-md-8'><p class='lead'>It's a light-colored but medium-bodied, complex red for dishes like roasted pork shoulder, spiced duck breast, or porcini mushroom pasta. Perbacco, even in its youth, behaves like a smooth, mature Barolo: you get the snappy fruit, spice, and menthol with the grippy tannins you want and need from a nebbiolo—but all polished and drinkable and (oh, yeah) also affordable. </p></div></div>"
                }
            }
            if (document.title == "Spirit") {

                if (weather.temp <= 5) {
                    $("#cold-button").addClass('active');
                    var drink = document.getElementById("drink");
                    drink.innerHTML = "<h1 class='name'>Old Fashioned</h1><div class='col-md-12'><div class='col-md-4'><img class='img-responsive img-rounded' src='images/winter_spirit.jpg' alt='Beer'></div><div class='cold-md-8'><p class='lead'>The oldest and best cocktail for the winter, this ancient combination of sugar, bitters and whiksey manages to make alls those days inside just a bit more bearable. finishing it of with a lemon or orange zest gives it the fruit note it needs balance the bitters and provide the perfect experience in your lazy winter chair.</p></div></div>"
                }
                if (weather.temp >= 15) {
                    $("#mild-button").addClass('active');
                    var drink = document.getElementById("drink");
                    drink.innerHTML = "<h1 class='name'>Gin and tonic</h1><div class='col-md-12'><div class='col-md-4'><img class='img-responsive img-rounded' src='images/summer_spirit.jpg' alt='Beer'></div><div class='cold-md-8'><p class='lead'>A classic cocktail, a gin and tonic is everything you need during those hot summer days. Called the drink of 2013 by the new york times and equally adored by everyone here in einhodven, this cocktail is something that simply always works. Combining the herby nodes of the gin with the bitter tonic and finishing it all of with some lemon delivers the best summer sipping experience one can have.</p></div></div>"

                }
                if (weather.temp < 15 && weather.temp > 5) {
                    $("#hot-button").addClass('active');
                    var drink = document.getElementById("drink");
                    drink.innerHTML = "<h1 class='name'>Moscow mule</h1><div class='col-md-12'><div class='col-md-4'><img class='img-responsive img-rounded' src='images/mid-spirit.jpg' alt='Beer'></div><div class='cold-md-8'><p class='lead'>A vodka cocktail that is a verstaille as it looks, originally it is made with vodka, ginger ale, suger and lemon. However cherry, cucumber and orange can also be used in this cocktail. This makes it Ideal for a lot of situations and an all round great, exotic and interesting pick. If you ever present these for your friends you are bound to rock their world. </p></div></div>"
                }
            }


        },
        error: function (error) {
            $("#weather").html("<p>Location failed, please make sure cookies are enabled and geolocation (if desired) is enabled, wait a second and reload the page, if that does not work try another city in the input field.</p>");
        }
    });
}

$('#cold-button').on('click', function (event) {
    $("#automated_suggestion").replaceWith("<h1 id='manual'>My cold recommendation:</h1>");
    $("#manual").replaceWith("<h1 id='manual'>My cold recommendation:</h1>");
    $("#cold-button").addClass('active');
    $("#mild-button").removeClass('active');
    $("#hot-button").removeClass('active');
    if (document.title == "Beer") {


        var drink = document.getElementById("drink");
        drink.innerHTML = "<h1 class='name'>Westmalle Dubbel</h1><div class='col-md-12'><div class='col-md-4'><img class='img-responsive img-rounded' src='images/westmalle-beer.jpg' alt='Beer'></div><div class='cold-md-8'><p class='lead'>Westmalle dubbel is often called the king of dubbles, and for good reason. This bear, brewed by monks, is the perfect companion for those cold nights. With its smokey and bittersweet taste is will surely make all those great cold evenings with your friends even more enjoyable.</p></div></div>"

    }
    if (document.title == "Wine") {


        var drink = document.getElementById("drink");
        drink.innerHTML = "<h1 class='name'>Grecula Greco</h1><div class='col-md-12'><div class='col-md-4'><img class='img-responsive img-rounded' src='images/winterwine.jpg' alt='Beer'></div><div class='cold-md-8'><p class='lead'>You might be tempted to buy this just for the excellent comic-like label, but inside the bottle is great wine. Grecula, and the equally ghoulish Morbidella, are synonyms for the Greco variety in Campania, and Benevento, where this wine is made, is known as the ‘City of Witches’. From volcanic soils, the wine is herbal and savoury with green apple and citrus freshness and a hint of hay. Deadly delicious!</p></div></div>"


    }
    if (document.title == "Spirit") {


        var drink = document.getElementById("drink");
        drink.innerHTML = "<h1 class='name'>Old Fashioned</h1><div class='col-md-12'><div class='col-md-4'><img class='img-responsive img-rounded' src='images/winter_spirit.jpg' alt='Beer'></div><div class='cold-md-8'><p class='lead'>The oldest and best cocktail for the winter, this ancient combination of sugar, bitters and whiksey manages to make alls those days inside just a bit more bearable. finishing it of with a lemon or orange zest gives it the fruit note it needs balance the bitters and provide the perfect experience in your lazy winter chair.</p></div></div>"


    }


});

$('#mild-button').on('click', function (event) {
    $("#automated_suggestion").replaceWith("<h1 id='manual'>My mild recommendation:</h1>");
    $("#manual").replaceWith("<h1 id='manual'>My mild recommendation:</h1>");
    $("#cold-button").removeClass('active');
    $("#mild-button").addClass('active');
    $("#hot-button").removeClass('active');
    if (document.title == "Beer") {


        var drink = document.getElementById("drink");
        drink.innerHTML = "<h1 class='name'>Tripel Karmeliet</h1><div class='col-md-12'><div class='col-md-4'><img class='img-responsive img-rounded' src='images/karmeliet.jpg' alt='Beer'></div><div class='cold-md-8'><p class='lead'>A beer that does not appear to upset anyone, tripel karmeliet is alot like steak, no matter the weather you can always enjoy it. Supporting enough hops to give the entire beer a fruity but still somewhat bitter flavor, this beer shines when temperatures are in the background. </p></div></div>"

    }
    if (document.title == "Wine") {


        var drink = document.getElementById("drink");
        drink.innerHTML = "<h1 class='name'>Vietti Nebbiolo Perbacco</h1><div class='col-md-12'><div class='col-md-4'><img class='img-responsive img-rounded' src='images/mid_wine.jpg' alt='Beer'></div><div class='cold-md-8'><p class='lead'>It's a light-colored but medium-bodied, complex red for dishes like roasted pork shoulder, spiced duck breast, or porcini mushroom pasta. Perbacco, even in its youth, behaves like a smooth, mature Barolo: you get the snappy fruit, spice, and menthol with the grippy tannins you want and need from a nebbiolo—but all polished and drinkable and (oh, yeah) also affordable. </p></div></div>"


    }
    if (document.title == "Spirit") {


        var drink = document.getElementById("drink");
        drink.innerHTML = "<h1 class='name'>Moscow mule</h1><div class='col-md-12'><div class='col-md-4'><img class='img-responsive img-rounded' src='images/mid-spirit.jpg' alt='Beer'></div><div class='cold-md-8'><p class='lead'>A vodka cocktail that is a verstaille as it looks, originally it is made with vodka, ginger ale, suger and lemon. However cherry, cucumber and orange can also be used in this cocktail. This makes it Ideal for a lot of situations and an all round great, exotic and interesting pick. If you ever present these for your friends you are bound to rock their world. </p></div></div>"


    }

});
$('#hot-button').on('click', function (event) {
    $("#automated_suggestion").replaceWith("<h1 id='manual'>My hot recommendation:</h1>");
    $("#manual").replaceWith("<h1 id='manual'>My hot recommendation:</h1>");
    $("#cold-button").removeClass('active');
    $("#mild-button").removeClass('active');
    $("#hot-button").addClass('active');
    if (document.title == "Beer") {


        var drink = document.getElementById("drink");
        drink.innerHTML = "<h1 class='name'>FF Lekker met je Bek in het Zonnetje</h1><div class='col-md-12'><div class='col-md-4'><img class='img-responsive img-rounded' src='images/zonbier.jpg' alt='Beer'></div><div class='cold-md-8'><p class='lead'>This beer really does do justice to its name. Made by the local dutch brewer het uiltje this summer session ipa is charactarized by a combination of non dominant hops and a fruity aftertaste. After one sip you will find yourself unable to stop drinking this light session beer. </p></div></div>"

    }
    if (document.title == "Wine") {


        var drink = document.getElementById("drink");
        drink.innerHTML = "<h1 class='name'>Tanners Prosecco Brut</h1><div class='col-md-12'><div class='col-md-4'><img class='img-responsive img-rounded' src='images/summerwine.jpg' alt='Beer'></div><div class='cold-md-8'><p class='lead'>With demand pushing supply, there has never been a better time to choose your Prosecco wisely, and this appealing house fizz is a safe buy. It has lively, ripe white summer fruits and a lemon intensity. It’s a drier style than your average Prosecco and has a dazzling, tangy finish.</p></div></div>"


    }
    if (document.title == "Spirit") {


        var drink = document.getElementById("drink");
        drink.innerHTML = "<h1 class='name'>Gin and tonic</h1><div class='col-md-12'><div class='col-md-4'><img class='img-responsive img-rounded' src='images/summer_spirit.jpg' alt='Beer'></div><div class='cold-md-8'><p class='lead'>A classic cocktail, a gin and tonic is everything you need during those hot summer days. Called the drink of 2013 by the new york times and equally adored by everyone here in Einhodven, this cocktail is something that simply always works. Combining the herby nodes of the gin with the bitter tonic and finishing it all of with some lemon delivers the best summer sipping experience one can have.</p></div></div>"


    }

});

$('#citysearch').on('click', function () {
    var city = document.getElementById('search_textbox').value;
    setCookie("search_city", city, 1);

});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}





