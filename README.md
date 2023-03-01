# Front-end per Sistemi context-aware:

**Sviluppo front-end del progetto Hunt-in-bo**

Cercando di rispettare il paradigma RESTful, ogni risposta del server contiene il codice di stato HTTP e il tipo di contenuto (text/html oppure application/json) inoltre ogni connessione viene terminata dopo aver inviato la risposta, rispettando la proprietà *stateless* del protocollo http.

Il client è stato sviluppato utilizzando js, jquery e [jquery redirect](https://github.com/mgalante/jquery.redirect) per ottenere i dati dal webserver e html, css, chart.js e [datatables](https://datatables.net/reference/api/) per visualizzarli.


Il client è stato sviluppato avvalendosi del seguente template bootstrap disponibile online [SB-admin 2](https://blackrockdigital.github.io/startbootstrap-sb-admin-2/) adattato poi alle esigenze progettuali.

Il client è stato sviluppato avvalendosi del template bootstrapSB Admin 2 disponibile
online adattato poi alle esigenze progettuali.
Il client web è stato sviluppato utilizzando javascript, jquery e jquery redirect per ottenere
i dati dal webserver e html, css per creare le pagine web. Per visualizzare i dati, dopo averli
ottenuti dal webserver attraverso delle API, sono stati gestiti e visualizzati attraverso le
seguenti librerie: chart.js, datatables. Mentre per quanto riguarda i dati spaziali si `e scelto
di utilizzare Leaflet

La struttura si ramifica in diverse pagine, che permettono all’amministratore di gestire e
controllare i dati che verranno poi mostrati dall’app mobile.


![client-schermo](https://user-images.githubusercontent.com/33379163/222118384-e3e5c492-fde2-4955-8903-f64e46e73af2.png)


L'API raggiungibile dal link nel titolo è composta da 4 endpoint:
1. *autenticazione*, una semplice pagina di login che una volta inserite le credenziali
dell’amministratore permette di ottenere il Token con il quale fare richieste API al
Web server venendo reindirizzato all’interno del portale. Il login è consentito solo
all’amministratore che avr`a un token diverso da quello dei comuni utenti registrati
tramite l’app.

2. *dashboard*, la pagina iniziale utile per avere una visione rapida dei dati presenti. Essendo la pagina amministratore è importante avere la conoscenza numerica di quanti
utenti e quanti POI ci sono; quindi questi due valori sono i primi a essere visualizzati
con due card container. Per racchiudere in maniera riassuntiva i dati spaziali relativi
ai vari POI, è presente una semplice mini-mappa priva della possibilit`a di personalizzazione che mostra tutti i Point of Interest distribuiti nell’area metropolitana di
Bologna. Attraverso un grafico infine è possibile vedere non solo la distribuzione di
ogni categoria sul totale, ma anche il numero esatto di Poi per tipologia

3. *lista utenti* con l’elenco di tutti gli utenti registrati mostrati in una o più tabelle
in base al numero di utenti registrati. I dati visualizzati possono essere filtrati
con l’utilizzo della barra di ricerca, ed inoltre possibile aggiungere un nuovo utente
tramite un semplice form



![client-mappa-schermo](https://user-images.githubusercontent.com/33379163/222119683-1b153a1b-6733-41e0-b28c-6609fcc0f222.png)




4. *mappa*, la pagina che permette la visualizzazione grafica di tutti i dati con ampi margini di personalizzazione. Dal menù a tendina a lato si può scegliere quindi, di mostrare tutti i POI, oppure selezionare solo alcune categorie. Attraverso l'uso di diversi bottoni si può abilitare la visualizzazione dei quartieri di Bologna in base alla densità di Poi presenti o al numero di richieste fatte dagli utenti. E' possibile filtrare le richieste fatte dagli utenti al servizio di raccomandazione, specificando un determinato periodo temporale con data di inizio e data di fine, e raggruppandole successivamente in un certo numero di cluster a seconda del valore scelto

5. *aggiungi POI*, per aggiungere manualmente un punto di interesse relativo ad una
della tipologie note attraverso uno specifico form e una mini-mappa con un solo
marker, che `e possibile spostare per identificare in maniera precisa la posizione del
nuovo Point of Interest da aggiungere

6. *importa POI*, dove si possono aggiornare i dati spaziali dei POI presenti nel database
ottenendoli da OpenStreetMap o importare i dati relativi ai quartieri di Bologna dal
database.
Da tutte le pagine è possibile effettuare il logout, cliccando sull’immagine del proprio
profilo,tornando cos`ı alla pagina di login e eliminando il token necessario per le chiamate
API.

Da tutte le pagine è possibile effettuare il logout, cliccando sull’immagine del proprio
profilo,tornando così alla pagina di login e eliminando il token necessario per le chiamate API.


