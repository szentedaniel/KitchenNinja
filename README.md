# 🔪 KitchenNinja 🔪

## 🍗 Telepítés 🍗

**`$ git clone https://github.com/szentedaniel/kitchen_ninja.git`**

**`$ cd kitchen_ninja`**

**`$ npm install`**

**`$ npm run dev`**

## 🖐 Demók 🖐

- [Demó](https://kitchen-ninja-debug.herokuapp.com/)
- [Demó (_backup_)](https://kitchen-ninja-backup.herokuapp.com/)

## 📚 Tartalomjegyzék 📚

- [Leírás](#-leírás-)
- [Dokumentáció](#-dokumentáció-)
  - [Funkcionális követelmények](#funkcionális-követelmények)
  - [Nem funkcionális követelmények](#nem-funkcionális-követelmények)
  - [Use-case diagram](#use-case-diagram)
  - [Use-case táblázatok](#)
    - [Irányítás kiválasztása](https://raw.githubusercontent.com/szentedaniel/kitchen_ninja/main/documentation/01_iranyitas_kivalasztasa.jpg)
    - [Játék indítása](https://raw.githubusercontent.com/szentedaniel/kitchen_ninja/main/documentation/02_jatek_inditasa.jpg)
    - [Alapanyagok elvágása](https://raw.githubusercontent.com/szentedaniel/kitchen_ninja/main/documentation/03_alapanyagok_elvagasa.jpg)
    - [Pálya teljesítése](https://raw.githubusercontent.com/szentedaniel/kitchen_ninja/main/documentation/04_palya_teljesitese.jpg)
    - [Következő pálya](https://raw.githubusercontent.com/szentedaniel/kitchen_ninja/main/documentation/05_kovetkezo_palya.jpg)
    - [Újraindítás](https://raw.githubusercontent.com/szentedaniel/kitchen_ninja/main/documentation/06_ujrainditas.jpg)
    - [Rendelés generálása](https://raw.githubusercontent.com/szentedaniel/kitchen_ninja/main/documentation/07_rendeles_generalasa.jpg)
    - [Nap kiértékelése](https://raw.githubusercontent.com/szentedaniel/kitchen_ninja/main/documentation/08_nap_kiertekelese.jpg)
- [Használt technológiák](#-használt-technológiák-)

## ✏️ Leírás ✏️

### Alapötlet

Az elgondolás és célkitűzés az volt, hogy papa's éttermi játékok és a fruit ninját ötvözzük, ezzel egy böngészős játékot létrehozva.
Ebben szendvicseket kell készíteni a bejövő rendelések függvényében úgy, hogy az alapanyagokat a fruit ninjaban megszokott módon vágjuk el.
A játék nehézségének növelése érdekében nem csak egérrel irányíthatjuk, hanem a kezünkkel is, amihez **szükséges** a **webkamera**.

### Játék működése

A legelején kiválasztható, hogy kézzel, kamerán keresztül vagy egérrel szeretnénk irányítani a játékot.
Ezt követően a játék betölt. 
A játék lényege, hogy a jobb oldalon feljövő rendeléseket teljesítsük, úgy, hogy csak a szükséges mennyiségű alapanyagokat vágjuk el. Amennyiben több alapanyagot vágtunk el a kelleténél, mivel sokat pazaroltunk ezért pénzlevonás jár. A egy nap(_szint_) akkor teljesíthető, ha legalább a kitűzött összeget elérjük. Amennyiben ez nem sikerült, újra próbálkozhatunk.


## 📄 Dokumentáció 📄

### Funkcionális követelmények:

- A játékot lehessen egérrel és kézzel is irányítani, de ne egyidejűleg
- A játékos választhasson a kézzel és egérrel való irányítás között
- Kézzel való irányítás esetén addig ne induljon el a játék, amíg a kamera használatát nem engedélyezi a játékos
- A játékos számára legyen látható, hogy melyik alapanyagból hányat vágott el
- A játékos számára legyen látható, hogy milyen rendelések érkeztek be
- Az alapanyagok egérrel való irányításkor csak akkor vágódjanak el, ha a bal egérgomb le van nyomva és a pointer hozzáér az adott alapanyaghoz
- Az alapanyagok kézzel való irányításkor akkor vágódjanak el, ha az adott alapanyag hozzáér a pointerhez
- A pálya sikeres teljesítésének feltétele a maximális pontszám 70%-ának elérése
- Ha a játékos sikeresen teljesített egy szintet legyen lehetősége továbblépni a következő szintre vagy újrapróbálni az aktuális pályát
- Ha a játékosnak nem sikerül teljesítenie egy szintet, akkor újra kell próbálnia

### Nem funkcionális követelmények:

- Az alapanyagok 1 féleképpen eshessenek 2 darabra
- A játéknak legalább 5 szintje legyen
- A játék 1 percen belül töltsön be
- A rendelések a játékfelület jobb oldalán, cetliken legyenek láthatók
- A játékos egyidejűleg csak 4 rendelést lásson
- A rendelések száma és a bennük szereplő alapanyagok mennyisége a szintnek megfelelően növekedjen
- Az elvágott alapanyagok számontartása az alapanyag képével, mellette a darabszámmal történjen

### Use-case diagram:

<p align="center">
  <img src="https://user-images.githubusercontent.com/79571030/118633280-98878c00-b7d1-11eb-819d-f685e0fec584.png" width="700">
</p>

## 💿 Használt technológiák 💿

|   Mire    |                                                                                Mit                                                                                 |                 Link                 |
| :--------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------: |
| Back-end  |  <a href="https://nodejs.org/en/"><img width=50px src="https://www.pinclipart.com/picdir/middle/102-1024697_related-wallpapers-node-js-logo-png-clipart.png"></a>   |  [Node.js](https://nodejs.org/en/)   |
|  Routing  |   <a href="https://expressjs.com/"><img width=100px src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"></a>    | [Express.js](https://expressjs.com/) |
| Front-end |    <a href="https://www.javascript.com/"><img width=50px src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png"></a>     |   [JavaScript](https://www.javascript.com/)   |
| Engine |    <a href="https://www.pixijs.com/"><img width=50px src="https://www.markhawkinsdesigns.com/images/blog/pixijs.jpg"></a>     |   [PixiJS](https://www.pixijs.com/)   |

