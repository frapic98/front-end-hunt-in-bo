
  var mergedObject = {
    "k": 1,
    "start_date": "2022-11-10",
    "end_date": "2022-12-20"
  };


  function get_cluster() {
    var url = $.ajax({
      url: "https://hunt-in-bo.herokuapp.com/statistics/userClustering",
      type: "POST",
      dataType: "text",
      data: JSON.stringify(mergedObject),
      global: false,
      async: false,
      headers: {
        "Content-type": "application/json",
        "accept": "application/json",
        "x-access-token": (JSON.parse(localStorage.getItem("jwt"))).token
      },
      success: function (data) {
        console.log(data);
        //convert the points on the jsnon file in number


        return data;
      }
    }).responseText;
    console.log(url);
    return JSON.parse(url);
  }


  //convert the points on number and put them on the map
  function convert_points(risposta) {
    var points = [];
    for (var i = 0; i < risposta.length; i++) {
      for (var j = 0; j < risposta[i].points.length; j++) {
        points.push([parseFloat(risposta[i].points[j][0]), parseFloat(risposta[i].points[j][1])]);
      }
    }


    return points;
  }


  var conver = convert_points(get_cluster());



  //convert lat and long to float
  function cluster() {

    //convert url1 to geojson
    var geojson = {
      "type": "FeatureCollection",
      "features": []
    };
    for (var i = 0; i < conver.length; i++) {
      var feature = {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [conver[i][1], conver[i][0]]
        }
      };
      geojson.features.push(feature);

    }
    console.log(geojson);
    return geojson;
  }

  var clust_user = cluster();


  //function to get the number of poi for the neighborhood


  //get_cluster();

  function get_poi_number() {
    var url = $.ajax({
      url: "https://hunt-in-bo.herokuapp.com/statistics/poiDensity",
      type: "GET",
      dataType: "json",
      global: false,
      async: false,
      headers: {
        "Content-type": "application/json",
        "accept": "application/json",
        "x-access-token": (JSON.parse(localStorage.getItem("jwt"))).token
      },
      success: function (data) {
        // console.log(data);
        return data;
      }
    }).responseText;

    return url;
  }

  function get_user_number() {
    var url = $.ajax({
      url: "https://hunt-in-bo.herokuapp.com/statistics/poiCheckIn",
      type: "GET",
      dataType: "json",
      global: false,
      async: false,
      headers: {
        "Content-type": "application/json",
        "accept": "application/json",
        "x-access-token": (JSON.parse(localStorage.getItem("jwt"))).token
      },
      success: function (data) {
        // console.log(data);
        return data;
      }
    }).responseText;

    return url;
  }


 function get_poi(j) {
    if (j == 0) {
      var urll = "https://hunt-in-bo.herokuapp.com/poi"
    }
    else {
      var urll = "https://hunt-in-bo.herokuapp.com/poi/" + j
    }
    var url = $.ajax({
      url: urll,
      type: "GET",
      dataType: "json",
      global: false,
      async: false,
      headers: {
        "Content-type": "application/json",
        "accept": "application/json",
        "x-access-token": (JSON.parse(localStorage.getItem("jwt"))).token
      },
      success: function (data) {
        //console.log(JSON.stringify(data));

        return data;

      }
    }).responseText;

    //console.log(url1);    
    url = JSON.parse(url);

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

  var quart = 'quartieri.geojson';

  var map = L.map('map').setView([44.494887, 11.3426163], 14);

  var osm = new L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var mapTilerStreet = new L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=17R9tobWUuZJ8LQwYlkd', {
    maxZoom: 20,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  });
  var mapTilerSatellite = new L.tileLayer('https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}@2x.jpg?key=17R9tobWUuZJ8LQwYlkd', {
    maxZoom: 20,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  });



  function create_marker(Icon) {
    valo = L.geoJson(null, {
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: Icon });
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
  valore = get_poi_number();

  valore = JSON.parse(valore);

  user_check = get_user_number();
  user_check = JSON.parse(user_check);
  /*user_check['Navile']=6;
  user_check['Porto - Saragozza']=11;
  user_check['San Donato - San Vitale']=16;
  user_check['Santo Stefano']=21;
  user_check['Savena']=26;*/

  console.log(user_check);


  // Set style function that sets fill color property
  var fontaIcon = L.icon({
    iconUrl: 'water.png',
    iconSize: [25, 20]
  });

  var fontanelle = create_marker(fontaIcon);
  fontanelle.addData(get_poi(1));

  //END Layer1

  var benchIcon = L.icon({
    iconUrl: 'bench.png',
    iconSize: [25, 20]
  });

  var panchina = create_marker(benchIcon);
  panchina.addData(get_poi(2));


  var wcIcon = L.icon({
    iconUrl: 'wc.png',
    iconSize: [25, 20]
  });
  var wc = create_marker(wcIcon);
  wc.addData(get_poi(3));

  var parkIcon = L.icon({
    iconUrl: 'trees.png',
    iconSize: [25, 20]
  });
  var park = create_marker(parkIcon);
  park.addData(get_poi(4));

  var binIcon = L.icon({
    iconUrl: 'bin.png',
    iconSize: [25, 20]
  });
  var bin = create_marker(binIcon);
  bin.addData(get_poi(5));

  var defiIcon = L.icon({
    iconUrl: 'defi.png',
    iconSize: [25, 20]
  });
  var defibrillatori = create_marker(defiIcon);
  defibrillatori.addData(get_poi(6));

  var valol = L.geoJson(get_poi(0), {
    pointToLayer: function (feature, latlng) {
      var marker = L.marker(latlng);
      return marker;
    }
  });

  var valol2 = L.geoJson(cluster(), {
    pointToLayer: function (feature, latlng) {
      var marker = L.marker(latlng);
      return marker;
    }
  });
  //print on map the  quartieri.gejson file

  function getColor(d) {
    return d > 250 ? '#800026' :
      d > 200 ? '#BD0026' :
        d > 150 ? '#E31A1C' :
          d > 100 ? '#FC4E2A' :
            d > 50 ? '#FD8D3C' :
              '#FED976';

  }

  function getColorUser(d) {
    return d > 25 ? '#442e19' :
      d > 20 ? '#475928' :
        d > 15 ? '#2d6135' :
          d > 10 ? '#008000' :
            d > 4 ? '#4cbb17' :
              '#b7d5ac';
  }
  // add GeoJSON layer to the map once the file is loaded
  var quartieri = L.geoJson(null, {
    style: function (feature) {
      return { color: feature.properties.color };
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup("<b>" + feature.properties.nomequart + "</b>" + " ha " + valore[feature.properties.nomequart] + " POI");
      layer.setStyle({ color: 'white', fillColor: getColor(valore[feature.properties.nomequart]), opacity: 1, fillOpacity: 0.7 });
    }
  });



  var user_checkin = L.geoJson(null, {
    style: function (feature) {
      return { color: feature.properties.color };
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup("<b>" + feature.properties.nomequart + "</b>" + " ha " + user_check[feature.properties.nomequart] + " utenti che hanno richiesto un POI");

      layer.setStyle({ color: 'white', fillColor: getColorUser(user_check[feature.properties.nomequart]), opacity: 1, fillOpacity: 0.7 });

    }
  });


  $.getJSON(quart, function (data3) {
    user_checkin.addData(data3);
  });

  //commentato
  $.getJSON(quart, function (data3) {
    quartieri.addData(data3);
  });

  /*var heat = L.heatLayer([
   [50.5, 30.5, 0.2], // lat, lng, intensity
   [50.6, 30.4, 0.5],
   [50.7, 30.3, 0.2],
 ], {radius: 25}).addTo(map);*/

  //commentato




  var pois = get_poi(0);


  //var marker=create_marker(L.icon({iconUrl: 'pin.png',iconSize: [20,20]}));
  //marker.addData(get_poi(0));

  var heat;

  var locations = pois.features.map(function (rat) {
    var location = rat.geometry.coordinates.reverse();
    location.push(0.5);
    //console.log(location);
    return location;
  });

  heat = L.heatLayer(locations, { radius: 35 });

  function addQuart() {
    map.removeLayer(user_checkin);
    map.removeControl(legenduser);
    quartieri.addTo(map);

    legend.addTo(map);
  }

  function addCheckIn() {
    map.removeLayer(quartieri);
    map.removeControl(legend);
    user_checkin.addTo(map);

    legenduser.addTo(map);
  }

  function setDefaultView() {
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




  var legend = L.control({ position: 'bottomright' });

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



  var legenduser = L.control({ position: 'bottomright' });

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

function logout() {
  localStorage.removeItem("jwt");
  window.location.href = './login.html'
}