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
        Corsi
      </div>

      <!-- Nav Item - Tables -->
      <li class="nav-item">
        <a class="nav-link" href="corsi.php">
          <i class="fas fa-fw fa-table"></i>
          <span>Lista corsi</span></a>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block">

      <!-- Heading -->
      <div class="sidebar-heading">
        Frequentare
      </div>

      <!-- Nav Item - associazioni -->
      <li class="nav-item">
        <a class="nav-link" href="frequentare.php">
          <i class="fas fa-book"></i>
          <span>Lista associazioni</span></a>
      </li>

       <!-- Divider -->
       <hr class="sidebar-divider d-none d-md-block">

      <!-- Heading -->
      <div class="sidebar-heading">
          Navigazione mappa
        </div>
      <!-- Nav Item - associazioni -->
      <li class="nav-item active">
        <a class="nav-link" href="mappa.php">
          <i class="fas fa-book"></i>
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
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">alepistola</span>
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
                <div id="map" style="height: 570px;">
                </div>
              <!-- /.container-fluid -->
      
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
 <script src="jquery-2.1.1.min.js"></script> 
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
    var url1 = 'export.geojson';  
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




	 //Set function for color ramp
	function getColor(league){
		return league == 'NL' ? 'blue' :
			   league == 'AL' ? 'red' :
								'white';
	       }	
	
	// Set style function that sets fill color property
  var fontaIcon = L.icon({
    iconUrl: 'water.png',
    iconSize: [25,20]});
		
// layer 1

  
     var fontanelle = L.geoJson(null, {
			
            pointToLayer: function(feature, latlng) {
		
				return L.marker(latlng,{icon:fontaIcon});  //.bindTooltip(feature.properties.Name);
            },
			
				onEachFeature: function (feature, layer) {
					layer._leaflet_id = feature.id;
					var popupContent = "<p>The <b>" +
					feature.properties.amenity + "</b>is here.</p>";
							
					if (feature.properties && feature.properties.popupContent) {
						popupContent += feature.properties.popupContent;
					}
						layer.bindPopup(popupContent);

				}
				
				});
   
	
	$.getJSON(url1, function(data) {			
		fontanelle.addData(data).addTo(map);
	});	
//END Layer1

/// Layer 2
		/*function getColor2(league){
		return league == 'NFC' ? 'green' :
			   league == 'AFC' ? 'orange' :
								'white';
	       }	*/
	
	// Set style function that sets fill color property
	function style2(feature) {
		return {
			//fillColor: setColor(feature.properties.League),
			fillOpacity: 0.5,
			weight: 2,
			opacity: 1,
			color: 'red',
			dashArray: '3'
		};
	}	

      var defiIcon = L.icon({
    iconUrl: 'defi.png',
    iconSize: [25,20]
  }); 
  //layer2
       var defribillatori = L.geoJson(null, {
			
            pointToLayer: function(feature, latlng) {
		
				return L.marker(latlng, {icon: defiIcon});  //.bindTooltip(feature.properties.Name);
            },
			
			onEachFeature: function (feature, layer) {
				layer._leaflet_id = feature.id;

			
				var popupContent = "<p>The <b>" +
				feature.properties.emergency + "</b> is here,</br> Street: "+ 
        feature.properties["addr:street"] +" n° " + feature.properties["addr:housenumber"] + "</p>";
						
				if (feature.properties && feature.properties.popupContent) {
					popupContent += feature.properties.popupContent;
				}
					layer.bindPopup(popupContent);
			

			}
		});
		
	$.getJSON(url2, function(data2) {			
		defribillatori.addData(data2);
	});		
	
//print on map the  quartieri.gejson file

    // add GeoJSON layer to the map once the file is loaded
    var quartieri= L.geoJson(null,{
      style: function(feature){
        return {color: feature.properties.color};
      },
      onEachFeature: function(feature,layer){
        layer.bindPopup(feature.properties.nomequart);
        if(feature.properties.nomequart == "Santo Stefano"){
          layer.setStyle({color: 'red'});
        }
        else if(feature.properties.nomequart == "San Donato - San Vitale"){
          layer.setStyle({color: 'blue'});
        }
        else if(feature.properties.nomequart == "Navile"){
          layer.setStyle({color: 'green'});
        }
        else if(feature.properties.nomequart == "Borgo Panigale - Reno"){
          layer.setStyle({color: 'yellow'});
        }
        else if(feature.properties.nomequart == "Porto - Saragozza"){
          layer.setStyle({color: 'purple'});
        }
        else if(feature.properties.nomequart == "Savena"){
          layer.setStyle({color: 'orange'});
        }
        
        
      }
    });

  $.getJSON(quart,function(data3){
  quartieri.addData(data3);
  });	
   

/////////////////////Layer Control  /////////////////////////////////////////////////
	
            var baseMaps = {
                'Open StreetMap': osm,
                "Street": mapTilerStreet,
                "Satellite": mapTilerSatellite,
                
            };

            var overlayMaps = {
              "Quartieri": quartieri,
			        'Fontanelle': fontanelle,
             'Defribillatore"': defribillatori
            };

		L.control.layers(baseMaps, overlayMaps).addTo(map);

 
  </script>
</body>

</html>
