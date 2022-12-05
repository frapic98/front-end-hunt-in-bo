//function to add a new tag and value
addTag.onclick = function () {
  var newTag = document.createElement("input");
  newTag.setAttribute("type", "text");
  newTag.setAttribute("name", "Tag[]");
  newTag.setAttribute("class", "form-control form-control-user");
  newTag.setAttribute("placeholder", "Es.Colore");
  //set the label 'Tag' under the Tag input
  var newTagLabel = document.createElement("small");
  newTagLabel.setAttribute("class", "form-text text-muted ml-4");
  newTagLabel.innerHTML = "Tag";

  tag_list.appendChild(newTag);
  tag_list.appendChild(newTagLabel);

  var newValue = document.createElement("input");
  newValue.setAttribute("type", "text");
  newValue.setAttribute("name", "Valore[]");
  newValue.setAttribute("class", "form-control form-control-user");
  newValue.setAttribute("placeholder", "Rosso");

  var newValueLabel = document.createElement("small");
  newValueLabel.setAttribute("class", "form-text text-muted ml-4");
  newValueLabel.innerHTML = "Valore";

  valore_list.appendChild(newValue);
  valore_list.appendChild(newValueLabel);
};


function apriPannello(data1, data)
{
  let msg = data;
  let titolo = data1;

  modal = document.getElementById("pannello");
  title = document.getElementById("title");
  modalText = document.getElementById("modal-text");
  modalText.innerHTML = msg;
  title.innerHTML = titolo;
  closeSpan = document.getElementById("close");

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

//function to remove the last tag and value
removeTag.onclick = function () {
  var tag_list = document.getElementById("tag_list");
  var valore_list = document.getElementById("valore_list");
  var tag = tag_list.getElementsByTagName("input");
  var valore = valore_list.getElementsByTagName("input");
  var tag_label = tag_list.getElementsByTagName("small");
  var valore_label = valore_list.getElementsByTagName("small");
  tag_list.removeChild(tag[tag.length - 1]);
  tag_list.removeChild(tag_label[tag_label.length - 1]);
  valore_list.removeChild(valore[valore.length - 1]);
  valore_list.removeChild(valore_label[valore_label.length - 1]);
};

document.getElementById("Inserisci").onclick = function () {
  //add all the tags value in the same object json
  var tags = { tags: {} };
  var tag = document.getElementsByName("Tag[]");
  var value = document.getElementsByName("Valore[]");
  for (var i = 0; i < tag.length; i++) {
    tags.tags[tag[i].value] = value[i].value;
  }

  var form = document.getElementById("form_poi");
  var data = new FormData(form);
  const mergedObject = {
    ...Object.fromEntries(data),
    ...tags,
  };

  //convert the category in the mergedObject in number
  mergedObject.category = parseInt(mergedObject.category);
  mergedObject.rank = parseInt(mergedObject.rank);
  //console.log(JSON.stringify(mergedObject));

  ///post the json to the server with xhttp
  /*var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://hunt-in-bo.herokuapp.com/poi");
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("accept", "application/json");
  xhttp.setRequestHeader("accept", "*///*");
  /*xhttp.setRequestHeader("x-access-token", localStorage.getItem("jwt"));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };
  xhttp.send(JSON.stringify(mergedObject));
};*/

$.ajax({
  type: "POST",
  contentType: 'application/json',
  data: JSON.stringify(mergedObject),
  url: 'https://hunt-in-bo.herokuapp.com/poi',
  headers: {"Content-type": "application/json","accept": "application/json","accept": "*/*","x-access-token": localStorage.getItem("jwt")},
  success: function (data) {
    console.log(data);
    apriPannello("Successo", "Punto di interesse inserito con successo");
  },
  error: function (data) {
    console.log(data);
    apriPannello("Errore", "Errore nell'inserimento del punto di interesse");
  }
});
};
document.getElementById("Annulla").onclick = function () {
  document.getElementById("form_poi").reset();
  document.getElementById("tag_form").reset();
};
