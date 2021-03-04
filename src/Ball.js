import React from 'react';

function Ball(props) {

    let x = null;
    let y = null;
         
    x = window.innerWidth/2;
    y = window.innerHeight/2;


    x =+ 100 + props.alpha*5;
    y =+ 100 + props.beta*5;
        


    const ballStyle = {
        top: y,
        left: x
    }
    

    return(
        <div>
            <div className="ball" style={ballStyle}></div>
        </div>
    );
    
}
export default Ball