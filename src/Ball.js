import React, { useEffect, useRef} from 'react';

function Ball(props) {
    // const [test, settest] = useState(0)
    // const [cord, setcord] = useState({x: window.innerWidth/2, y: window.innerHeight/2})
    const loc_x = useRef(window.innerWidth/2);
    const loc_y = useRef(window.innerHeight/2);

    // let x = cord.x;
    // let y = cord.y;


    
     useEffect(() => {

        const handleMotionEvent = event => {
            // let a = cord.x;
            // let b = cord.y;
            // // eslint-disable-line
            // a += parseInt(event.acceleration.x*5);
            // // eslint-disable-line
            // b += parseInt(event.acceleration.y*5);
            // setcord({x: a, y: b});
            loc_x.current = loc_x.current + parseInt(event.acceleration.x*5);
            loc_y.current = loc_y.current + parseInt(event.acceleration.y*5);
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
        top: loc_y,
        left: loc_x
    }
    

    return(
        <div>
            <div>x: {loc_x}, y: {loc_y}</div>
            <form >
                {/* <input onChange={inputTextHandler} type="text"/>
                <button onClick={submitHandler} type="submit">a</button>  */}
            </form>
            <div className="ball" style={ballStyle}></div>
        </div>
    );
    
}
export default Ball