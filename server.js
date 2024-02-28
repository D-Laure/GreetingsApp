/* importiert das express Framework in 
die Konstante express*/
const express = require("express");

/* Portnummer fuer den Server wird hier festgelegt!*/
const PORT = process.env.PORT || 5501; 

/* Express Anwendung wirsd erstellt und in 
Variable "app" importiert*/
let app = express();

/* Alle Dateien, die im Ordner "frontend" enthalten sind 
werden an den User 'ohne weiter Verarbeitung' weitergeleitet */
app.use(express.static('frontend'));

/* Sobald Server gestartet ist, wird eine Meldung auf der 
Konsole ausgegeben.*/
app.listen(PORT, ()=> {
    console.log("Server auf Port $(PORT)");
});