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

document.getElementById("aggiorna_poi").onclick = function () {
    apriPannello("Successo", "I dati sono stati aggiornati correttamente");
  };

document.getElementById("importa_quart").onclick = function () {
    apriPannello("Successo", "I dati dei quartieri sono stati importati correttamente");
  };
  
  function logout() {
    localStorage.removeItem("jwt");
    window.location.href = './login.html'
  }