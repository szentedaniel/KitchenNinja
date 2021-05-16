import { rendelesek } from "./rendeles.js";
import {app, szint} from "./app.js"
import {style} from "./style.js"


let osszpontszam = 0;
let penz;
let goal;
let goalpont=0;
let mentettpenz;
function pontszamitas(index)
{
    let nameArr = rendelesek[index].toString().split(',');
    for(let i = 0; i<nameArr.length;i++)
    {
        osszpontszam+=10*szint;
    }
    console.log(osszpontszam);
    penzupdate();    
}
function kezdopenz()
{
    if(szint==1)
    {
        osszpontszam=0;
    }
    else{
        osszpontszam=mentettpenz;
    } 
}
function goalszamitas()
{   
    mentettpenz = osszpontszam;
    console.log(mentettpenz);
    goalpont=0;
    for(let i = 0; i<rendelesek.length;i++)
    {
        let nameArr = rendelesek[i].toString().split(',');
        for(let j = 0; j<nameArr.length;j++)
        {
            if(szint==1)
            {
                goalpont+=7*szint;
            }else{
                goalpont+=9*szint;
            }
            
        }
        
    }
    console.log(goalpont);
    goalupdate();
}
function initPenz(){
    penz = new PIXI.Text('Money: '+osszpontszam+'$',style);
    penz.x = (app.renderer.width-penz.width)/2-200;
    penz.y = 10;      
    app.stage.addChild(penz);
    goal = new PIXI.Text('Goal: '+goalpont+'$', style);
    goal.x = (app.renderer.width-goal.width)/2+100;
    goal.y = 10;
    app.stage.addChild(goal);
}

function penzupdate()
{    
    penz.text = 'Money: '+osszpontszam+'$',style;
}
function goalupdate()
{
    goal.text = 'Goal: '+goalpont+'$',style;
}
function pazaroltpont(maradek)
{
    osszpontszam=osszpontszam-(maradek*szint*5);
    penzupdate();
}
function palyaellenoriz()
{
    if(osszpontszam<goalpont)
    {
        return false;
    }else
    {return true;}
}
export {osszpontszam, pontszamitas,pazaroltpont, initPenz,goalszamitas, palyaellenoriz,kezdopenz,penzupdate}