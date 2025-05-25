# CloudComputing-Project
Proiect master Cloud Computing 2025

#  IT Talent Board – Aplicație Cloud pentru Gestiunea Candidatilor

##  INTRODUCERE

Această aplicație a fost dezvoltată ca parte a proiectului de Cloud Computing și are ca scop simularea unui portal de recrutare pentru domeniul IT, folosind servicii moderne cloud și funcționalități web actuale.

Aplicația este construită cu Next.js și stochează datele în MongoDB Atlas – un serviciu cloud NoSQL. Este împărțită în două secțiuni principale:

---

###  Secțiunea 1 – Gestiunea candidaților IT (modul CRUD)

Aceasta este zona principală a aplicației, unde utilizatorii pot:
- adăuga noi candidați (nume, rol, skill-uri, rating)
- edita informațiile existente
- șterge candidați
- sorta sau filtra lista (după nume, skill sau rating)

Datele sunt salvate în baza de date MongoDB Atlas și pot fi vizualizate prin carduri responsive și moderne. Fiecare candidat are un profil complet.

---

###  Secțiunea 2 – Profil detaliat per candidat

Fiecare utilizator din listă poate fi accesat individual printr-o pagină dedicată (`/records/[id]`), unde pot fi vizualizate:
- rolul, competențele, ratingul
- o scurtă descriere profesională
- (opțional) linkuri externe (GitHub, LinkedIn)

Această pagină simulează profilul real al unui candidat, util în procesul de selecție și recrutare.

---

##  SERVICII CLOUD UTILIZATE

- **MongoDB Atlas** – pentru stocarea candidaților în cloud
- **API REST personalizat** – creat cu Next.js pentru operații CRUD (`/api/records`)
- (Opțional) – Integrare viitoare cu API-uri externe sau autentificare

---

## FUNCȚIONALITĂȚI IMPLEMENTATE

- Afișare candidați în format card UI
- Căutare live după nume sau rol
- Filtrare după skill (React, Python etc.)
- Sortare după rating
- Formulare de creare/editare complet funcționale
- Pagini individuale pentru fiecare candidat

---

##  TEHNOLOGII FOLOSITE

- **Next.js** – framework React
- **MongoDB Atlas** – NoSQL cloud database
- **Tailwind CSS** – pentru stilizare
- **REST API** – pentru manipularea datelor
- **React Hooks** – gestionare state (useState, useEffect)

---

## CE FACE APLICAȚIA 

**Pagina principală** – Afișează toți candidații, permite interacțiuni CRUD, căutare și sortare rapidă.

**Pagina de creare** – Formular pentru introducerea rapidă a unui nou candidat, cu validări și design curat.

**Profilul detaliat** – Pagina de prezentare individuală a unui candidat, ideală pentru review/interviu.

---

##  CAPTURI DE ECRAN
![image](https://github.com/user-attachments/assets/4ac3e959-c6ba-49f4-b744-67e0c6e49333)
![image](https://github.com/user-attachments/assets/dec70922-b9dc-4a43-8627-89e534b83570)
![image](https://github.com/user-attachments/assets/ad6f3501-ad9f-4c22-9714-fb2f24b1886b)


##  CONCLUZIE

Acest proiect a demonstrat utilizarea serviciilor cloud și a arhitecturii moderne pentru o aplicație reală de gestiune și recrutare. Este ușor de extins pentru funcționalități viitoare precum autentificare, export PDF sau integrare cu API-uri externe (LinkedIn, GitHub etc).


