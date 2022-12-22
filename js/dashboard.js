var nfontanelle=1 ;
var npanchine=1 ;
var nbagni=1;
var nparchi=1 ;
var ncestini=   1;
var ndefribillatori=1 ;
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

    });

        var url=$.ajax({
            type: "GET",
            url: "https://hunt-in-bo.herokuapp.com/poi",
            dataType: 'json',
            headers: {"x-access-token": (JSON.parse(localStorage.getItem("jwt"))).token},
            success: function (npoi){
                console.log(npoi);
                document.getElementById("npoi").innerHTML = npoi.length;
                //count the number of each category
                for (var i = 0; i < npoi.length; i++) {
                    if (npoi[i].category == 1) {
                        nfontanelle++;
                    }
                    if (npoi[i].category == 2) {
                        npanchine++;
                    }
                    if (npoi[i].category == 3) {
                        nbagni++;
                    }
                    if (npoi[i].category == 4) {
                        nparchi++;
                    }
                    if (npoi[i].category == 5) {
                        ncestini++;
                    }
                    if (npoi[i].category == 6) {
                        ndefribillatori++;
                    }
                }
                myPieChart.config.data.datasets[0].data[0]=nfontanelle;
                myPieChart.config.data.datasets[0].data[1]=npanchine;
                myPieChart.config.data.datasets[0].data[2]=nbagni;
                myPieChart.config.data.datasets[0].data[3]=nparchi;
                myPieChart.config.data.datasets[0].data[4]=ncestini;
                myPieChart.config.data.datasets[0].data[5]=ndefribillatori;

                myPieChart.update();
             
            }
        
        })


    

console.log(nfontanelle);

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



function logout() {
    localStorage.removeItem("jwt");
    window.location.href = './login.html'
}

// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
console.log(nfontanelle);
console.log(npanchine);
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Fontanelle", "Panchine", "Bagni", "Parchi", "Cestini", "Defribillatori"],
    datasets: [{
      data: [nfontanelle, npanchine, nbagni, nparchi, ncestini, ndefribillatori],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#e74a3b', '#858796', '#f6c23e'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf', '#e74a3b', '#858796', '#f6c23e'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
console.log(myPieChart);
