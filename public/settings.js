var eger_setting;
let gamemode = "single";
const mouse = document.getElementById("mouse");
const mouse2 = document.querySelector("#mouse")
const hand = document.getElementById('hand');
const single = document.getElementById('single');
const challange = document.getElementById('challange');
//console.log(mouse);

try {
    if (mouse) {
        mouse.addEventListener('click', () => {
            egerClick(true)
        })
        hand.addEventListener('click', () => {
            egerClick(false)
        })
        single.addEventListener('click', () => {
            singleClick("single")
        })
        challange.addEventListener('click', () => {
            singleClick("challange")
        })
    }
    
} catch (error) {
    
}


const egerClick = (b) => {
    eger_setting = b
    //console.log(eger_setting);
    if (b) {
        hand.classList.remove("active")
        mouse.classList.add("active")
    }else {
        mouse.classList.remove("active")
        hand.classList.add("active")
    }
}

const singleClick = (b) => {
    gamemode = b
    //console.log(gamemode);
    if (b === "single") {
        single.classList.add("active")
        challange.classList.remove("active")
    }else if(b === "challange"){
        single.classList.remove("active")
        challange.classList.add("active")
    }
}

//console.log(eger_setting);

export {eger_setting, gamemode}