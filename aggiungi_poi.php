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
      <li class="nav-item">
        <a class="nav-link" href="mappa.php">
          <i class="fas fa-map"></i>
          <span>Mappa</span></a>
      </li>
      <li class="nav-item active">
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
			<h1 class="h3 mb-2 text-gray-800">Inserimento nuovo Point of Interest </h1>
			<p class="mb-4">Inserisci i valori nel form sottostante e premi "inserisci" per confermare l'operazione, "annulla" per tornare indietro</p>
        
            <form id="form" >
           
                <div class="form-group row">   
                    <div class="col-sm-4">
                        <select class="form-control form-control-user" id="codice_poi">
                            <option value="10">Seleziona una tipologia di Poi</option>
                            <option value="0">Fontanelle</option>
                            <option value="1">Pannchine</option>
                            <option value="2">Bagni pubblici</option>
                            <option value="3">Parchi</option>
                            <option value="4">Cestini Immondizia</option>
                            <option value="5">Defribillatori</option>
                        </select>
                        <small class="form-text text-muted ml-4">Tipologia Poi</small>
                    </div>
                    <div class="col-sm-4">
                      
                        <input type="text" class="form-control form-control-user" id="nome"value="" required>
                        <small class="form-text text-muted ml-4">Nome</small>
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-sm-4 mb-3 mb-sm-0">
                        <input type="text" class="form-control form-control-user" id="Lat" name="Lat">
                        <small class="form-text text-muted ml-4">Latitudine</small>
                    </div>
                    <div class="col-sm-4">
                        <input type="text" class="form-control form-control-user" id= "Long" name="Long">
                        <small class="form-text text-muted ml-4">Longitudine</small>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-4 mb-3 mb-sm-0">
                        <input type="text" class="form-control form-control-user" id="Descrizione" name="Descrizione">
                        <small class="form-text text-muted ml-4">Descrizione</small>
                    </div>
                    <div class="col-sm-4">
                        <input type="text" class="form-control form-control-user" id= "Stato" placeholder="Es. Rotto, Funziona" name="Stato">
                        <small class="form-text text-muted ml-4">Stato Operativo</small>
                    </div>
                </div>
                <div class="form-group row">
                <div class="col-sm-4 mb-3 mb-sm-0">
                        <input type="text" class="form-control form-control-user" id="Tag" placeholder="Es. Altezza" name="Tag">
                        <small class="form-text text-muted ml-4">Tag</small>
                    </div>
                    <div class="col-sm-4">
                        <input type="text" class="form-control form-control-user" id= "Valore" placeholder="157" name="Valore">
                        <small class="form-text text-muted ml-4">Valore</small>
                    </div>
                
                    </div>
                <div class="col-sm-4" style="float:center">
                    
                    <a href="#" id="addTag">Aggiungi Tag</a>
                </div>
                
            
          
            

            <div class="col-lg-6 mb-4">
              <!-- Approach -->
              <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Anteprima Mappa</h6>
                  </div>
                  <div id="map" style="height: 350px">
                    
                  </div>
                </div>
            </div>

            <input type="hidden" name="vUsername" value="" id="vUsername" />
                <div class="mb-2 mt-4 row col-sm-12 col-12 col-md-12 col-lg-6 col-xl-6" style="float:center">
                    <input type="submit" class="btn btn-primary btn-user btn-block bottoni-update" name="typeOp" value="Annulla">
                    <input type="submit" class="btn btn-primary btn-user btn-block bottoni-update" name="Inserisci" id="Inserisci" value="Inserisci" >
                </div>
            </form>
          
      
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
  <script src="js/jquery.redirect.js"></script>
  <script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"></script>

  <script>
    //add a map with a draggable marker
    var map = L.map('map').setView([44.494887, 11.3426163], 14);
    var marker = L.marker([44.494887, 11.3426163], {draggable: true}).addTo(map);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    //update the value of the input fields Lat e Long when the marker is dragged
    marker.on('dragend', function(e) {
      var lat = marker.getLatLng().lat;
      var lng = marker.getLatLng().lng;
      document.getElementById("Lat").value = lat;
      document.getElementById("Long").value = lng;
    });
    </script>
    <script>
      //function to add a new tag with incremental id
    
      
      var i = 1;
      $(document).ready(function(){
        $("#addTag").click(function(){
          i++;
          $("#addTag").before('<div class="form-group row"><div class="col-sm-4 mb-3 mb-sm-0"><input type="text" class="form-control form-control-user" id="Tag'+i+'" placeholder="Es. Altezza" name="Tag"><small class="form-text text-muted ml-4">Tag</small></div><div class="col-sm-4"><input type="text" class="form-control form-control-user" id= "Valore'+i+'" placeholder="157" name="Valore"><small class="form-text text-muted ml-4">Valore</small></div></div>');
        });
      });
    </script>
    <script>
      //function to get the value of the input field with the name vUsername
     


      //function to convert in JSON the form data with the button Inserisci
      $(document).ready(function(){
        $("#Inserisci").click(function(){
          var form = document.getElementById("form");
          var data = new FormData(form);
          var json = JSON.stringify(Object.fromEntries(data));
          console.log(json);
        });
      });
      
      
      
      </script>
</body>

</html>
