1) Simulirati igru ”kamen, škare, papir”. Igrač igra protiv računala. 
Igrač bira jedno od ta tri pojma i dobija bod u svakom krugu ukoliko ima jači alat. 
Pravila su:
    • kamen pobjeđuje škare
    • škare pobjeđuju papir
    • papir pobjeđuje kamen


2) Napisati program koji provjerava da li je uneseni tekst palindrom. Uzeti u obzir samo slova, ignorirati sve ostale znakove.
  Npr:
    input: "A mene tu, ni minute nema"
    output: “Palindrom”
    input: "Trka automobila"
    output: “Nije palindrom”


3) Dan je niz brojeva N. Unutar niza brojevi se ne ponavljaju niti su sortirani. 
Napisati program koji izračuna za zadani broj B, koliko je najmanje brojeva potrebno koristiti iz danog niza N da bi se njihovim zbrajanjem dobio zadani broj B. 
Svaki od brojeva unutar niza N je moguće koristiti više puta. 
Nije potrebno ispisati izabranu kombinaciju brojeva, nego samo količinu korištenih brojeva. 
Uzima se u obzir ukoliko se neki broj koristi više puta. 
Ispisati -1 ukoliko nema rješenja za zadani broj B.

  Primjeri (služe da bi se bolje opisao problem):
  Primjer 1:
    input: N = [2, 5, 1, 15], B = 11
    output: 3
      Do broja 11 je moguće doći koristeći razne kombinacije iz danog niza N, ali najmanji
      broj korištenih brojeva potreban za zbrajanjem doći do broja 11 je 3 (5+5+1).
      Sve ostale kombinacije uključuju korištenje više od 3 broja iz niza, primjerice:
      2+2+5+2 = 11 (4 broja korištena)
      
  Primjer 2:
    input: N = [2, 5, 1, 4, 6], B = 5
    output: 1
      Rješenje je 1 jer je dovoljno samo jednom koristiti broj 5 iz niza N.
      
  Primjer 3:
    input: N = [2, 4, 5], B = 3
    output: -1
      Do broja 3 nije moguće doći zbrajanjem brojeva iz niza N
