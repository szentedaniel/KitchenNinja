import { rendelesek } from "./rendeles.js";
import {app, app2} from "./app.js"
import {rendstyle, felstyle} from "./style.js"
let cetlik = [];
let rendszoveg = [];
let szamozas = [];
//let cetliszov;
//let rendszov;
let ossz;
function initszovegek()
{
    ossz=rendelesek.length;
    for(let i = 0; i < 4;i++)
    {
        szamozas[i] = new PIXI.Text("Rendelés ",felstyle);
        rendszoveg[i]  = new PIXI.Text("Szoveg",rendstyle);
        cetlik[i]=PIXI.Sprite.from('images/cetli2.png');
    }
}

function cetlire()
{
    ossz=rendelesek.length;
    let mag = app2.renderer.height/ossz;
    for(let i = 0; i < 4;i++)
    {       
        cetlik[i].x = 0;  
        if(i==0)
        {
            cetlik[i].y = 0;
        }else{
            cetlik[i].y = 0+i*mag;
        }        
        cetlik[i].zIndex = 0;
        cetlik[i].scale.set(0.7, 0.7);
        
        szamozas[i].x = 25;
        szamozas[i].y = 35+i*mag;
        szamozas[i].zIndex = 1;
        rendszoveg[i].x = 25
        rendszoveg[i].y = 35+i*mag+20; 
        rendszoveg[i].zIndex = 1;

        app2.stage.addChild(cetlik[i]);
        app2.stage.addChild(szamozas[i]);        
        app2.stage.addChild(rendszoveg[i]);
        updateSzoveg();       
    }

}

function updateSzoveg(){
    ossz=rendelesek.length;
            for(let i = 0; i < 4;i++)
        {
            if(i>ossz-1)
            {            
            app2.stage.removeChild(cetlik[i]);
            app2.stage.removeChild(rendszoveg[i]);
            app2.stage.removeChild(szamozas[i]);
            break;
            }else{
                let nameArr = rendelesek[i].toString().split(',');
                let szoveg="";        
                for(let j = 0; j<nameArr.length;j++)
                {
                    if(j%2==1)
                    {
                        szoveg=szoveg+nameArr[j]+",\n";
                    }
                    else{
                        szoveg=szoveg+nameArr[j]+",";
                    }
                }        
                rendszoveg[i].text = szoveg,rendstyle;
                szamozas[i].text = "Rendelés "+(i+1),felstyle;  
                }

            }
       
        }
    

function torles()
{
    let ossz=rendelesek.length;
    for(let i = 0; i<ossz;i++)
    {
        app2.stage.removeChild(cetlik[i],rendszoveg[i],szamozas[i]);
    }

}
function torlesat(index)
{   
        app2.stage.removeChild(cetlik[index],rendszoveg[index],szamozas[index]);
        cetlik.splice(index,1);
        rendszoveg.splice(index,1)
        szamozas.splice(index,1);
    

}
export {cetlire,torles,torlesat,initszovegek,updateSzoveg}