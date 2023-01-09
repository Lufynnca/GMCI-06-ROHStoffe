# ROHStoffe

## Anleitung WoZ-Prototype

### Install CouchDB

http://couchdb.apache.org/

### Create login

http://127.0.0.1:5984/_utils/#login\
Username: admin\
Passwort: admin\
_am besten aller gleiche login, sonst muss das jeder in den html anpassen_

### Configuration

Bei der Edit-Section (Zahnrad) bind-adresse anpassen:\
httpd | bind_address | <del>127.0.0.1</del> \

CORS erlauben:\
Add Option -> httpd ->enable_cors -> true

CORS Einstellungen (linke Seite neben Main config)
Origin Domains auf "All domains (\*)" setzten

### Run

woz.html und gui.html öffnen\
in woz Create DB drücken\
Unter http://127.0.0.1:5984/_utils/#/_all_dbs sollte nun ein eintrag namens gmci entstehen
S
