# Front-end per Sistemi context-aware:

**Sviluppo front-end del progetto Hunt-in-bo**
Cercando di rispettare il paradigma RESTful, ogni risposta del server contiene il codice di stato HTTP e il tipo di contenuto (text/html oppure application/json) inoltre ogni connessione viene terminata dopo aver inviato la risposta, rispettando la proprietà *stateless* del protocollo http.

Il client è stato sviluppato utilizzando js, jquery e [jquery redirect](https://github.com/mgalante/jquery.redirect) per ottenere i dati dal webserver e html, css, chart.js e [datatables](https://datatables.net/reference/api/) per visualizzarli.


Il client è stato sviluppato avvalendosi del seguente template bootstrap disponibile online [SB-admin 2](https://blackrockdigital.github.io/startbootstrap-sb-admin-2/) adattato poi alle esigenze progettuali.

Il client `e stato sviluppato avvalendosi del template bootstrapSB Admin 2 disponibile
online adattato poi alle esigenze progettuali.
Il client web `e stato sviluppato utilizzando javascript, jquery e jquery redirect per ottenere
i dati dal webserver e html, css per creare le pagine web. Per visualizzare i dati, dopo averli
ottenuti dal webserver attraverso delle API, sono stati gestiti e visualizzati attraverso le
seguenti librerie: chart.js, datatables. Mentre per quanto riguarda i dati spaziali si `e scelto
di utilizzare Leaflet

La struttura si ramifica in diverse pagine, che permettono all’amministratore di gestire e
controllare i dati che verranno poi mostrati dall’app mobile.
Il cliente web `e composto da 6 pagine:
1.autenticazione, una semplice pagina di login che una volta inserite le credenziali
dell’amministratore permette di ottenere il Token con il quale fare richieste API al
Web server venendo reindirizzato all’interno del portale. Il login `e consentito solo
all’amministratore che avr`a un token diverso da quello dei comuni utenti registrati
tramite l’app.
2. [chart.js](https://www.chartjs.org/): utilizzato per creare la progress bar nella dashboard.
3. [datatables.net](https://datatables.net/): utilizzato per mostrare i dati e popolare le tabelle.




