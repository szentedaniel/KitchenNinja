/*eslint no-unused-vars:*/
/*eslint no-use-before-define: */
import React, {useState, useEffect} from 'react';

function Ball(props) {
    // const [test, settest] = useState(0)
    const [cord, setcord] = useState({x: window.innerWidth/2, y: window.innerHeight/2})

    let x = cord.x;
    let y = cord.y;

    

     useEffect(() => {
        let a = cord.x;
        let b = cord.y;
        const handleMotionEvent = event => {
            
            a += parseInt(event.acceleration.x*5);
            b += parseInt(event.acceleration.y*5);
            setcord({x: a, y: b});
            let a = cord.x;
            let b = cord.y;
         };
         
         window.addEventListener('devicemotion', handleMotionEvent, true);
         return () => window.removeEventListener('devicemotion', handleMotionEvent);
     }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
    
    //  const inputTextHandler = (e) => {
    //      console.log(parseInt(e.target.value));
    //      settest(parseInt(e.target.value));
    //  }

    //  const submitHandler = (e) => {
    //      e.preventDefault();
    //      console.log(test + ", " + cord.x + ", " + cord.y);
    //      let a = cord.x;
    //      let b = cord.y;
    //      a += test*5;
    //      b += test*5;
    //      setcord({x: a, y: b});
    //  }

    const ballStyle = {
        top: y,
        left: x
    }
    

    return(
        <div>
            <div>x: {cord.x}, y: {cord.y}</div>
            <form >
                {/* <input onChange={inputTextHandler} type="text"/>
                <button onClick={submitHandler} type="submit">a</button>  */}
            </form>
            <div className="ball" style={ballStyle}></div>
        </div>
    );
    
}
export default Ball