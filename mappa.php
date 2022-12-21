

<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>BoloPoi</title>

  <!-- Custom fonts for this template-->
  <link href="lib/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

  <!-- Custom styles for this template-->
  <link href="css/sb-admin-2.css" rel="stylesheet">

  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css">
  <style>
    .legend {
    line-height: 30px;
    color: #555;
    background: white;
    padding: 6px 8px;
  }
  .legend i {
    width: 30px;
    height: 30px;
    float: left;
    margin-right: 8px;
    opacity: 0.7;
}

#btn_grou {
  position: absolute;
  top: 616px;
  left: 248px;
  padding: 10px;
  z-index: 400;
}
    </style>
</head>

<body id="page-top">

  <!-- Page Wrapper -->
  <div id="wrapper">

    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      <!-- Sidebar - Brand -->
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.php">
        <div class="sidebar-brand-icon">
          <i class="fas fa-map-marker-alt"></i>
        </div>
        <div class="sidebar-brand-text mx-3">BoloPoi</div>
      </a>

      <!-- Divider -->
      <hr class="sidebar-divider my-0">

      <!-- Nav Item - Dashboard -->
      <li class="nav-item">
        <a class="nav-link" href="index.php">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span></a>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider">

      <!-- Heading -->
      <div class="sidebar-heading">
        Utenti
      </div>

      <!-- Nav Item - Charts -->
      <li class="nav-item ">
        <a class="nav-link" href="utenti.php">
          <i class="fas fa-users"></i>
          <span> Lista utenti</span></a>
      </li>


      <!-- Divider -->
      <hr class="sidebar-divider">

      <!-- Heading -->
      <div class="sidebar-heading">
          Navigazione mappa
        </div>
      <!-- Nav Item - associazioni -->
      <li class="nav-item active">
        <a class="nav-link" href="mappa.php">
        <i class="fas fa-map"></i>
          <span>Mappa</span></a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="aggiungi_poi.php">
          <i class="fas fa-map-pin"></i>
          <span>Aggiungi Poi</span></a>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block">


      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

    </ul>
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">

        <!-- Topbar -->
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

          <!-- Sidebar Toggle (Topbar) -->
          <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>
        
          <!-- Topbar Navbar -->
          <ul class="navbar-nav ml-auto">

            <!-- Nav Item - Search Dropdown (Visible Only XS) -->
            <li class="nav-item dropdown no-arrow d-sm-none">
              <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-search fa-fw"></i>
              </a>
              <!-- Dropdown - Messages -->
              <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                <form class="form-inline mr-auto w-100 navbar-search">
                  <div class="input-group">
                    <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button">
                        <i class="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>


            <!-- Nav Item - User Information -->
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small" id="spanne"></span>
                <img class="img-profile rounded-circle" src="https://source.unsplash.com/random/60x60">
              </a>
              <!-- Dropdown - User Information -->
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <a class="dropdown-item" href="#">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
              </div>
            </li>

          </ul>

        </nav>
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <div class="container-fluid">

                <!-- Page Heading -->
                <h1 class="h3 mb-2 text-gray-800"></h1>
                <div id="map" style="height: 570px;"></div>
              <!-- /.container-fluid -->
              <div id="btn_grou">
                <button id="refreshButton" onclick="addQuart()">Densità POI</button>
                <button id="userCheckIn" onclick="addCheckIn()">CheckIn Utenti</button>
                <button id="delaultView" onclick="setDefaultView()">Default</button>
              </div>
            </div>
            <!-- End of Main Content -->

<?php
  require_once 'footer.php';
?>


  
  <!-- Bootstrap core JavaScript-->
  <script src="lib/jquery/jquery.min.js"></script>
  <script src="lib/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Core plugin JavaScript-->
  <script src="lib/jquery-easing/jquery.easing.min.js"></script>

  <!-- Custom scripts for all pages-->
  <script src="js/sb-admin-2.min.js"></script>

  <!-- Page level plugins -->
  <script src="lib/datatables/jquery.dataTables.min.js"></script>
  <script src="lib/datatables/dataTables.bootstrap4.min.js"></script>
  <script src="https://cdn.datatables.net/select/1.3.0/js/dataTables.select.min.js"></script>
  <script src="https://cdn.datatables.net/buttons/1.5.6/js/dataTables.buttons.min.js"></script>
  <script src="js/jquery.redirect.js"></script>

  <!-- Page level custom scripts -->
  <!--<script src="js/datatables-utenti.js"></script>-->

  <!-- Make sure you put this AFTER Leaflet's CSS -->
 <script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"></script>
 <script src="leaflet-heat.js"></script>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

  <!--<script> 
    var fontan;
    var map = L.map('map').setView([44.494887, 11.3426163], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
    

  // load GeoJSON from an external file
    $.getJSON("export.geojson",function(fontane){
    // add GeoJSON layer to the map once the file is loaded
    fontan= L.geoJson(fontane,{
      pointToLayer: function(feature,latlng){
        marker = L.marker(latlng);
        marker.bindPopup(feature.properties.amenity + '<br/>' + 'wheelchair: '+ feature.properties.wheelchair);
        return marker;
      }
    })
    fontan.addTo(map);
  });
  
  </script>-->

  <script>
    document.getElementById("spanne").innerHTML = (JSON.parse(localStorage.getItem("jwt"))).username;
    // get the data.json for the fontanelle from the server with ajax


    /*var url1;
    // get the data.json for the fontanelle from the server with xmlhttprequest
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        url1=this.response;
        console.log(url1);
        var myArr = JSON.parse(this.response);
        var obj=JSON.stringify(myArr);
        
        
      }
    };
    xhttp.open("GET", "https://hunt-in-bo.herokuapp.com/poi/2");
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("accept", "application/json");
    xhttp.setRequestHeader("x-access-token", localStorage.getItem("jwt"));
    xhttp.send();
    console.log(url1);*/
    
    
   
    //get the data.json for the fontanelle from the server with ajax and put it on the map
//get the data.json for the fontanelle from the server with ajax request and put the result on the map
 
//create a json object with the data for the request
    var mergedObject = {
      "k": 1,
      "start_date": "2022-11-10",
      "end_date": "2022-12-20"
    };
    
 
    function get_cluster(){
      var url=$.ajax({
        url: "https://hunt-in-bo.herokuapp.com/statistics/userClustering",
        type: "POST",
        dataType: "text",
        data: JSON.stringify(mergedObject),
        global: false,
        async:false,
        headers: {
          "Content-type": "application/json",
          "accept": "application/json",
          "x-access-token": (JSON.parse(localStorage.getItem("jwt"))).token
        },
        success: function(data) {
          console.log(data);
          //convert the points on the jsnon file in number


          return data;
        }
      }).responseText;
      console.log(url);
      return JSON.parse(url);
    }


//convert the points on number and put them on the map
    function convert_points(risposta){
      var points=[];
      for(var i=0; i<risposta.length; i++){
        for(var j=0; j<risposta[i].points.length; j++){
          points.push([parseFloat(risposta[i].points[j][0]), parseFloat(risposta[i].points[j][1])]);
        }
      }
      
      
      return points;
    }

  
  var conver=convert_points(get_cluster());

  
    
  //convert lat and long to float
function cluster(){

    //convert url1 to geojson
    var geojson = {
      "type": "FeatureCollection",
      "features": []
    };
    for (var i = 0; i<conver.length; i++) {
      var feature = {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [conver[i][1],conver[i][0]]          
        }
      };
      geojson.features.push(feature);

    }
    console.log(geojson);
    return geojson;
    }

  var clust_user=cluster();
  

    //function to get the number of poi for the neighborhood
    

    //get_cluster();

    function get_poi_number(){
      var url=$.ajax({
        url: "https://hunt-in-bo.herokuapp.com/statistics/poiDensity",
        type: "GET",
        dataType: "json",
        global: false,
        async:false,
        headers: {
          "Content-type": "application/json",
          "accept": "application/json",
          "x-access-token": (JSON.parse(localStorage.getItem("jwt"))).token
        },
        success: function(data) {
         // console.log(data);
          return data;
        }
      }).responseText;
    
      return url;
    }
    
    function get_user_number(){
      var url=$.ajax({
        url: "https://hunt-in-bo.herokuapp.com/statistics/poiCheckIn",
        type: "GET",
        dataType: "json",
        global: false,
        async:false,
        headers: {
          "Content-type": "application/json",
          "accept": "application/json",
          "x-access-token": (JSON.parse(localStorage.getItem("jwt"))).token
        },
        success: function(data) {
         // console.log(data);
          return data;
        }
      }).responseText;
    
      return url;
    }


    function get_poi(j){
      if(j==0){
       var urll= "https://hunt-in-bo.herokuapp.com/poi"}
      else{
        var urll= "https://hunt-in-bo.herokuapp.com/poi/"+j}
    var url=$.ajax({
      url:urll,
      type: "GET",
      dataType: "json",
      global: false,
      async:false,
      headers: {
        "Content-type": "application/json",
        "accept": "application/json",
        "x-access-token": (JSON.parse(localStorage.getItem("jwt"))).token
      },
      success: function(data) {
        //console.log(JSON.stringify(data));

        return data;

      }
    }).responseText;

    //console.log(url1);    
    url=JSON.parse(url);
    
  //convert lat and long to float


    //convert url1 to geojson
    var geojson = {
      "type": "FeatureCollection",
      "features": []
    };
    for (var i = 0; i < url.length; i++) {
      var obj = url[i];
      var feature = {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [parseFloat(obj.long), parseFloat(obj.lat)]          
        },
        "id": obj.id,
        "properties": {
          "id": obj.id,
          "rank": obj.rank   
        }
      };
      geojson.features.push(feature);

    }
    console.log(geojson);
    return geojson;
    }



    

  

   /* j=1;
    var url1=$.ajax({
      url: "https://hunt-in-bo.herokuapp.com/poi/"+j,
      type: "GET",
      dataType: "json",
      global: false,
      async:false,
      headers: {
        "Content-type": "application/json",
        "accept": "application/json",
        "x-access-token": localStorage.getItem("jwt")
      },
      success: function(data) {
        console.log(JSON.stringify(data));

        return data;

      }
    }).responseText;

    //console.log(url1);    
    url1=JSON.parse(url1);
    
  //convert lat and long to float


    //convert url1 to geojson
    var geojson = {
      "type": "FeatureCollection",
      "features": []
    };
    for (var i = 0; i < url1.length; i++) {
      var obj = url1[i];
      var feature = {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [parseFloat(obj.long), parseFloat(obj.lat)]          
        },
        "id": obj.id,
        "properties": {
          "id": obj.id,
          "rank": obj.rank   
        }
      };
      geojson.features.push(feature);

    }
    console.log(geojson);*/
    //var url1 = 'export.geojson';  
    var url2 = 'AED.geojson';  

    var quart='quartieri.geojson';

	var map = L.map('map').setView([44.494887, 11.3426163], 14); 

	var osm = new L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',{ 
				attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

  var mapTilerStreet = new L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=17R9tobWUuZJ8LQwYlkd', {
    maxZoom: 20,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  });
  var mapTilerSatellite = new L.tileLayer('https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}@2x.jpg?key=17R9tobWUuZJ8LQwYlkd', {
    maxZoom: 20,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  });


	
  function create_marker(Icon){
  valo = L.geoJson(null, {	
            pointToLayer: function(feature, latlng) {
				      return L.marker(latlng, {icon: Icon}); 
            }/*,  
			      onEachFeature: function (feature, layer) {
				      layer._leaflet_id = feature.id;
			
              var popupContent = "<p>The <b>" +
              feature.properties.emergency + "</b> is here,</br> Street: "+ 
              feature.properties["addr:street"] +" n° " + feature.properties["addr:housenumber"] + "</p>";
                  
              if (feature.properties && feature.properties.popupContent) {
                popupContent += feature.properties.popupContent;
              }
                layer.bindPopup(popupContent);			
			}*/
		});
    return valo;
  
}
//commentato
valore=get_poi_number();

valore=JSON.parse(valore);

user_check=get_user_number();
user_check=JSON.parse(user_check);
/*user_check['Navile']=6;
user_check['Porto - Saragozza']=11;
user_check['San Donato - San Vitale']=16;
user_check['Santo Stefano']=21;
user_check['Savena']=26;*/

console.log(user_check);


	// Set style function that sets fill color property
  var fontaIcon = L.icon({
    iconUrl: 'water.png',
    iconSize: [25,20]});
		
  var fontanelle = create_marker(fontaIcon);	
  fontanelle.addData(get_poi(1));

//END Layer1
	
var benchIcon = L.icon({
    iconUrl: 'bench.png',
    iconSize: [25,20]
}); 

var panchina = create_marker(benchIcon);
  panchina.addData(get_poi(2));


var wcIcon = L.icon({
    iconUrl: 'wc.png',
    iconSize: [25,20]
}); 
var wc = create_marker(wcIcon);
wc.addData(get_poi(3));

var parkIcon = L.icon({
    iconUrl: 'trees.png',
    iconSize: [25,20]
});
var park = create_marker(parkIcon);
park.addData(get_poi(4));

var binIcon = L.icon({
    iconUrl: 'bin.png',
    iconSize: [25,20]
});
var bin = create_marker(binIcon);
bin.addData(get_poi(5));

  var defiIcon = L.icon({
    iconUrl: 'defi.png',
    iconSize: [25,20]
}); 
var defibrillatori = create_marker(defiIcon);
defibrillatori.addData(get_poi(6));
	
var valol= L.geoJson(get_poi(0),{
              pointToLayer: function(feature,latlng){
                var marker = L.marker(latlng);
                return marker;
              }
    });

var valol2= L.geoJson(cluster(),{
              pointToLayer: function(feature,latlng){
                var marker = L.marker(latlng);
                return marker;
              }
    });
//print on map the  quartieri.gejson file

function getColor(d) {
        return  d > 250  ? '#800026' :
                d > 200  ? '#BD0026' :
                d > 150  ? '#E31A1C' :
                d > 100  ? '#FC4E2A' :
                d > 50   ? '#FD8D3C' :
                            '#FED976';
                          
}

function getColorUser(d) {
        return  d > 25  ? '#442e19' :
                d > 20  ? '#475928' :  
                d > 15  ? '#2d6135' :
                d > 10  ? '#008000' :
                d > 5   ? '#4cbb17' :
                            '#b7d5ac';
}
    // add GeoJSON layer to the map once the file is loaded
    var quartieri= L.geoJson(null,{
      style: function(feature){
        return {color: feature.properties.color};
      },
      onEachFeature: function(feature,layer){
        layer.bindPopup("<b>"+feature.properties.nomequart+"</b>"+ " ha " +valore[feature.properties.nomequart] +" POI");
        layer.setStyle({color: 'white', fillColor: getColor(valore[feature.properties.nomequart]),opacity: 1,fillOpacity: 0.7});  
      }
    });



    var user_checkin= L.geoJson(null,{
      style: function(feature){
        return {color: feature.properties.color};
      },
      onEachFeature: function(feature,layer){
        layer.bindPopup("<b>"+feature.properties.nomequart+"</b>"+ " ha " +user_check[feature.properties.nomequart] +" utenti che hanno richiesto un POI");
       
          layer.setStyle({color: 'white', fillColor: getColorUser(user_check[feature.properties.nomequart]),opacity: 1,fillOpacity: 0.7});
        
      }
    });


  $.getJSON(quart,function(data3){
  user_checkin.addData(data3);
  });	
  
    //commentato
  $.getJSON(quart,function(data3){
  quartieri.addData(data3);
  });	

 /*var heat = L.heatLayer([
	[50.5, 30.5, 0.2], // lat, lng, intensity
	[50.6, 30.4, 0.5],
  [50.7, 30.3, 0.2],
], {radius: 25}).addTo(map);*/

//commentato




var pois=get_poi(0);


//var marker=create_marker(L.icon({iconUrl: 'pin.png',iconSize: [20,20]}));
//marker.addData(get_poi(0));

var heat;

   var locations = pois.features.map(function(rat) {
    var location = rat.geometry.coordinates.reverse();
    location.push(0.5);
    //console.log(location);
    return location;
  });
  
  heat = L.heatLayer(locations, { radius: 35 });

function addQuart(){
  map.removeLayer(user_checkin);
  map.removeControl(legenduser);
  quartieri.addTo(map);
  
    legend.addTo(map);
}

function addCheckIn(){
  map.removeLayer(quartieri);
  map.removeControl(legend);
  user_checkin.addTo(map);
  
    legenduser.addTo(map);
}

function setDefaultView(){
  console.log("default");
  map.removeLayer(quartieri);
  map.removeControl(legend);
  map.removeLayer(user_checkin);
  map.removeControl(legenduser);
}
  
  //
/////////////////////Layer Control  /////////////////////////////////////////////////
	
            var baseMaps = {
                'Open StreetMap': osm,
                "Street": mapTilerStreet,
                "Satellite": mapTilerSatellite,
                
            };

            var overlayMaps = {
              'Fontanelle': fontanelle,
              "Panchina": panchina,
              "Bagni Pubblci": wc,
              "Parchi": park,
              "Cestini": bin,
              'Defibrillatore': defibrillatori,
              'Heatmap': heat,      
              'Tutti i POI': valol,
              'Tutti gli utenti': valol2,
            };

		L.control.layers(baseMaps, overlayMaps).addTo(map);
    

    

    var legend = L.control({position: 'bottomright'});

    //create a legend for the map
    legend.onAdd = function (map) {

        var div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 50, 100, 150, 200, 250],
            
            labels = [];

        // loop through our density intervals and generate a label with a colored square for each interval
        
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
};



    var legenduser = L.control({position: 'bottomright'});

    //create a legend for the map
    legenduser.onAdd = function (map) {

        var div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 50, 100, 150, 200, 250],
            grades_user = [0, 5, 10, 15, 20, 25],
            labels = [];

        // loop through our density intervals and generate a label with a colored square for each interval
        
        for (var i = 0; i < grades_user.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColorUser(grades_user[i] + 1) + '"></i> ' +
                grades_user[i] + (grades_user[i + 1] ? '&ndash;' + grades_user[i + 1] + '<br>' : '+');
        }

        return div;
    };
    //legend.addTo(map);
 
  </script>
</body>

</html>
