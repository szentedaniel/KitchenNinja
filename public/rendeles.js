import { palyaKesz } from './app.js'
import { cetlire,torlesat,initszovegek,updateSzoveg} from './rendel.js';
import {pontszamitas,goalszamitas} from "./pontok.js"
import { hozzavalok, szendvicshez, szendvicshezRendeles, resetPalya } from '/sonka.js'
let rendelesek=[[]]; //rendelések (hozzávalók halamza)
let rendelesekDb=[[]]; //az adott rendeléshez melyik hozzávalóból mannyi kell
let csprite;
//legenerálja a rendelést az adott szinthez
function rendeles(szint){
    let i,j;    
    
   
    for (i=0; i<Math.ceil(szint+(szint/4))+2; i++){ //szint függvényében hány rendelés legyen
        let rendeles=[]; //1 rendelés
        let rendelesDb=[0,0,0,0,0,0,0,0,0]; //1 rendelés hozzávalói darabszámra
        for (j=0; j<Math.ceil(Math.random()*szint/2)+1; j++){ //szint függvényében hány hozzávalóból álljon a rendelés
            let name=(hozzavalok[Math.floor(Math.random()*hozzavalok.length)]).split('/')[2].split('.')[0] //random hozzávaló (kiveszi a hozzávaló nevét az elérési útból)
            rendeles[j]=name; //hozzáadja a hozzávalót a rendeléshez
            switch(name){ //hozzáadja a hozzávalót a rendelés megfelelő darabszámához
                case("csirke"):
                    rendelesDb[0]++;
                    break;
                case("hagyma"):
                    rendelesDb[1]++;
                    break;
                case("paprika"):
                    rendelesDb[2]++;
                    break;  
                case("paradicsom"):
                    rendelesDb[3]++;
                    break;  
                case("parizsi"):
                    rendelesDb[4]++;
                    break;  
                case("sajt"):
                    rendelesDb[5]++;
                    break;  
                case("salata"):
                    rendelesDb[6]++;
                    break; 
                case("sonka"):
                    rendelesDb[7]++;
                    break;
                case("uborka"):
                    rendelesDb[8]++;
                    break;  
            }
        }
        rendelesek[i]=rendeles; //hozzáadja a rendelést az összes rendeléshet
        rendelesekDb[i]=rendelesDb // hozzáadja a rendelés darabjait az összes rendelés darabjaihoz
    }
    //kiírja az aktuális szintet és rendeléseket
    console.log(szint);
    console.log(rendelesek);    
    goalszamitas();
    cetlire();
}

//ellenőrzi, hogy elegendő hozzávaló van-e valamelyik rendelés elkészítéséhez
function rendelesKesz(){
    let i,j;
    for(i=0; i<rendelesek.length; i++){
        let kesz=0; //hány hozzávalóból van elegendő mennyiség a rendeléshez
        for(j=0; j<rendelesek[i].length; j++){
            switch(rendelesek[i][j]){ //ellenőrzi a hozzávalók mennyiségét, hogy elég-e
                case("csirke"):
                    if(szendvicshez[0]>=rendelesekDb[i][0] && rendelesekDb[0]!=0){
                        kesz++;
                    }
                    break;
                case("hagyma"):
                    if(szendvicshez[1]>=rendelesekDb[i][1] && rendelesekDb[1]!=0){
                        kesz++;
                    }
                    break;
                case("paprika"):
                    if(szendvicshez[2]>=rendelesekDb[i][2] && rendelesekDb[2]!=0){
                        kesz++;
                    }
                    break;
                case("paradicsom"):
                    if(szendvicshez[3]>=rendelesekDb[i][3] && rendelesekDb[3]!=0){
                        kesz++;
                    }
                    break;
                case("parizsi"):
                    if(szendvicshez[4]>=rendelesekDb[i][4] && rendelesekDb[4]!=0){
                        kesz++;
                    }
                    break;
                case("sajt"):
                    if(szendvicshez[5]>=rendelesekDb[i][5] && rendelesekDb[5]!=0){
                        kesz++;
                    }
                    break;
                case("salata"):
                    if(szendvicshez[6]>=rendelesekDb[i][6] && rendelesekDb[6]!=0){
                        kesz++;
                    }
                    break;
                case("sonka"):
                    if(szendvicshez[7]>=rendelesekDb[i][7] && rendelesekDb[7]!=0){
                        kesz++;
                    }
                    break;
                case("uborka"):
                    if(szendvicshez[8]>=rendelesekDb[i][8] && rendelesekDb[8]!=0){
                        kesz++;
                    }
                    break;
                default: console.log(rendelesek[i][j])
            }
        }
        if(kesz==rendelesek[i].length){ //ha elég, teljesíti a rendelést
            for(j=0; j<rendelesekDb[i].length; j++){
                szendvicshezRendeles(j,rendelesekDb[i][j]); //levonja a hozzávalókat
            }        
            pontszamitas(i);  
            rendelesek.splice(i,1); //elvtávolítja a rendelést  
            rendelesekDb.splice(i,1); //eltávolítja a rendelés darabjait
            console.log(rendelesek);            
            updateSzoveg();
        }
        if(rendelesek.length==0){ //ha nincs több rendelés, kész a pálya
            palyaKesz();
        }
    }
}


export { rendeles, rendelesKesz, rendelesek }