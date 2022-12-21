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