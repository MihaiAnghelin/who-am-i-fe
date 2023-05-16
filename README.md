# Who Am I?

## by Mihai Anghelin

### Introducere

"Who Am I?" este un un joc de tip multiplayer în care jucătorii trebuie să își ghicească identitatea.
Jocul este inspirat din jocul cu cărți "Who Am I?" și este destinat să fie jucat într-un grup de prieteni.
Fiecare jucător va avea o identitate necunoscută pentru el, iar scopul jocului este să îți ghicești identitatea
înaintea celorlalți jucători. Fiecare jucător va putea pune întrebări la care se poate răspunde cu "Da" sau "Nu"
pentru a-și ghici identitatea.

În mod obișnuit acest joc se joacă cu cărți pe frunte pe care sunt scrise numele personajelor.
Scopul acestui proiect este de a înlocui cărțile de joc cu o aplicație web care să ofere aceeași
experiență de joc.

Pentru a juca acest joc este necesar ca fiecare jucător să aibă un dispozitiv cu acces la internet
și un browser web. Aplicația web va prezenta o modalitate de a crea o cameră de joc și de a invita
alți jucători în cameră. După ce toți jucătorii au intrat în cameră, fiecare jucător va primi o identitate
nouă și necunoscută pentru el, iar jocul poate începe. Pentru a crea o cameră de joc este necesar ca unul
dintre jucători să fie gazdă. Gazda va primi un link asociat camerei pe care îl poate distribui celorlalți
jucători. Gazda va avea funcționalități suplimentare față de ceilalți jucători, precum selectarea categoriilor
de personaje din care se vor alege identitățile jucătorilor, abilitatea de a schimba identitatea unui jucător,
dacă și ceilalți jucători sunt de acord (în cazul în care jucatorii consideră că ar fi mult prea complicat pentru
acel jucător să își ghicească identitatea curentă), abilitatea de a scoate un jucător din cameră. Toți jucătorii
vor avea un spațiu în care vor putea scrie, pentru a putea ține evidența întrebărilor și răspunsurilor primite.

O altă componentă importantă a aplicației este pagina de administrare a jocului. Această pagină este destinată
administratorului jocului și va oferi funcționalități precum: crearea de noi categorii de personaje, adăugarea de
personaje în categorii, ștergerea de personaje din categorii, ștergerea de categorii de personaje. Această pagină
este protejată cu o parolă și este disponibilă la adresa https://who-am-i.mihaianghelin.ro/admin.

### Suport tehnic

Aplicația "Who Am I?" este o aplicație web compusă din mai multe componente. Componentele sunt:

- Frontend: este componenta care se ocupă de interfața cu utilizatorul. Este scrisă folosind framework-ul NEXT.JS
  și este scrisă în limbajul de programare TypeScript. Componenta este responsabilă de afișarea paginilor web
  și de interacțiunea cu utilizatorul. Componenta este disponibilă la adresa https://who-am-i.mihaianghelin.ro/.
- Backend: este componenta care se ocupă de logica aplicației. Este scrisă folosind framework-ul ASP.NET și este
  scrisă în limbajul de programare C#. Componenta este responsabilă de gestionarea camerelor de joc și gestionarea
  identităților jucătorilor.
- Baza de date: este componenta care se ocupă de stocarea datelor. Este o bază de date relațională și este
  implementată folosind MySQL. Componenta este responsabilă de stocarea datelor despre camerele de joc și
  despre identitățile jucătorilor.

Aplicația este găzduită pe un server propriu, care rulează sistemul de operare Ubuntu 20.04.1 LTS.
Fiecare componentă este rulată într-un container Docker. Pentru a gestiona container-ele Docker este folosit
Docker Compose. Pentru a vizualiza starea container-elor Docker este folosit Portainer. Pentru a gestiona
versiunile de pe server este folosit Git, repository-urile fiind găzduite pe GitHub.

O aplicație similară este "Who Am I?" de la Interfrog Produktion GmbH. Această aplicație ar trebui să ofere
un set de funcționaliți similare cu cele oferite de proiectul meu. O perioadă de timp am folosit această aplicație
pentru a juca "Who Am I?", însă am decis să îmi dezvolt propria aplicație pentru a avea mai mult control asupra
acesteia și pentru a putea adăuga funcționalități noi.
Alte motive pentru care am decis să îmi dezvolt propria aplicație este faptul că aplicația "Who Am I?" de la
Interfrog Produktion GmbH nu oferă opțiunea de a adăuga personaje noi. De asemenea, aplicația prezintă o serie
de bug-uri care nu au fost rezolvate de dezvoltatorii aplicației. Un exemplu de bug este faptul că în momentul
în care un jucator intră într-o cameră de joc, acesta are șansa de a pierde conexiunea cu camera, iar celorlalți
jucători nu li se va afișa faptul că jucătorul a părăsit camera. Alte bug-uri sunt legate de faptul că daca un
dispozitiv intră în modul de standby, atunci jucătorul va pierde conexiunea cu camera de joc, iar în cazul în care
gazda camerei de joc pierde conexiunea cu camera, atunci camera va fi ștearsă, iar ceilalți jucători vor fi
deconectați.

### Etapa de realizare

Așa cum am menționat anterior, aplicația este compusă din mai multe componente. În această secțiune voi prezenta
etapa de realizare a fiecărei componente.

#### Frontend

Aplicația de frontend a fost construită cu ideea de mobile-first în minte. Astfel, aplicația este optimizată
pentru dispozitivele mobile, însă poate fi folosită și pe dispozitivele desktop. Aplicația este compusă din
mai multe pagini web.

Pentru a realiza componenta de frontend am folosit framework-ul NEXT.JS. Acest framework este un framework
pentru dezvoltarea de aplicații web folosind React. NEXT.JS oferă o serie de funcționalități care îmbunătățesc
experiența de dezvoltare a aplicațiilor web. Una dintre funcționalitățile oferite de NEXT.JS este posibilitatea
de a folosi TypeScript pentru a scrie codul sursă al aplicației. TypeScript este un limbaj de programare care
extinde JavaScript-ul, oferind posibilitatea de a scrie cod mai sigur și mai ușor de întreținut. NEXT.JS oferă
posibilitatea de a folosi server-side rendering, ceea ce înseamnă că aplicația va fi randată pe server, iar
rezultatul va fi trimis către client. Această funcționalitate îmbunătățește timpul de încărcare al aplicației.
O altă funcționalitate oferită de NEXT.JS este posibilitatea de a folosi serverless functions. Aceste funcții
sunt funcții care rulează pe server, însă sunt apelate de pe client. Aceste funcții sunt utile pentru a realiza
anumite operații care nu pot fi realizate de pe client. NEXT.JS oferă posibilitatea de a folosi o serie de
biblioteci care îmbunătățesc experiența de dezvoltare.

Biblioteci folosite:

- React: este biblioteca open source în jurul căreia este construit framework-ul Next.js. Această bibliotecă este
  folosită pentru a realiza interfața cu utilizatorul. React a fost dezvoltat de Facebook și este folosit de o
  serie de companii mari precum Netflix, Instagram, Twitter, Uber, PayPal, etc. React este o bibliotecă care oferă
  posibilitatea de a crea interfețe cu utilizatorul dinamice.
  Avantajele oferite de React sunt:
    - Virtual DOM: React folosește un DOM virtual pentru a realiza modificările necesare în DOM-ul real. Acest
      lucru îmbunătățește performanța aplicației.
    - JSX: React oferă posibilitatea de a folosi JSX pentru a scrie codul sursă al aplicației. JSX este un meta
      limbaj care extinde JavaScript (explicit TSX extins de TypeScript). JSX oferă posibilitatea de a scrie cod
      HTML în fișiere JavaScript, oferind o experiență de dezvoltare mai bună și mai rapidă.
    - Componente reutilizabile: React oferă posibilitatea de a crea componente reutilizabile. Aceste componente
      sunt foarte ușor de întreținut, modificat, extins, stilizat și refolosit.

- TypeScript: este un limbaj de programare open source dezvoltat de Microsoft. Acest limbaj extinde JavaScript-ul,
  oferind posibilitatea de a scrie cod mai sigur și mai ușor de întreținut. TypeScript este un limbaj de programare
  orientat pe obiecte, care oferă posibilitatea de a folosi clase, interfețe, tipuri, etc. TypeScript este un limbaj
  de programare care oferă posibilitatea de a folosi tipuri. Acest lucru îmbunătățește experiența de dezvoltare,
  oferind posibilitatea de a detecta erori la build-time, în loc de run-time (una dintre problemele JavaScriptului).

- Material UI: este o bibliotecă care oferă o serie de componente React care respectă design-ul Google Material.
  Această bibliotecă este folosită pentru a realiza interfața cu utilizatorul. Material UI oferă posibilitatea de
  a crea interfețe cu utilizatorul responsive, care se adaptează la dimensiunea ecranului. Majoritatea componentelor
  oferite de Material UI sunt foarte ușor de folosit și de personalizat. Această bibliotecă este folosită de o
  serie de companii mari precum Uber, Amazon, Netflix, etc. Material UI oferă posibilitatea de a folosi o serie
  de teme predefinite, care pot fi personalizate. Avantajul de a folosi această bibliotecă este faptul că interfața
  cu utilizatorul va respecta design-ul Google Material, ceea ce va face ca aplicația să fie familiară pentru
  utilizatori.

- Material Icons: este o bibliotecă care oferă o serie de iconițe care respectă design-ul Google Material. Această
  bibliotecă este folosită pentru a afișa iconițe în interfața cu utilizatorul și oferă posibilitatea de a folosi
  o serie de iconițe predefinite, care pot fi personalizate. Avantajul de a folosi această bibliotecă este faptul
  că iconițele vor respecta design-ul Google Material și se integrează foarte bine cu componentele oferite de
  Material UI.

- MomentJS: este o bibliotecă care oferă o serie de funcționalități pentru a lucra cu date și ore. MomentJS oferă
  posibilitatea de a lucra cu date și ore într-un mod foarte ușor și intuitiv.

- React Hook Form: este o bibliotecă care oferă o serie de funcționalități pentru a manipula, valida și trimite
  formulare. React Hook Form oferă posibilitatea de a valida formularele folosind o serie de reguli predefinite
  sau reguli personalizate.

- React Query: este o bibliotecă care oferă o serie de funcționalități pentru a realiza apeluri către API-uri.
  React Query oferă posibilitatea de a păstra datele în cache, de a invalida cache-ul, de a refolosi datele din
  cache, de a realiza apeluri către API-uri, de a gestiona starea apelurilor către API-uri, etc. Această bibliotecă
  ofera o serie de hooks care pot fi folosite pentru a realiza apeluri către API-uri și gestionează în mod automat
  multe funcționalități.

- Tailwind CSS: este o bibliotecă care oferă o serie de clase CSS care pot fi folosite pentru a stiliza interfața
  cu utilizatorul. Această bibliotecă oferă posibilitatea de a crea interfețe cu utilizatorul mobile-first responsive,
  care se adaptează la dimensiunea ecranului. Folosind Tailwind CSS nu mai este nevoie de a crea fișiere CSS, deoarece
  se stilizează componentele React stilizate. Pentru a fi mai ușor de folosit, am accesat un cheatsheet care oferă
  posibilitatea de a căuta clasele CSS după nume.

Aplicația de frontend expune mai multe pagini compuse din mai multe componente:

- /
    - reprezintă pagina de start a aplicației
- /admin/
    - permite administratorului să facă operațiuni de tip CRUD (Create, Read, Update, Delete) pe toate categoriile
      și personajele din platformă
    - este protejată de autentificare
- /admin/login
    - permite administratorului să se autentifice în platformă
- /lobby/{lobbyId}
    - reprezintă pagina unei camere de joc în care se află toți jucătorii
- /user/create
    - permite utilizatorului să înceapă o sesiune de joc nouă
    - prezintă lista de categorii din care utilizatorul poate alege
    - îl pune pe utilizator să aleagă un nume de utilizator
- /user/join/{lobbyId}
    - permite utilizatorului să se alăture unei sesiuni de joc existente
    - îl pune pe utilizator să aleagă un nume de utilizator
    - acesta va fi linkul pe care îl primește un utilizator care vrea să se conecteze la o sesiune de joc existentă

Fiind un joc de tip multiplayer, aplicația de frontend ar trebui să folosească WebSocket-uri pentru a comunica cu
server-ul, însă din motive de timp, am folosit doar HTTP pentru a comunica cu server-ul și am folosit React Query
pentru a gestiona starea apelurilor către API-uri, repetând apelurile către API-uri în mod automat pentru a obține
starea camerei de joc.

#### Backend

Backend-ul este scris în limbajul de programare C# folosind framework-ul ASP.NET 7. Acesta este un framework
open-source dezvoltat de Microsoft, care oferă posibilitatea de a crea aplicații web și API-uri.

Pentru acest proiect am creat un API REST cu mai multe controller-e care expun mai multe endpoint-uri.
Controller-ele sunt clase care extind clasa `ControllerBase` și sunt marcate cu atributul `ApiController`.
Endpoint-urile sunt metode care sunt marcate cu atributul `HttpGet`, `HttpPost`, `HttpPut` sau `HttpDelete`.
Controller-ele și endpoint-urile sunt mapate în mod implicit, în funcție de numele controller-ului și de numele
metodei. Endpoint-urile sunt mapate în funcție de numele metodei și de tipul de request (GET, POST, PUT sau DELETE).
De exemplu, dacă avem un controller numit `LobbyController` și o metodă `GetLobby` marcată cu atributul `HttpGet`,
endpoint-ul va fi mapat la `/api/lobby/{lobbyId}` și va fi accesibil doar prin request-uri de tip GET.

Controller-ele prezente în aplicație sunt:

- `AdminController`: expune endpoint-uri pentru a manipula categoriile și personajele din platformă
- `LobbyController`: expune endpoint-uri pentru a manipula sesiunile de joc
- `AuthController`: expune endpoint-uri pentru a manipula autentificarea utilizatorilor

Bibliotecile folosite pentru a crea aplicatia de backend sunt:

- Microsoft.AspNetCore.Authentication.JwtBearer
- Microsoft.AspNetCore.OpenApi
- Swashbuckle.AspNetCore
- Microsoft.EntityFrameworkCore
- Pomelo.EntityFrameworkCore.MySql
- BCrypt.Net-Next

Autentificarea administratorului este realizată folosind JWT (JSON Web Token). Acesta este un standard
care definește un mod compact și autentic de transmitere a informațiilor între părți ca un obiect JSON.
Acest token este semnat digital folosind un algoritm de criptare din biblioteca
Microsoft.AspNetCore.Authentication.JwtBearer. Acest token este trimis de la client la server în header-ul
request-ului. Server-ul verifică validitatea token-ului și dacă acesta este valid, permite accesul la endpoint-ul
respectiv.

Pentru a documenta API-ul am folosit biblioteca Swashbuckle.AspNetCore, care oferă posibilitatea de a crea o pagină
web care prezintă toate endpoint-urile expuse de API. Această pagină web este accesibilă la adresa
`/swagger/index.html`.

Pentru a stoca parolele utilizatorilor am folosit biblioteca BCrypt.Net-Next. Aceasta oferă posibilitatea de a
face hash parolelor folosind algoritmul BCrypt. Acest algoritm este un algoritm de hashing lent, care este
rezistent la atacuri brute-force.

Atunci cand se crează o sesiune de joc nouă, se creează un lobby nou. Acest lobby este un obiect care conține
informații despre sesiunea de joc, despre jucătorii care se află în sesiunea de joc și despre starea sesiunii
de joc. Acest lobby este stocat în baza de date și este actualizat la fiecare acțiune a jucătorilor.

#### Baza de date

Baza de date este o bază de date relațională, care este compusă din mai multe tabele. Această bază de date este
folosită pentru a stoca datele despre categorii, personaje, sesiuni de joc. Baza de date este creată folosind
MySQL, care este un sistem de gestiune a bazelor de date relaționale open-source.

Pentru a realiza conexiunea la baza de date am folosit Entity Framework Core, care este un ORM (Object Relational
Mapper) open-source dezvoltat de Microsoft, care oferă posibilitatea de a crea aplicații care folosesc baze de date
relaționale. Entity Framework Core oferă posibilitatea de a crea baze de date, de a crea scheme de baze de date,
de a aplica migrări ale tabelelor, de a crea interogări, de a insera, actualiza și șterge date etc., toate acestea
folosind obiecte și metode funcționale din biblioteca LINQ (Language Integrated Query).

Pentru a crea baza de date am folosit Code First Migration, care este un mod de a crea baze de date folosind
Entity Framework Core. Acest mod presupune crearea unor clase care reprezintă tabelele din baza de date și a relațiilor
dintre tabele. După ce au fost create aceste clase, se poate crea baza de date folosind migrări. Migrările sunt niște
clase care conțin instrucțiuni SQL care vor fi executate pe baza de date.
Aceste instrucțiuni SQL sunt generate automat de Entity Framework Core în funcție de clasele care reprezintă
tabelele. După ce au fost create migrările, se poate aplica migrarea pe baza de date
folosind comanda `dotnet ef migrations add {migrationName}`. Această comandă va crea o clasă care extinde clasa
`Migration` și care conține instrucțiunile SQL care vor fi executate pe baza de date. După ce a fost creată
migrarea, se poate aplica migrarea pe baza de date folosind comanda `dotnet ef database update`.

Pentru a realiza conexiunea la baza de date am folosit un Connection String care este definit în fișierul
`appsettings.json`. Acest fișier conține o serie de perechi cheie-valoare care pot fi folosite în aplicație.

#### Infrastructură

Aplicația este compusă din mai multe microservicii care sunt rulate în containere Docker. Aceste microservicii
sunt:

- `backend`: este microserviciul care conține backend-ul aplicației
- `frontend`: este microserviciul care conține frontend-ul aplicației
- `database`: este microserviciul care conține baza de date
- `portainer`: este microserviciul care conține Portainer, care este o interfață grafică pentru Docker
- `cloudflare-tunnel`: este microserviciul care conține Cloudflare Tunnel, care este un tool care permite
  expunerea unui serviciu care rulează într-un container Docker pe internet

Pentru a rula aceste microservicii am folosit Docker Compose, care este un tool care permite rularea mai multor
containere Docker în același timp. Acest tool permite definirea unui fișier `docker-compose.yml` care conține
configurația pentru toate containerele care vor fi rulate. Acest fișier conține o serie de perechi cheie-valoare
care definesc fiecare container. Pentru a rula aceste containere se folosește comanda `docker-compose up`.

Din motive de securitate, microserviciul care conține baza de date nu este expus public pe internet. Acesta este
expus doar în rețeaua Docker, iar celelalte microservicii pot comunica cu acesta doar dacă sunt în aceeași rețea
Docker.

Pentru a expune microserviciile de frontend și backend, în mod normal aș fi folosit un reverse proxy, cum ar fi
Nginx. Acesta ar fi expus pe internet și ar fi redirecționat traficul către microserviciile de frontend și backend.
Serverul pe care sunt rulate microserviciile este un server personal, care nu are o adresă IP statică. Din acest
motiv, nu am putut folosi un reverse proxy, deoarece nu aș fi putut configura DNS-ul pentru a redirecționa traficul
către server. De asemenea deschidea porturilor 80(http) și 443(https) pe server nu este o opțiune, deoarece
reprezintă o vulnerabilitate de securitate. Din aceste motive am folosit un Cloudflare tunnel care permite
redirecționarea traficului către server folosind un client care rulează local. Acest client se conectează la
server folosind un token care este generat de cloudflare. De asemenea, acest client permite și criptarea
traficului folosind SSL. Acest client este rulat într-un container Docker care este rulat pe server.

### Mod de utilizare

Pentru a utiliza aplicația, trebuie să se acceseze adresa https://who-am-i.mihaianghelin.ro.
Va crea o noua cameră de joc, își va alege un nume de utilizator și categoriile de joc.

Cel ce a creat camera este și gazda jocului. El are acces la diverse comenzi care îi permit să atribuie personaje,
să invite alți jucători, să îi scoată pe alți jucători din cameră.
Gazda va apăsa pe butonul "COPY LOBBY LINK" pentru a copia link-ul de invitație în clipboard. Acest link poate fi
trimis altor jucători pentru a se alătura camerei.

Când toata lumea a intrat în cameră, gazda va apăsa pe butonul "GET CHARACTERS" pentru a genera personajele.
Dupa aceea se va începe jocul, iar fiecare jucator va trebui sa pună pe rând câte o întrebare la care se raspunde cu "
DA" sau "NU", de către ceilalți jucători. Dacă un jucător ghicește personajul, gazda va apăsa pe butonul de generare a
unui nou personaj.

Daca o persoană dorește să iasă din cameră, va apăsa pe butonul "EXIT LOBBY" sau va fi dat afară de gazda camerei.

În timp ce jocul este în desfășurare, fiecare jucător va putea vedea numele celorlalți jucători și vor avea acces la
o zonă de notițe în care pot scrie diverse informații pe care le-au aflat despre personaj. Pentru a acesa această
zonă de notițe, jucătorul va apăsa pe butonul alb din stânga jos al ecranului.

### Concluzii

Ideea de la care a pornit acest proiect a fost aceea de a crea o aplicație care să permită jucarea jocului "Who Am I?"
într-un mod ușor și rapid de oriunde. Înainte de a începe acest proiect, am căutat pe internet o aplicație care să
permită jucarea acestui joc, însă nu am găsit nimic care să îmi satisfacă nevoile. De aceea am decis să îmi creez
propria aplicație. În concluzie, acest proiect își atinge scopul, deoarece acum am control complet asupra aplicației
și pot adăuga funcționalități noi în viitor.

Din punct de vedere al performanței, aplicația este destul de rapidă, însă există încă loc de îmbunătățire. De
exemplu înlocuirea protocolului HTTP cu protocolul WebSocket ar putea îmbunătăți performanța aplicației, deoarece
ar reduce numărul de request-uri făcute de client către server.

### Bibliografie

[1] Tailwind Components. Tailwind CSS Cheatsheet. URL: https://tailwindcomponents.com/cheatsheet/.

[2] Open Source Comunity. MomentJS. URL: https://momentjs.com/.

[3] Docker. Docker Docs. URL: https://docs.docker.com/.

[4] Interfrog Produktion GmbH. https://play-whoami.com/. URL: https://play-whoami.com/.

[5] Microsoft. ASP.NET. URL: https://dotnet.microsoft.com/en-us/apps/aspnet.

[6] Portainer. Portainer. URL: https://www.portainer.io.

[7] Material UI SAS. Material Icons. URL: https://mui.com/material-ui/material-icons/.

[8] Material UI SAS. Material UI. URL: https://mui.com/material-ui/.

[9] Material UI SAS. React Hook Form. URL: https://www.react-hook-form.com/.

[10] Meta Open Source. React. URL: https://react.dev/.

[11] Tailwindlabs. Tailwind CSS. URL: https://tailwindcss.com/.

[12] Vercel. Next.js. URL: https://nextjs.org/.