  
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


  function get_poi_number_density() {
    var datas
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
         datas=data;
        return data;

      }
    }).responseText;

    var poi_number = {};
    for (var i = 0; i < datas.length; i++) {
      poi_number[datas[i].name] = datas[i].density.toString().slice(0, 5);
    }

    return JSON.stringify(poi_number);
  }


     
  function get_poi_number_normalized() {
    var datas
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
         datas=data;
        return data;

      }
    }).responseText;

    var poi_number = {};
    for (var i = 0; i < datas.length; i++) {
      poi_number[datas[i].name] = datas[i].normalized.toString().slice(0, 5);
    }
    return JSON.stringify(poi_number);
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
        return data;
      }
    }).responseText;
    return url;
  }


  function get_requestedPoi(){
 
    var url = $.ajax({
      url: "https://hunt-in-bo.herokuapp.com/requestedPoi",
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
        return data;

      }
    }).responseText;

    url = JSON.parse(url);

    //convert to geojson
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
        "id": obj.idPoi,
      };
      geojson.features.push(feature);

    }
    return geojson;
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
        return data;

      }
    }).responseText;

    
    url = JSON.parse(url);
    //convert to geojson
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
    return geojson;
  }


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
      }
    });
    return valo;

  }
  
  densityPoi =JSON.parse( get_poi_number_density());
  densityPoiNormalized = JSON.parse(get_poi_number_normalized());
  //valore = JSON.parse(valore);

  user_check = get_user_number();
  user_check = JSON.parse(user_check);


  var fontaIcon = L.icon({
    iconUrl: 'css/icon/water.png',
    iconSize: [25, 20]
  });
  var fontanelle = create_marker(fontaIcon);
  fontanelle.addData(get_poi(1));

  var benchIcon = L.icon({
    iconUrl: 'css/icon/bench.png',
    iconSize: [25, 20]
  });
  var panchina = create_marker(benchIcon);
  panchina.addData(get_poi(2));


  var wcIcon = L.icon({
    iconUrl: 'css/icon/wc.png',
    iconSize: [25, 20]
  });
  var wc = create_marker(wcIcon);
  wc.addData(get_poi(3));

  var parkIcon = L.icon({
    iconUrl: 'css/icon/trees.png',
    iconSize: [25, 20]
  });
  var park = create_marker(parkIcon);
  park.addData(get_poi(4));

  var binIcon = L.icon({
    iconUrl: 'css/icon/bin.png',
    iconSize: [25, 20]
  });
  var bin = create_marker(binIcon);
  bin.addData(get_poi(5));

  var defiIcon = L.icon({
    iconUrl: 'css/icon/defi.png',
    iconSize: [25, 20]
  });
  var defibrillatori = create_marker(defiIcon);
  defibrillatori.addData(get_poi(6));


function getColoree(status) {
  return  status == 0  ? 'red' :
          status == 1  ? 'green' :
          status == 2  ? 'orange' :
          status == 3  ? 'blue' :
          status == 4   ? 'pink' :
                                     'purple';
  }

  var valol = L.geoJson(get_poi(0), {
    pointToLayer: function (feature, latlng) {
      var marker = L.marker(latlng)
      return marker;
    }
  });

  var utenti = L.geoJson(get_requestedPoi(), {
    pointToLayer: function (feature, latlng) {
      var marker = L.marker(latlng)
      return marker;
    }
  });
  

  function getColor(d) {
    
    return d > 0.999 ? '#30051e' :
      d > 0.80 ? '#800026' :
        d > 0.60 ? '#BD0026' :
          d > 0.40 ? '#FC4E2A' :
            d > 0.20 ? '#FD8D3C' :
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
      layer.bindPopup("<b>" + feature.properties.nomequart + "</b>" + " ha una densità di POI per KM <sup>2</sup> di " + densityPoi[feature.properties.nomequart] + ', mentre ha una densità normalizzata di ' +densityPoiNormalized[feature.properties.nomequart] );
      layer.setStyle({ color: 'white', fillColor: getColor(densityPoiNormalized[feature.properties.nomequart]), opacity: 1, fillOpacity: 0.9 });
    }
  });



  var user_checkin = L.geoJson(null, {
    style: function (feature) {
      return { color: feature.properties.color };
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup("<b>" + feature.properties.nomequart + "</b>" + " ha " + user_check[feature.properties.nomequart] + " utenti che hanno richiesto un POI");

      layer.setStyle({ color: 'white', fillColor: getColorUser(user_check[feature.properties.nomequart]), opacity: 1, fillOpacity: 0.87 });

    }
  });


  $.getJSON(quart, function (data3) {
    user_checkin.addData(data3);
  });

  $.getJSON(quart, function (data3) {
    quartieri.addData(data3);
  });

  var pois = get_poi(0);
  var heat;

  var locations = pois.features.map(function (rat) {
    var location = rat.geometry.coordinates.reverse();
    location.push(0.5);
    return location;
  });

  heat = L.heatLayer(locations, { radius: 35 });

  function addQuart() {
    map.removeLayer(user_checkin);
    map.removeControl(legenduser);
    if (valol3 != undefined) {
      map.removeLayer(valol3);
    }
    quartieri.addTo(map);

    legend.addTo(map);
  }

  function addCheckIn() {
    map.removeLayer(quartieri);
    map.removeControl(legend);
    if (valol3 != undefined) {
      map.removeLayer(valol3);
    }
    user_checkin.addTo(map);

    legenduser.addTo(map);
  }

  function setDefaultView() {
    map.removeLayer(quartieri);
    map.removeControl(legend);
    map.removeLayer(user_checkin);
    if (valol3 != undefined) {
    map.removeLayer(valol3);
  }
    map.removeControl(legenduser);
    
  }

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
    'Tutti gli utenti': utenti,
  };

  L.control.layers(baseMaps, overlayMaps).addTo(map);

  /////////////////////Legend  /////////////////////////////////////////////////
  var legend = L.control({ position: 'bottomright' });

  legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
      grades = [0, 0.20, 0.40, 0.60, 0.80,1],

      labels = [];
    // loop through our density intervals and generate a label with a colored square for each interval
      div.innerHTML+='<b>Densità POI Normalizzata</b><br>'
    for (var i = 0; i < grades.length; i++) {
      div.innerHTML +=
        '<i style="background:' + getColor(grades[i] +0.00001) + '"></i> ' +
        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '');

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
    div.innerHTML+='<b>Densità Richieste Utenti</b><br>'
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

var calendar = flatpickr("#datepicker", {

  mode: "range",
  dateFormat: "Y-m-d",
  minDate: "2022-12-01",
  maxDate: "2023-01-20",


});


function apriPannello()
{
  let titolo = "User Clustering";
  modal = document.getElementById("pannello");
  title = document.getElementById("title");
  modalText = document.getElementById("modal-text");
  title.innerHTML = titolo;
  closeSpan = document.getElementById("close");


  const value = document.querySelector("#value")
  const input = document.querySelector("#slideK")
  value.textContent = input.value
  input.addEventListener("input", (event) => {
  value.textContent = event.target.value
 
})

  modal.style.display = "block";
  closeSpan.onclick = function() {
      modal.style.display = "none";

  }
  
  window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
  }
}


 function Clustering(){
 
  var start_date = calendar.selectedDates[0].toISOString().slice(0,10);
  var end_date = calendar.selectedDates[1].toISOString().slice(0,10);
  var k = document.getElementById("slideK").value;
  
  var mergedObject = {
    "k": k,
    "start_date": start_date,
    "end_date": end_date
 }

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
    return data;
  }
}).responseText;
return JSON.parse(url);

}

 function cluster() {
  conver=Clustering();
  var geojson = {
    "type": "FeatureCollection",
    "features": []
  };
  for (var i = 0; i < conver.length; i++) {
    var color = "";
    if (i == 0) {
      color = "red";
    }
    else if (i == 1) {
      color = "gray";
    }
    else if (i == 2) {
      color = "orange";
    } 
    else if (i == 3) {
      color = "green";
    }
    else if (i == 4) {
      color = "purple";
    }
    else if (i == 5) {
      color = "blue";
    }
    else if (i == 6) {
      color = "cadetblue";
    }
    else if (i == 7) {
      color = "darkpurple";
    }
    else if (i == 8) {
      color = "cadetblue";
    }
    else if (i == 9) {
      color = "darkblue";
    }
    else if (i == 10) {
      color = "black";
    }
    for (var j = 0; j < conver[i].points.length; j++) {
      var feature = {
        "type": "Feature",
        "geometry": {
          
          "type": "Point",
          "coordinates": [conver[i].points[j][1], conver[i].points[j][0]],
          
        },
        "properties": {
          "color": color,
          "k": i
        }
      };
      geojson.features.push(feature);

  }
}
  return geojson;
}

var valol3;
function btnCluster(){
  if (valol3 != undefined) {
    map.removeLayer(valol3);
  }
valol3 = L.geoJson(cluster(), {
  pointToLayer: function (feature, latlng) {
    var marker = L.marker(latlng,{icon:L.AwesomeMarkers.icon({     
      markerColor: feature.properties.color})})
    return marker;
  }
}).addTo(map);

modal = document.getElementById("pannello");
modal.style.display = "none";
}

