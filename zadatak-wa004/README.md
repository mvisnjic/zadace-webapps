Zadatak je napraviti malu Vue.js aplikaciju i pripadni express backend koja će prikazivati knjige GoT
tematike.

1. Aplikacija se treba sastojati od dva screen-a/page-a.
2. Prvi page mora prikazati listu od 10 knjiga. Za svaku knjigu prikazati naziv, prvog autora i ISBN.
3. Drugi page prikazuje detalje za odabranu knjigu, i to: sve autore, ISBN, broj stranica, izdavača,
zemlju podrijetla te broj likova (charactera) koji se u knjizi pojavljuju.
4. Pritisak na naziv knjige s prvog pagea treba voditi do detalja te specifične knjige na drugom
pageu (koristiti dinamičke rute!).
5. Treba postojati back button na drugom pageu koji vodi natrag na prvi i...
6. Ne mora izgledati naročito lijepo :)
7. Aplikaciju postaviti na svoj GitHub račun i predati na URL za zadaće (link je na http://ntankovic.u
nipu.hr/wa ) pod šifrom WA-BLIC-04 - predajte na način da GitHub repo ima dva poddirektorija - frontend i backend

Detalji:
1. Napraviti web resurs na backendu /knjige po uzoru na na: https://www.anapioficeandfire.co
m/api/books i knjige vratiti u JSON formatu, slobodno smijete knjige hard-kodirati na backend
u neku varijablu (ne moraju dolaziti iz baze - kao na predavanjima)
2. Napraviti drugi web resurs za dohvat detalja knjige koji će se pozivati sa frontenda na starnici s
detaljima.
3. Ne morate koristiti iste atribute kao na API s primjera, izmislite svoje.
4. Pazite kako ćete napraviti adrese ruta i koje HTTP metode ćete koristiti!