$(document).ready(function() {
    // UTENTI
   /*$.get( "https://hunt-in-bo.herokuapp.com/user")
    .done(function( data ) {
        // usa data
        console.log(data);
        $.ajax({
        type: "GET",
            url: "https://hunt-in-bo.herokuapp.com/user",
            dataType: 'json',
            headers: {"x-access-token": localStorage.getItem("jwt")},
            success: function (nutenti){
                console.log(nutenti);
                document.getElementById("nutenti").innerHTML = nutenti.length;
            }
    })
    })
    .fail(function( data ){
        alert("Si è verificato un errore nell'ottenere i dati degli utenti")
    }); 
    */

        $.ajax
        ({
            type: "GET",
            url: "https://hunt-in-bo.herokuapp.com/user",
            dataType: 'json',
            headers: {"x-access-token": (JSON.parse(localStorage.getItem("jwt"))).token},
            success: function (nutenti){
                document.getElementById("nutenti").innerHTML = nutenti.length;

                //document.getElementById("spanne").innerHTML = "cavallo";
            }
        });



        $.ajax
        ({
            type: "GET",
            url: "https://hunt-in-bo.herokuapp.com/poi",
            dataType: 'json',
            headers: {"x-access-token": (JSON.parse(localStorage.getItem("jwt"))).token},
            success: function (npoi){
                console.log(npoi);
                document.getElementById("npoi").innerHTML = npoi.length;
                //count the number of each category
                var nfontanelle = 0;
                var npanchine = 0;
                var nbagni = 0;
                var nparchi = 0;
                var ncestini = 0;
                var ndefribillatori= 0;
                var naltro = 0;
                for (var i = 0; i < npoi.length; i++) {
                    var obj = npoi[i];
                    if (obj.category == 1) {
                        nfontanelle++;
                    }
                    else if (obj.category == 2) {
                        npanchine++;
                    }
                    else if (obj.category == 3) {
                        nbagni++;
                    }
                    else if (obj.category == 4) {
                        nparchi++;
                    }
                    else if (obj.category == 5) {
                        ncestini++;
                    }
                    else if (obj.category == 6) {
                        ndefribillatori++;
                    }
                }
                console.log(nfontanelle);
                
            }
        });
      

    // CORSI
   /* $.get( "export.geojson")
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


function logout() {
    localStorage.removeItem("jwt");
    window.location.href = './login.html'
}
