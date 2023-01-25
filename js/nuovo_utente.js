var jwt = localStorage.getItem("jwt");
if (jwt == null) {
    window.location.href = './login.html'
}

function apriPannello(data1, data,response)
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
      if (response == "success")
        {window.location.href = "utenti.html"}
  }

  
  window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        if (response == "success")
            {window.location.href = "utenti.html"}  
      }
  }
  
}

document.getElementById("Inserisci").onclick = function () {
  var form = document.getElementById("form_user");
  var data = new FormData(form);
  const mergedObject = {
    ...Object.fromEntries(data),
  };

  $.ajax({
    type: "POST",
    contentType: 'application/json',
    dataType: 'text',
    data: JSON.stringify(mergedObject),
    url: 'https://hunt-in-bo.herokuapp.com/user',
    headers: {"Content-type": "application/json","accept": "application/json","accept": "*/*"},
    success: function (data, status, xhr) {
      //show a console log with the response

      apriPannello("Successo", "Utente aggiunto correttamente","success");
      
        },
    error: function (jqXhr, textStatus, errorMessage) {
      console.log('Error' + errorMessage);
        apriPannello("Errore", "Qualcosa è andato storto","error");
        
     
      
    }
  
  });
}


function logout() {
  localStorage.removeItem("jwt");
  window.location.href = './login.html'
}