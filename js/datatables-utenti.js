
$(document).ready(function() {

   /*var params = getSearchParameters();

    if(params.typeOp == "Salva")
    {
        console.log(params);
        $.ajax({
            type: "PUT",
            contentType: 'application/json',
            data: JSON.stringify(
                { 
                    "username": params.username,
                    "nome" : params.nome,
                    "cognome" : params.cognome,
                    
                    
                    
                }
            ),
            url: 'https://wobbly-earwig.glitch.me/api/utenti/' + params.vUsername,
            headers: {"x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZyYUBnbWFpbC5jb20iLCJpYXQiOjE2Njc4MzA0NDAsImV4cCI6MTY2NzgzNzY0MH0.NVosX8I6sriV8zeWrXzBc47tF-wxvmWApqBUpxoub4M"},
            success: function (obj, textstatus) {
                apriPannello("Modifica avvenuta con successo", "Modificato correttamente l'utente con username <b>" + params.vUsername + "</b>");
                getData();
            },
            error: function () {
                alert("Si è verificato un errore durante la modifica dell'utente " + params.vUsername + "\nRiprovare ad eseguire l'operazione.");
                getData();
            }
        });
    }
    else if(params.typeOp == "Inserisci")
    {
        $.ajax({
            type: "POST",
            contentType: 'application/json',
            data: JSON.stringify(
                { 
                    "username": params.username,
                    "nome" : params.nome,
                    "cognome" : params.cognome,
                    "password": params.password,
                    "corso_di_studio": params.corso_di_studio
                }
            ),
            url: 'https://wobbly-earwig.glitch.me/api/utenti',
            success: function (obj, textstatus) {
                apriPannello("Inserimento avvenuto con successo", "Inserito correttamente l'utente <b>" + params.username + "</b>");
                getData();
            },
            error: function () {
                alert("Si è verificato un errore durante l'inserimento dell'utente " + params.username + "\nRiprovare ad eseguire l'operazione.");
                getData();
            }
        });
    }
    else
    {*/
        getData();
    //}

    
});

function getData()
{
    $.ajax({
        type: "GET",
        url: 'https://hunt-in-bo.herokuapp.com/user',
        headers: {"x-access-token": localStorage.getItem("jwt")},
        dataType: 'json',
        success: function (obj, textstatus) {
                var dataTable =  $('#dataTable').DataTable({
                    data: obj,
                    dataSrc: "",
                    select: true,
                    order: [[ 0, "asc" ]],
                    dom: "lBfrtip",
                    buttons: [
                      {
                          text: 'Modifica',
                          className: 'btn btn-secondary btn-icon-split',
                          action: function () {
                              var rowData = dataTable.row('.selected').data();
                              if(rowData !== undefined)
                              {
                                  $.redirect('utente.php', rowData, "GET");
                              }
                              
                          }
                      },
                      {
                          text: 'Elimina',
                          className: 'btn btn-primary btn-icon-split',
                          action: function () {
                              var rowData = dataTable.row('.selected').data();
                              let vurl = "https://hunt-in-bo.herokuapp.com/user" + rowData.username
                              if(rowData !== undefined)
                              {
                                  $.ajax({
                                      type: "DELETE",
                                      url: vurl,
                                      success: function(result){
                                          dataTable.row('.selected').remove().draw( false );
                                          apriPannello("Eliminazione avvenuta con successo", "Eliminato correttamente l'utente: <b>" + rowData.username + "</b>");
                                      },
                                      error: function(){
                                          alert("Si è verificato un errore durante la rimozione dell'utente: "+ rowData.username);
                                      } 
                                  });
                              }
                          }
                      }
                  ],
                  columns: [
                      { data: "id"}, {data: "email"}, {data: "username"}, {data: "bio"},
                  ]
                });
        },
        error: function (obj, textstatus) {
            alert(obj.msg);
        }
      });
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

