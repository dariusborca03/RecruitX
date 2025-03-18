# RecruitX

RecruitX website Project

Tutorial React: https://www.youtube.com/watch?v=hn80mWvP-9g&list=PLZPZq0r_RZOMQArzyI32mVndGBZ3D99XQ

Tutorial Github cum sa dati pull la main branch:

1. Va creati un folder unde plm vreti voi
2. Deschideti terminalul in folder si scrieti asta: git clone https://github.com/dariusborca03/RecruitX.git
3. Apoi asta: cd RecruitX
4. apoi asta: npm install 
5. apoi: npm start
6. apoi iti creezi branchu: git checkout -b numele-tau
7. ca sa verifici pe ce branch esti: git branch (iti apare cu *numele-tau)
8. git checkout main (ca sa intri pe main)
9. git pull origin main (ca sa dai pull de pe main)
10. git checkout numele-tau (ca sa intri pe branchu tau)
11. git push origin numele-tau (ca sa dai push pe branchu tau)

Bun acum cum sa va creati propiul branch ca sa nu futeti totul pe main si sa lucram mai bn:

1. Pentru a evita conflictele, fiecare coleg ar trebui să creeze un branch separat pentru fiecare feature nou:
   git checkout -b numele-tau (acolo bagi numele tau prostule)
2. Dupa ce ati lucrat si ati adaugat chestii noi in proiect trb sa da-ti push pe git:

   git add .
   
   git commit -m "Am adăugat feature X"
   
   git push origin numele-tau

Bun acum sa zicem ca eu am incarcat ceva pe GitHub si vrei sa dai pull la ce am eu in repository:

1. git checkout numele-branchului-meu (intri pe branch-ul meu)
2. git pull origin numele-branchului-meu (iei modificarile aduse de mn pe proiect)
3.
   git add .
  
   git commit -m "Modificări aduse feature-nou"
  
   git push origin numele-tau (SA NU DAI PUSH PE BRENCH-UL MEU PIZDA)

Fiecare coleg lucrează pe un branch propriu (ex: numele-tau).
Dacă vrei să iei ultimele modificări ale unui coleg, te duci pe branch-ul lor și rulezi git pull origin numele-de-la-cn-vrei-sa-dai-pull.
Dupa dai push pe branchu tau si gata.
