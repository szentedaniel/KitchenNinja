import { app, pointd } from './app.js'
import { darabEso } from './darab.js'
let url = window.location.href;
let params = (new URL(url)).searchParams;
let egere=params.get('eger')
let hozzavalok=[];
let szendvicshez=[0,0,0,0,0,0,0,0,0]; //ABC sorrendben az elvágott, és még fel nem használt hozzávalók

//alapanyagok feldobásához a változók
let sonkak=[];
let t=[];
let kezdoseb=[];
let g=0.1;



//összes hozzávaló képei
hozzavalok.push("images/egesz/csirke.png",
"images/egesz/hagyma.png",
"images/egesz/paprika.png",
"images/egesz/paradicsom.png",
"images/egesz/parizsi.png",
"images/egesz/sajt.png",
"images/egesz/salata.png",
"images/egesz/sonka.png",
"images/egesz/uborka.png");


 function sonkaEso(){

    let sonka=  createSonka()

    sonkak.push(sonka);
    t.push(0);
    kezdoseb.push(Math.floor(Math.random() * app.renderer.height/200)+app.renderer.height/80)
    //console.log(sonkak)
}

 let eger = true


//let idle=setTimeout(sonkaEso, 500); //500 milisec-enként feldob valamit

//létrehozza a feldobandó alapanyagot
 function createSonka(){
    let forras=hozzavalok[Math.floor(Math.random()*hozzavalok.length)] //random hozzávaló
    let sonka=PIXI.Sprite.from(forras);
    //console.log(sonka)
    sonka.name=forras.split('/')[2].split('.')[0]; //kiveszi a hozzávaló nevét az eléérési útóbl
    sonka.anchor.set(0.5,0.5); //középre rakja az anchor-t
    sonka.scale.set(0.3,0.3); //lekicsinyíti
    sonka.x=(app.renderer.width)*Math.random(); // a jobb 1/3-ot meghagyja más objektumoknak, egyébként random helyen dob fel alapanyagot
    sonka.y=app.renderer.height/*+sonka.height*/; //az egész alapanyag lenről jön, nem csak megjelenik alul a fele (anchor középen)    
    sonka.interactive=true;
    
    if(egere==1){
        sonka.on('pointermove', onButtonDown);
    }
    else{
        sonka.on('handevent', onButtonDown);
    }

    app.stage.addChild(sonka);
    return sonka;
}

//mozgatja a hozzávalókat (dobás+forgás)
function updateSonkak(){
    for(let i=0; i<sonkak.length; i++){
        sonkak[i].rotation+=0.05;

        if(kezdoseb[i]>0)
        {
            sonkak[i].y -= kezdoseb[i];
            kezdoseb[i] = kezdoseb[i] - (g*t[i]);
            t[i]+=0.05;
        }
        if(kezdoseb[i]<=0)
        {
            t[i]=1;
            sonkak[i].y -= kezdoseb[i];
            kezdoseb[i] = kezdoseb[i] - (g*t[i]);
            t[i]+=0.05; 
            if(sonkak[i].y == app.renderer.height)
            {
                kezdoseb[i]=5;
            }
        }
        //ha kiér a játékfelületről
        if(sonkak[i].y>=app.renderer.height/*+sonkak[i].height/2*/){
            sonkak[i].dead=true;
        }
        //console.log(sonkak[0].x);
    }
    //amelyikek kiértek a játéktérről, megszűnnek
    for(let i=0; i<sonkak.length; i++){
        if(sonkak[i].dead){
            app.stage.removeChild(sonkak[i]);
            sonkak.splice(i,1);
            t.splice(i,1);
            kezdoseb.splice(i,1);
        }
    }
}

//vágás
function onButtonDown(e)
{
    let x;
    let y;
    if(egere==1){
        x=e.data.global.x; //pointer x koordinátája
        y=e.data.global.y; //pointer y koordinátája
    }
    else{
        x=pointer.x;
        y=pointer.y;
    }
    //hozzávaló méretei
    let top=this.x-this.height/2;
    let bottom=this.x+this.height/2;
    let left=this.y-this.width/2;
    let right=this.y+this.width/2;
    if(pointd && this.y<app.renderer.height-50 && x>=top && x<=bottom && y>=left && y<=right){ //kattint, nem most jött fel a hozzávaló és hottáért valamelyik hozzávalóhoz
        let meret = sonkak.length;
        //meghatározza, hogy mit vágott el és annak a darabjait jeleníti meg
        switch(this.name){
            case("csirke"):
                darabEso(this.x,this.y,1);
                darabEso(this.x,this.y,0);
                szendvicshez[0]++;
                updateSzendvicshez();
                break;
            case("hagyma"):
                darabEso(this.x,this.y,3);
                darabEso(this.x,this.y,2);
                szendvicshez[1]++;
                updateSzendvicshez();
                break;  
            case("paprika"):
                darabEso(this.x,this.y,5);
                darabEso(this.x,this.y,4);
                szendvicshez[2]++;
                updateSzendvicshez();
                break;  
            case("paradicsom"):
                darabEso(this.x,this.y,7);
                darabEso(this.x,this.y,6);
                szendvicshez[3]++;
                updateSzendvicshez();
                break;  
            case("parizsi"):
                darabEso(this.x,this.y,8);
                darabEso(this.x,this.y,9);
                szendvicshez[4]++;
                updateSzendvicshez();
                break;  
            case("sajt"):
                darabEso(this.x,this.y,11);
                darabEso(this.x,this.y,10);
                szendvicshez[5]++;
                updateSzendvicshez();
                break;  
            case("salata"):
                darabEso(this.x,this.y,13);
                darabEso(this.x,this.y,12);
                szendvicshez[6]++;
                updateSzendvicshez();
                break; 
            case("sonka"):
                darabEso(this.x,this.y,14);
                darabEso(this.x,this.y,15);
                szendvicshez[7]++;
                updateSzendvicshez();
                break;
            case("uborka"):
                darabEso(this.x,this.y,16);
                darabEso(this.x,this.y,17);
                szendvicshez[8]++;
                updateSzendvicshez();
                break;  
        }
        //kiveszi az elvágott egész hozzávalót
            this.dead=true;
            app.stage.removeChild(this);           
            sonkak.splice(meret,1);
            t.splice(meret,1);
            kezdoseb.splice(meret,1);
    }
}
function updateKeseles(x,y)
{
    for (let i=0; i<sonkak.length; i++){
        let top=sonkak[i].x-sonkak[i].height/2;
        let bottom=sonkak[i].x+sonkak[i].height/2;
        let left=sonkak[i].y-sonkak[i].width/2;
        let right=sonkak[i].y+sonkak[i].width/2;
        if(sonkak[i].y<app.renderer.height-50 && x>=top && x<=bottom && y>=left && y<=right){ //kattint, nem most jött fel a hozzávaló és hozzáért valamelyik hozzávalóhoz
            let meret = sonkak.length;
            //meghatározza, hogy mit vágott el és annak a darabjait jeleníti meg
            switch(sonkak[i].name){
                case("csirke"):
                    darabEso(sonkak[i].x,sonkak[i].y,1);
                    darabEso(sonkak[i].x,sonkak[i].y,0);
                    szendvicshez[0]++;
                    updateSzendvicshez();
                    break;
                case("hagyma"):
                    darabEso(sonkak[i].x,sonkak[i].y,3);
                    darabEso(sonkak[i].x,sonkak[i].y,2);
                    szendvicshez[1]++;
                    updateSzendvicshez();
                    break;  
                case("paprika"):
                    darabEso(sonkak[i].x,sonkak[i].y,5);
                    darabEso(sonkak[i].x,sonkak[i].y,4);
                    szendvicshez[2]++;
                    updateSzendvicshez();
                    break;  
                case("paradicsom"):
                    darabEso(sonkak[i].x,sonkak[i].y,7);
                    darabEso(sonkak[i].x,sonkak[i].y,6);
                    szendvicshez[3]++;
                    updateSzendvicshez();
                    break;  
                case("parizsi"):
                    darabEso(sonkak[i].x,sonkak[i].y,8);
                    darabEso(sonkak[i].x,sonkak[i].y,9);
                    szendvicshez[4]++;
                    updateSzendvicshez();
                    break;  
                case("sajt"):
                    darabEso(sonkak[i].x,sonkak[i].y,11);
                    darabEso(sonkak[i].x,sonkak[i].y,10);
                    szendvicshez[5]++;
                    updateSzendvicshez();
                    break;  
                case("salata"):
                    darabEso(sonkak[i].x,sonkak[i].y,13);
                    darabEso(sonkak[i].x,sonkak[i].y,12);
                    szendvicshez[6]++;
                    updateSzendvicshez();
                    break; 
                case("sonka"):
                    darabEso(sonkak[i].x,sonkak[i].y,14);
                    darabEso(sonkak[i].x,sonkak[i].y,15);
                    szendvicshez[7]++;
                    updateSzendvicshez();
                    break;
                case("uborka"):
                    darabEso(sonkak[i].x,sonkak[i].y,16);
                    darabEso(sonkak[i].x,sonkak[i].y,17);
                    szendvicshez[8]++;
                    updateSzendvicshez();
                    break;  
            }
            //kiveszi az elvágott egész hozzávalót
                sonkak[i].dead=true;
                app.stage.removeChild(sonkak[i]);           
                sonkak.splice(meret,1);
                t.splice(meret,1);
                kezdoseb.splice(meret,1);
        }
}

}
//átírja a rendelkezásre álló elvágott hozzávalóket
function updateSzendvicshez(){
    
/*counter.updateText("csirke:\t"+szendvicshez[0]+
    " hagyma:\t"+szendvicshez[1]+
    " paprika:\t"+szendvicshez[2]+
    " paradicsom:\t"+szendvicshez[3]+
    " párizsi:\t"+szendvicshez[4]+
    " sajt:\t"+szendvicshez[5]+
    " saláta:\t"+szendvicshez[6]+
    " sonka:\t"+szendvicshez[7]+
    " uborka:\t"+szendvicshez[8]); 
*/
    document.getElementById("display").innerHTML=(
        '<div class="unselectable "><img src="images/egesz/csirke.png" style="height: 5vh;" alt="" srcset="">x'+szendvicshez[0]+'  \t'+
        '<img src="images/egesz/hagyma.png" style="height: 5vh;" alt="" srcset="">x'+szendvicshez[1]+'  \t'+
        '<img src="images/egesz/paprika.png" style="height: 5vh;" alt="" srcset="">x'+szendvicshez[2]+'  \t'+
        '<img src="images/egesz/paradicsom.png" style="height: 5vh;" alt="" srcset="">x'+szendvicshez[3]+'  \t'+
        '<img src="images/egesz/parizsi.png" style="height: 5vh;" alt="" srcset="">x'+szendvicshez[4]+'  \t'+
        '<img src="images/egesz/sajt.png" style="height: 5vh;" alt="" srcset="">x'+szendvicshez[5]+'  \t'+
        '<img src="images/egesz/salata.png" style="height: 5vh;" alt="" srcset="">x'+szendvicshez[6]+'  \t'+
        '<img src="images/egesz/sonka.png" style="height: 5vh;" alt="" srcset="">x'+szendvicshez[7]+'  \t'+
        '<img src="images/egesz/uborka.png" style="height: 5vh;" alt="" srcset="">x'+szendvicshez[8]+'</div>\t');
}

//leüríti a pályát
function resetPalya(){
    for (let i=0; i<app.stage.children.length; i++){
        app.stage.children[i].dead=true;
    }
    updateSonkak();
    szendvicshez=[0,0,0,0,0,0,0,0,0];
    updateSzendvicshez();
}

//levonja a peremétreben megkapott mennyiséget az adott hozzávalóból
function szendvicshezRendeles(idx, db){
    szendvicshez[idx]-=db;
    updateSzendvicshez();
}

export { updateSonkak, szendvicshez, hozzavalok, resetPalya, szendvicshezRendeles, eger, sonkaEso , updateKeseles}