/*var jwt = localStorage.getItem("jwt");
if (jwt != null) {
  window.location.href = './index.php'
}*/
function login() {
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://hunt-in-bo.herokuapp.com/login");
  xhttp.setRequestHeader("accept","application/json");
  xhttp.setRequestHeader("Content-Type","application/json");
  xhttp.send(JSON.stringify({ 
    "email": email,
    "password": password
  }));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      //get the value of the token and the username from the response and store them in the local storage
      delete objects["password"];
      delete objects["email"];
      delete objects["bio"];
      delete objects["id"];

      localStorage.setItem("jwt", JSON.stringify(objects));


      //console.log(localStorage.getItem(jwt));
      window.location.href = './index.php'
      console.log((JSON.parse(localStorage.getItem(jwt))).token);
      console.log((JSON.parse(localStorage.getItem(jwt))).username);
      
      } 
      else if(this.readyState == 4 && this.status == 400) {

        apriPannello("Errore", "Credenziali errate");
         
      }
      
    
  };
  return false;
}

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