$(document).ready(function() {

    var params = getSearchParameters();
    document.getElementById("titolo").innerHTML = decodeURI(params.id);
    document.getElementById("idText").value = params.id;
    document.getElementById("usernameText").value = params.username;
    document.getElementById("aulaText").value = decodeURI(params.aula);
    $.ajax({
        type: "GET",
        contentType: 'application/json',
        url: 'https://wobbly-earwig.glitch.me/api/corsi',
        success: function (obj, textstatus) {
            obj.forEach(d => {
                if(d.codice == params.codice)
                    document.getElementById("codice_corsoText").value = d.codice + " - " + d.titolo;
                opt = document.createElement("option");
                opt.innerHTML = d.codice + " - " + d.titolo;
                opt.value = d.codice;
                document.getElementById("codice_corsoText").appendChild(opt);
            });
        },
        error: function () {
            document.getElementById("codice_corsoText").value = "Err - course not found"
        }
    });
});

function getSearchParameters() {
    var prmstr = window.location.search.substr(1);
    return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray( prmstr ) {
  var params = {};
  var prmarr = prmstr.split("&");
  for ( var i = 0; i < prmarr.length; i++) {
      var tmparr = prmarr[i].split("=");
      params[tmparr[0]] = tmparr[1].replace(/\+/gi, " ");
  }
  return params;
}