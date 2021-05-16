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
    - [1](#)
    - [2](#)
    - [3](#)
- [Használt technológiák](#-használt-technológiák-)

## ✏️ Leírás ✏️

Leírás ide

## 📄 Dokumentáció 📄

### Funkcionális követelmények:

- A játékos választhasson a kézzel és egérrel való irányítás között
- A Pc-n futó játékot lehessen egérrel és kézzel is irányítani, de ne egy időben
- Ha a játékos kézzel szerete játszani, addig ne induljon el a játék, amíg a kamera használatát nem engedélyezi
- A játékos számára legyen látható, hogy melyik alapanyagból hányat vágott el
- A játékos számára legyen látható, hogy milyen rendelések érkeztek be
- Az alapanyagok egérrel való irányításkor csak akkor vágódjanak el, ha a bal egérgomb le van nyomva és a pointer hozzáér az adott alapanyaghoz
- Az alapanyagok kézzel való irányításkor akkor vágódjanak el, ha hozzáérnek a pointerhez
- A pálya sikeres teljesítésének feltétele a maximális pontszám 70%-ának elérése
- Ha a játékos sikeresen teljesített egy szintet legyen lehetősége továbblépni a következő szintre vagy újrapróbálni az aktuális pályát
- Ha a játékosnak nem sikerül teljesítenie egy sintet, akkor újra kell próbálnia

### Nem funkcionális követelmények:

- Az alapanyagok 1 féleképpen eshessenek 2 darabra
- A játéknak legalább 5 pályája legyen
- A játék 1 percen belül töltsön be
- A rendelések a játékfelület jobb oldalán, cetliken legyenek láthatók
- A játékos egyidejűleg csak 4 rendelést lásson
- A rendelések száma és a bennűk szereplő alapanyagok mennyisége a szintnek megfelelően nőjön
- Az elvágott alapanyagok számontartása az alapanyag képével, mellette a darabszámmal történjen

### Use-case diagram:

<p align="center">
  <img src="#ide-kell-link" width="700">
</p>

## 💿 Használt technológiák 💿

|   Mire    |                                                                                Mit                                                                                 |                 Link                 |
| :--------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------: |
| Back-end  |  <a href="https://nodejs.org/en/"><img width=50px src="https://www.pinclipart.com/picdir/middle/102-1024697_related-wallpapers-node-js-logo-png-clipart.png"></a>   |  [Node.js](https://nodejs.org/en/)   |
|  Routing  |   <a href="https://expressjs.com/"><img width=100px src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"></a>    | [Express.js](https://expressjs.com/) |
| Front-end |    <a href="https://www.javascript.com/"><img width=50px src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png"></a>     |   [JavaScript](https://www.javascript.com/)   |
| Engine |    <a href="https://www.pixijs.com/"><img width=50px src="https://www.markhawkinsdesigns.com/images/blog/pixijs.jpg"></a>     |   [PixiJS](https://www.pixijs.com/)   |

