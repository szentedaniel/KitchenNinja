import { updateDarabok, darabokalap } from './darab.js'
import { updateSonkak, szendvicshez, resetPalya, eger,sonkaEso, hozzavalok ,updateKeseles} from './sonka.js'
import { rendeles, rendelesKesz } from './rendeles.js'
import {style,styleuj} from './style.js'
import {pazaroltpont, initPenz, palyaellenoriz, kezdopenz,penzupdate} from "./pontok.js"
import {torles, cetlire,initszovegek} from "./rendel.js"
let url = window.location.href;
let params = (new URL(url)).searchParams;
let egere=params.get('eger')
console.log(egere);

let app=new PIXI.Application(
    {
        backgroundColor: 0xAAAAAA
    }
);
app.renderer.resize(window.innerWidth-400, window.innerHeight-100);
document.body.appendChild(app.view);
app.stage.interactive=true;
//app.ticker.maxFPS=30;

//const defaultIcon = "url('images/knife2.ico'), auto";
//app.renderer.plugins.interaction.cursorStyles.default = defaultIcon;


//Handtrack coords
let handX = 0;
let handY = 0;
//camera model for handtrack
const video = document.querySelector('#video');
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
let model = await handTrack.load();



let background = new PIXI.Sprite.from("images/background.jpeg");
background.width=app.renderer.width;
background.height=app.renderer.height;
app.stage.addChild(background);
initPenz();

let app2= new PIXI.Application({backgroundColor: 0xAAAAAA});
app2.renderer.resize(window.innerWidth-app.renderer.width-90, window.innerHeight-100);
document.body.appendChild(app2.view);
app2.stage.interactive=true;
app2.stage.sortDirty = true;
app2.stage.sortableChildren = true; 
app2.ticker.maxFPS=1;

let szint=1;
initszovegek();
let sonkak_osszes=[];
let darabokalap_osszes=[];
let cetlisprite;
let pointer;
let pointd=false;
app.view.setAttribute("id", 'canvas');
document.addEventListener('pointerdown', function() {pointd=true;});
document.addEventListener('pointerup', function() {pointd=false;});
document.getElementById("display").innerHTML=(
    '<div><img src="images/egesz/csirke.png" style="height: 5vh;" alt="" srcset="">x'+szendvicshez[0]+'  \t'+
    '<img src="images/egesz/hagyma.png" style="height: 5vh;" alt="" srcset="">x'+szendvicshez[1]+'  \t'+
    '<img src="images/egesz/paprika.png" style="height: 5vh;" alt="" srcset="">x'+szendvicshez[2]+'  \t'+
    '<img src="images/egesz/paradicsom.png" style="height: 5vh;" alt="" srcset="">x'+szendvicshez[3]+'  \t'+
    '<img src="images/egesz/parizsi.png" style="height: 5vh;" alt="" srcset="">x'+szendvicshez[4]+'  \t'+
    '<img src="images/egesz/sajt.png" style="height: 5vh;" alt="" srcset="">x'+szendvicshez[5]+'  \t'+
    '<img src="images/egesz/salata.png" style="height: 5vh;" alt="" srcset="">x'+szendvicshez[6]+'  \t'+
    '<img src="images/egesz/sonka.png" style="height: 5vh;" alt="" srcset="">x'+szendvicshez[7]+'  \t'+
    '<img src="images/egesz/uborka.png" style="height: 5vh;" alt="" srcset="">x'+szendvicshez[8]+'</div>\t');








/*
    let counter=new PIXI.Text("csirke:\t"+szendvicshez[0]+
    " hagyma:\t"+szendvicshez[1]+
    " paprika:\t"+szendvicshez[2]+
    " paradicsom:\t"+szendvicshez[3]+
    " párizsi:\t"+szendvicshez[4]+
    " sajt:\t"+szendvicshez[5]+
    " saláta:\t"+szendvicshez[6]+
    " sonka:\t"+szendvicshez[7]+
    " uborka:\t"+szendvicshez[8],
    {
        fontFamily : 'Arial',
        fontSize: 24,
        fill : 0xff1010,
        align : 'center'
    },
    app.view)
    */

const loader=PIXI.Loader.shared;
// loader.add("sonka_spritesheet","spritesheets/sonka2.json").load(setup);

window.onresize = function(){
    app.renderer.resize(window.innerWidth-400, window.innerHeight-100);
    app2.renderer.resize(window.innerWidth-app.renderer.width-90, window.innerHeight-100);
    background.width=app.renderer.width;
    background.height=app.renderer.height;
    torles();
    cetlire();
}

const Sikerszoveg = new PIXI.Text('Sikeresen zártad az első szintet',styleuj);
Sikerszoveg.x = (app.renderer.width-Sikerszoveg.width)/2;
Sikerszoveg.y = app.renderer.height/4;

const Sikertelenszoveg = new PIXI.Text('Nem teljesítetted a célt. De minden szint egy új lehetőség! :)',styleuj);
Sikertelenszoveg.x = (app.renderer.width-Sikertelenszoveg.width)/2;
Sikertelenszoveg.y = app.renderer.height/4-20;

const playText = new PIXI.Text('Következő nap',style);
    playText.x = (app.renderer.width-playText.width)/2;
    playText.y = app.renderer.height/3;
    //bottom.addChild(playText);
    
    playText.interactive = true;
    playText.buttonMode = true;
    playText.addListener('pointerdown', () => {
        kovetkezoPalya();
    });

    const ReText = new PIXI.Text('Újra',style);
    ReText.x = (app.renderer.width-playText.width)/2;
    ReText.y = app.renderer.height/2;
    //bottom.addChild(playText);
    
    ReText.interactive = true;
    ReText.buttonMode = true;
    ReText.addListener('pointerdown', () => {
        ujra();
    });



function kovetkezoPalya(){
    szint++;
    app.stage.removeChild(Sikerszoveg);
    app.stage.removeChild(playText);
    app.stage.removeChild(ReText);
    rendeles(szint);
    resetPalya();
    app.ticker.start();
}

function ujra(){
    app.stage.removeChild(Sikerszoveg);
    app.stage.removeChild(Sikertelenszoveg);
    app.stage.removeChild(playText);
    app.stage.removeChild(ReText);
    rendeles(szint);
    resetPalya();
    kezdopenz();
    penzupdate();

    app.ticker.start();
}

function palyaKesz(){
    app.ticker.stop();
    let maradek=0; //hány hozzávaló maradt meg
    for(let i=0; i<szendvicshez.length; i++){
        maradek+=szendvicshez[i];
    }    
        pazaroltpont(maradek);
        let tovabb = palyaellenoriz();
        if(tovabb)
        {
            app.stage.addChild(Sikerszoveg);
            app.stage.addChild(playText);
            app.stage.addChild(ReText);
            
        }else
        {
            app.stage.addChild(Sikertelenszoveg);           
            app.stage.addChild(ReText);
            
        }
        
    
}



if(egere==0)
{
    function setup(){


        app.ticker.add(updateSonkak);
        app.ticker.add(updateDarabok);
        app.ticker.add(rendelesKesz);  
        
            app2.ticker.add(runDetection);
              
        let idle=setInterval(sonkaEso, 700); //700 milisec-enként feldob valamit
    
        //app.ticker.add(UpdateTrack);
        rendeles(szint);
        
    }
    navigator.getUserMedia_ = (navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia);
    
    const modelParams = {
        flipHorizontal: true, // flip e.g for video 
    
        //imageScaleFactor: 0.7, // reduce input image size for (maybe) gains in speed.
        maxNumBoxes: 1, // maximum number of boxes to detect
        iouThreshold: 0.5, // ioU threshold for non-max suppression
        scoreThreshold: 0.8, // confidence threshold for predictions.
    }
    
    handTrack.load(modelParams).then(newModel => {
      model = newModel;
    });
    
    const runDetection = async () => {
        await model.detect(video).then(predictions => {
            if (predictions.length !== 0) {
                let hand1 = predictions[0].bbox;
                handX = hand1[0];
                handY = hand1[1];
                updateknife(handX,handY);
                
            }
        });
    }
    function updateknife(x,y)
    {
        pointer.x=x*3;
        pointer.y=y*2;
        updateKeseles(pointer.x, pointer.y);
    }
    
    
    
    handTrack.startVideo(video).then((status) => {
        if (status) {
            //videoOn = false;
    
            hozzavalok.forEach(element => {
                sonkak_osszes.push(PIXI.Sprite.from(element))
            });
    
            darabokalap.forEach(element => {
                darabokalap_osszes.push(PIXI.Sprite.from(element))
            });
            
            pointer=PIXI.Sprite.from("images/knife.png");
            pointer.scale.set(0.015,0.015);
            pointer.x=app.renderer.width/2;
            pointer.y=app.renderer.height/2;
            app.stage.addChild(pointer);
    
            loader.load(setup);
            
            console.log(status);
            
        } else {
            console.log("Please enable video")
        }
    });
}else{
    function setup(){


        app.ticker.add(updateSonkak);
        app.ticker.add(updateDarabok);
        app.ticker.add(rendelesKesz);  
        
            
              
        let idle=setInterval(sonkaEso, 700); //700 milisec-enként feldob valamit
    
        //app.ticker.add(UpdateTrack);
        rendeles(szint);
        
    }
    hozzavalok.forEach(element => {
        sonkak_osszes.push(PIXI.Sprite.from(element))
    });

    darabokalap.forEach(element => {
        darabokalap_osszes.push(PIXI.Sprite.from(element))
    });
    loader.load(setup);
}






export { app, pointd, palyaKesz }
export {app2,szint}