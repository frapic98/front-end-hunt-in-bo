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
$(document).ready(function() {
    const card = $("#wrapper");
    const loadingCircle = $("#loading-circle");
    

    //change the css display property of the accordion element to block
    
    card.css("background-color", "black");
    card.css("opacity", "0.6");
    loadingCircle.css("display", "block");
    card.css("pointer-events", "none");

  setTimeout(function() {
    // re-enable the form
    card.css("background-color", "none");
    card.css("opacity", "1");
    card.css("pointer-events", "auto");
    loadingCircle.css("display", "none");
    apriPannello("Successo", "I dati dei quartieri sono stati importati correttamente");

  }, 3000);
});
};

document.getElementById("importa_quart").onclick = function () {
    $(document).ready(function() {
        const card = $("#wrapper");
        const loadingCircle = $("#loading-circle");
        
    
        //change the css display property of the accordion element to block
        
        card.css("background-color", "black");
        card.css("opacity", "0.6");
        loadingCircle.css("display", "block");
        card.css("pointer-events", "none");
    
      setTimeout(function() {
        card.css("background-color", "none");
        card.css("opacity", "1");
        card.css("pointer-events", "auto");
        loadingCircle.css("display", "none");
        apriPannello("Successo", "I dati dei quartieri sono stati importati correttamente");
    
      }, 3000);
    });
    
  };
  
  function logout() {
    localStorage.removeItem("jwt");
    window.location.href = './login.html'
  }