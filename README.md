Proiect Cloud Computing – Crescent Library

Student:
DUMBRAVĂ Cristina-Georgiana
1132

CUPRINS

LINKURI	2
I.	INTRODUCERE	3
II.	DESCRIEREA PROBLEMEI	4
III.	DESCRIERE API	5
IV.	FLUX DE DATE	8
V.	CAPTURI APLICAȚIE	12
VI.	CONCLUZII	17
VII.	REFERINȚE	18

LINKURI

Link video prezentare proiect YouTube - https://youtu.be/NYNA6h1osLw

Link GitHub - https://github.com/cristinadumbrava/CloudComputing

Link Vercel - https://cloud-computing-lyart.vercel.app/ 

I.	INTRODUCERE

Cartea, sursa neprețuită de cunoștințe, reprezintă o referință de încredere de secole. Aceasta este esențială în viața unui individ, întrucât oferă lecții și informații despre fiecare întâmplare, sentiment, acțiune pe care cineva le poate trăi vreodată. Cartea ajută la stimularea minții și dezvoltarea ființei umane ca întreg, ghidând comportamentul și caracterul acesteia. Cu ajutorul cărților, oamenii pot evada din viața cotidiană, din realitatea plină de responsabilități și probleme.
Nevoia oamenilor de a păstra o evidență clară a cărților personale și interesul constant pentru noi lecturi au dus la apariția unor soluții digitale care simplifică atât organizarea, cât și descoperirea de titluri. În acest context, aplicațiile web devin un instrument util pentru pasionații de lectură care își doresc o bibliotecă digitală bine structurată și acces la informații actualizate despre cărți.
Acest proiect propune o aplicație web care reunește două componente principale: o zonă privată dedicată gestionării colecției personale de cărți și o secțiune publică de căutare, alimentată de API-ul Google Books. Utilizatorii pot vizualiza cărți, autorii acestora și descrieri detaliate, în timp ce funcțiile de adăugare, modificare și ștergere sunt protejate prin parolă, asigurând integritatea colecției personale. Această separare între explorare publică și administrare privată contribuie la o experiență echilibrată, sigură și eficientă.
Prin designul său intuitiv și funcționalitățile adaptate nevoilor utilizatorilor, aplicația oferă o experiență prietenoasă atât pentru cititorii ocazionali, cât și pentru colecționarii pasionați. Aceasta nu doar că facilitează accesul rapid la informații relevante despre cărți, dar și încurajează organizarea riguroasă a bibliotecii personale într-un mediu digital securizat. Astfel, proiectul contribuie la promovarea lecturii într-o formă modernă, adaptată erei tehnologice actuale.
II.	DESCRIEREA PROBLEMEI

Într-o eră digitală în care tehnologia influențează tot mai mult obiceiurile cotidiene, inclusiv modul în care citim și gestionăm informațiile, pasionații de lectură se confruntă cu două provocări principale: organizarea eficientă a colecției personale de cărți și găsirea rapidă a titlurilor relevante în baza unui interes specific. Mulți utilizatori își notează manual cărțile pe care le dețin sau folosesc metode nestructurate, ceea ce duce la confuzie, informații pierdute sau duplicarea volumelor.
În același timp, accesul la o bază de date vastă și actualizată despre autori, descrieri și titluri este limitat, fără o integrare cu surse externe de încredere. Mai mult decât atât, nu toate aplicațiile existente permit o separare clară între funcționalitățile de explorare și cele de administrare a datelor, ceea ce poate ridica probleme legate de securitatea și integritatea unei colecții personale.
Un alt aspect important este lipsa unei interfețe simple și intuitive care să permită utilizatorilor, chiar și celor fără cunoștințe tehnice avansate, să interacționeze ușor cu o bază de date de cărți. Aplicațiile existente sunt fie prea complexe, fie nu oferă flexibilitatea necesară pentru a adapta conținutul la nevoile utilizatorului. De asemenea, multe platforme nu permit personalizarea colecției sau restricționarea accesului în mod eficient, ceea ce poate compromite organizarea sau chiar siguranța datelor.
Utilizatorii care își doresc un spațiu digital complet controlat, adaptat propriului stil de organizare, resimt nevoia unor soluții web mai flexibile, care să îmbine siguranța datelor personale cu accesul rapid la informații externe verificate.



III.	DESCRIERE API

Aplicația este construită pe un sistem hibrid care combină servicii externe și infrastructură cloud pentru gestionarea și afișarea colecțiilor de cărți:
•	Google Books API este sursa principală pentru căutarea și afișarea unui volum vast de cărți disponibile public online. API-ul oferă acces la metadatele cărților (titlu, autori, descriere, imagini, link-uri către paginile oficiale Google Books). Se realizează cereri de tip GET prin endpoint-ul utilizat în funcția de mai jos:

![image](https://github.com/user-attachments/assets/c93d85f4-ae80-4b44-9e0c-d9358f145f7c)


Rezultatele sunt procesate în aplicație pentru a afișa doar cărțile care au copertă (thumbnail) pentru o experiență vizuală mai plăcută. Utilizatorii pot vedea informații de bază direct în interfață și pot accesa detalii suplimentare prin butonul Show More, care deschide o fereastră modală.
•	MongoDB Atlas, o bază de date NoSQL găzduită în cloud, este utilizată pentru stocarea colecției personale de cărți. Această colecție este accesibilă doar prin operații protejate, care permit crearea, modificarea și ștergerea cărților. Operațiile CRUD sunt realizate prin endpoint-uri REST, folosind metode HTTP standard:
	GET – pentru a prelua lista cărților personale;
	POST – pentru adăugarea unei noi cărți;
	PUT – pentru actualizarea unei cărți existente;
	DELETE – pentru ștergerea unei cărți.
![image](https://github.com/user-attachments/assets/c5635742-8bb0-4b0a-911d-301208974e0e)

•	Autentificarea pentru accesul la modificările colecției personale este implementată printr-un mecanism simplu cu parolă. În momentul în care utilizatorul dorește să adauge, modifice sau șteargă o carte, este necesară introducerea unei parole administrative valide. Acest sistem restricționează accesul la operațiile sensibile și asigură integritatea datelor personale.
•	Pentru frontend, aplicația este dezvoltată în Next.js și Tailwind CSS, și este găzduită și livrată în producție folosind Vercel, o platformă cloud specializată în deploy-ul rapid și scalabil al aplicațiilor React/Next.js. Fiecare modificare din codul sursă, stocat în GitHub, este sincronizată automat pentru a facilita procesul de Continuous Deployment (CD).
Prin combinarea acestor tehnologii și servicii cloud, aplicația oferă o experiență modernă, performantă și sigură pentru utilizatori, cu o separare clară între colecția personală (privată) și datele publice preluate din API-ul Google Books.


IV.	FLUX DE DATE

Pentru testarea și verificarea corectitudinii cererilor HTTP (request) și răspunsurilor primite (response) în cadrul aplicației, am folosit Postman. Această unealtă permite simularea interacțiunii cu API-ul nostru prin diferite metode HTTP (GET, POST, PUT, DELETE), oferind un mod eficient de a inspecta datele transmise și primite. Astfel, am putut valida funcționalitatea endpoint-urilor, precum și autentificarea și autorizarea operațiilor protejate.
Exemple de request / response
	Request GET pentru afișarea cărților din colecția personală 
![image](https://github.com/user-attachments/assets/f6351bfa-0da0-4cbe-a646-7c843ee30413)


	Request PUT pentru modificarea informațiilor unei cărți identificate prin id
![image](https://github.com/user-attachments/assets/63cccac9-1592-4e54-a4a1-61c773e23317)


	Request GET pentru a valida actualizarea din requestul PUT
![image](https://github.com/user-attachments/assets/702c6184-1dea-4153-b6e4-ed974ced1ed9)


	Request POST pentru adăugarea unei noi cărți în colecția personală
![image](https://github.com/user-attachments/assets/97374581-17bf-49bc-9534-d424be4a25ab)


	Request GET pentru afișarea cărții nou introduse
![image](https://github.com/user-attachments/assets/41182af7-2866-4301-b5df-f2b5369f1ce5)


	Request DELETE pentru a șterge o carte dorită în funcție de id-ul de identificare
![image](https://github.com/user-attachments/assets/4dbfbeb8-143d-4b70-8796-bee407d09a9f)


	Request GET pentru a verifica dacă mai există în colecția personală cartea ștearsă prin requestul DELETE
![image](https://github.com/user-attachments/assets/f1ae7fe7-dfb3-443d-a64c-85cab65c7191)


Metode HTTP
Aplicația respectă principiile arhitecturii REST și folosește următoarele metode HTTP pentru a permite interacțiunea cu resursele (cărțile din colecție):
	GET -> ENDPOINT: /api/records => Returnează lista completă a cărților din colecția personală.
	GET -> ENDPOINT: /api/records/:id => Returnează detalii despre o carte specifică, identificată prin ID.
	POST -> ENDPOINT: /api/records => Adaugă o carte nouă în colecția personală. Necesită parolă pentru acces.
	PUT -> ENDPOINT: /api/records/:id =>  Actualizează o carte existentă (titlu, autor, descriere). Necesită parolă pentru acces.
	DELETE -> ENDPOINT: /api/records/:id => Șterge o carte din colecție. Necesită parolă pentru acces.

Autentificare și autorizare servicii utilizate 
În cadrul acestei aplicații web, autentificarea și autorizarea au fost implementate într-un mod simplu și eficient, având ca scop protejarea operațiilor sensibile (creare, actualizare, ștergere) asupra colecției personale de cărți.
În locul unui sistem complex de autentificare cu conturi de utilizator, s-a optat pentru o metodă locală de protecție. Accesul la funcțiile de tip Add Book, Update și Delete este restricționat printr-un popup de autentificare cu parolă. Această fereastră apare atunci când utilizatorul dorește să efectueze modificări în colecția personală.
Parola este introdusă într-un input form, iar dacă valoarea acesteia corespunde unei parole predefinite (ex: "admin123"), atunci se acordă accesul temporar la funcționalitățile administrative. Parola nu este salvată în bază de date și nu este transmisă prin rețele externe — protecția este gestionată local în aplicație.
Astfel, se previn modificările neautorizate ale colecției personale și se asigură integritatea datelor, întrucât doar proprietarul aplicației are acces la modificări, putându-se observa o separare clară între funcțiile publice (căutare prin Google Books API, afișare colecție) și cele private (editarea datelor).


V.	CAPTURI APLICAȚIE

În figura este prezentată prima pagină cu care utilizatorul interacționează la accesarea aplicației. Oferă o interfață clară și intuitivă, facilitând navigarea către cele două funcționalități principale ale aplicației: vizualizarea colecției personale de cărți și căutarea de titluri online prin integrarea cu Google Books API. Design-ul este interactiv și adaptat pentru o experiență plăcută atât pe desktop, cât și pe dispozitive mobile.
![image](https://github.com/user-attachments/assets/9255f062-58d0-4a19-b2af-f6cb9fa57f32)

În momentul în care se accesează butonul de My library, utilizatorul este direcționat către secțiunea My Personal Book Collection, unde este afișată întreaga colecție personală de cărți. Această pagină utilizează date stocate într-o bază de date MongoDB și permite afișarea detaliilor despre fiecare carte, precum titlul, autorul și descrierea. Este zona dedicată gestionării colecției proprii, de unde pot fi efectuate operații de căutare după titlu, adăugare, modificare sau ștergere – acțiuni protejate prin autentificare cu parolă.
![image](https://github.com/user-attachments/assets/a9c69f0d-270a-435e-877e-86ffcf9c9047)

Atunci când utilizatorul dorește să adauge o nouă carte în colecția personală, este afișată o fereastră de tip popup care solicită mai întâi introducerea unei parole de administrator.
![image](https://github.com/user-attachments/assets/12a236ec-d26a-43ad-9b58-cb8e35e47a7b)


După validarea parolei, utilizatorul are acces la un formular unde poate introduce informațiile esențiale despre carte: titlu, autor, descriere. Această abordare oferă un nivel de securitate simplu, dar eficient, pentru o aplicație destinată gestionării personale a datelor.
![image](https://github.com/user-attachments/assets/7c041f05-d5f5-4b06-8e44-e993c79a04d8)


În cazul funcșionalităților de ștergere și modificare se procedează în același mod, prin introducerea parolei în fereastra de pop-up pentru autorizarea utilizatorului.
Aplicația oferă utilizatorului și posibilitatea de a explora o colecție extinsă de cărți prin intermediul unui buton dedicat: Online Library. Utilizatorul este redirecționat către o secțiune unde poate căuta cărți după numele autorului, folosind serviciul extern Google Books API. Rezultatele sunt returnate într-o ordine determinată de relevanță și popularitate, conform algoritmilor de clasificare utilizați de Google Books API.
![image](https://github.com/user-attachments/assets/ac5ae719-24d1-442f-9198-18d79e430f13)


Această integrare permite accesul rapid la o bază de date vastă și actualizată, oferind informații precum: titlul cărții, autorii, descrierea și imaginea coperții. Pentru o experiență cât mai completă, fiecare carte din rezultate are opțiunea „Show More”, care deschide un pop-up cu descrierea în variantă integrală, dar și un link către pagina oficială Google Books, unde pot fi consultate informații extinse sau se poate achiziționa cartea.
![image](https://github.com/user-attachments/assets/b6510cf9-0bbb-4dc1-afe4-b6fb7b38839f)

Butonul Show More permite utilizatorului să acceseze o descriere completă a cărții selectate, extinzând conținutul afișat inițial într-un mod organizat prin utilizarea funcționalității de scroll-bar, care permite parcurgerea facilă.
![image](https://github.com/user-attachments/assets/d5e3ae56-98ef-44f0-809d-b85d5b2a6cba)

Pentru a face aplicația accesibilă online, am realizat deploy-ul pe platforma Vercel, un serviciu cloud specializat în găzduirea aplicațiilor front-end și full-stack construite cu framework-uri moderne, precum Next.js. Procesul de publicare a fost simplificat prin integrarea directă cu GitHub, astfel încât orice modificare adusă codului sursă poate fi sincronizată și distribuită rapid. Vercel oferă și avantajul unui mediu de producție optimizat, cu timp de răspuns redus și infrastructură scalabilă, ceea ce face ca aplicația să fie rapidă și fiabilă pentru utilizatori.
![image](https://github.com/user-attachments/assets/8a7fe0a9-48b8-4154-b86e-9e867653f89b)


VI.	CONCLUZII

Proiectul propus reușește să ofere o soluție modernă și intuitivă pentru organizarea unei colecții personale de cărți, dar și pentru explorarea de noi titluri prin integrarea cu Google Books API. Separarea clară între funcționalitățile publice și cele private, protejate prin parolă, contribuie la un nivel sporit de securitate și control pentru utilizator. Utilizarea tehnologiilor moderne, precum Next.js, MongoDB și Vercel, a permis realizarea unei aplicații web scalabile, rapide și ușor de întreținut.
Aplicația adresează probleme reale legate de accesul la informații, organizarea colecțiilor și nevoia de personalizare, punând accent pe experiența utilizatorului. De asemenea, integrarea serviciilor externe și a metodelor de tip REST a permis o comunicare eficientă între interfață și baza de date, iar testarea funcționalităților prin Postman a demonstrat corectitudinea fluxului de date.
În plus, faptul că aplicația a fost publicată prin Vercel facilitează accesul rapid de pe orice dispozitiv, fără a necesita instalare locală sau configurări complexe. Astfel, utilizatorii pot consulta biblioteca personală sau pot căuta noi titluri online în orice moment, beneficiind de o experiență fluidă și constant actualizată. Acest aspect evidențiază nu doar utilitatea practică a aplicației, ci și adaptabilitatea sa la cerințele actuale ale mediului digital.
În ansamblu, proiectul reprezintă un pas important către digitalizarea și eficientizarea modului în care cititorii își gestionează lectura, oferind un echilibru între explorare și protecția datelor personale.


VII.	REFERINȚE

•	Timofte, C. (2025), “Cloud Computing”, Suport de curs, ASE București
•	Lungu, A. M., (2025), “Cloud Computing”, Suport de seminar, ASE București
•	https://vercel.com/
•	https://www.postman.com/
•	https://nextjs.org/docs
•	https://react.dev/learn
•	https://tailwindcss.com/docs/installation/using-vite
•	https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/
•	https://developers.google.com/books
