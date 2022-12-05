$(document).ready(function() {

    var params = getSearchParameters();
    document.getElementById("titolo").innerHTML = decodeURI(params.username);
    document.getElementById("emailText").value = decodeURI(params.email);
    document.getElementById("usernameText").value = decodeURI(params.username);
    document.getElementById("passwordText").value = decodeURI(params.password);
    document.getElementById("bioText").value = decodeURI(params.bio);
    document.getElementById("vUsername").value = decodeURI(params.username);
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