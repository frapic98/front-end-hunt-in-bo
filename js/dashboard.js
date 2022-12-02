$(document).ready(function() {
    // UTENTI
   /* $.get( "https://hunt-in-bo.herokuapp.com/user")
    .done(function( data ) {
        // usa data
        console.log(data);
        document.getElementById("nutenti").innerHTML = data.length
    })
    .fail(function( data ){
        alert("Si è verificato un errore nell'ottenere i dati degli utenti")
    }); */

        $.ajax
        ({
            type: "GET",
            url: "https://hunt-in-bo.herokuapp.com/user",
            dataType: 'json',
            headers: {"x-access-token": localStorage.getItem("jwt")},
            success: function (nutenti){
                console.log(nutenti);
                document.getElementById("nutenti").innerHTML = nutenti.length;
            }
        });

    // CORSI
    /*$.get( "export.geojson")
    .done(function( data ) {
        // usa data
        console.log(data);
        Object.keys(data.features).length;
        document.getElementById("nfontanelle").innerHTML = data.length
        $.ajax
        ({
            type: "GET",
            url: "https://wobbly-earwig.glitch.me/api/frequentare/alepistola",
            dataType: 'json',
            headers: {
                "Authorization": "Basic " + btoa("alepistola" + ":" + "password")
            },
            success: function (freq){
                console.log(freq);
                document.getElementById("corsis").innerHTML = freq.length;
                document.getElementById("progress").style.display = "flex";
                let ratio = (freq.length / data.length) * 100;
                document.getElementById("progressbar").style.width = ratio + "%";
            }
        });
    })
    .fail(function( data ){
        alert("Si è verificato un errore nell'ottenere i dati dei corsi")
    });*/



    // FREQUENTARE
        /*$.get( "https://wobbly-earwig.glitch.me/api/frequentare/alepistola")
        .done(function( freq ) {
            // usa data
            console.log(freq);
            document.getElementById("corsis").innerHTML = freq.length;
            document.getElementById("progress").style.display = "block";
            let ratio = freq.length / data.length;
            document.getElementById("progressbar").style.width = ratio;
        })
        .fail(function( freq ){
            alert("Si è verificato un errore nell'ottenere i dati dell'associazione frequentare")
        });*/

});