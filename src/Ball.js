import React, { useEffect, useRef} from 'react';
import { io } from "socket.io-client";

function Ball(props) {
    // const [test, settest] = useState(0)
    // const [cord, setcord] = useState({x: window.innerWidth/2, y: window.innerHeight/2})
    const loc_x = useRef(window.innerWidth/2);
    const loc_y = useRef(window.innerHeight/2);

    // let x = cord.x;
    // let y = cord.y;

    const connectionOptions =  {
        "force new connection" : true,
        "reconnectionAttempts": "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
        "timeout" : 10000,                  //before connect_error and connect_timeout are emitted.
        "transports" : ["websocket"]
      };
      const socket = io.connect("https://kitchen-ninja-server.herokuapp.com/", connectionOptions);
    
      socket.on('someevent', function (data) { console.log(data) })


    
     useEffect(() => {

        //const handleMotionEvent = event => {
            // let a = cord.x;
            // let b = cord.y;
            // // eslint-disable-line
            // a += parseInt(event.acceleration.x*5);
            // // eslint-disable-line
            // b += parseInt(event.acceleration.y*5);
            // setcord({x: a, y: b});
            //if ((loc_x.current > 0 && loc_x.current < window.innerWidth) && (loc_y.current > 0 && loc_y.current < window.innerHeight)) {
            //    if ((loc_x.current + parseInt(props.Accelerometer_x*2)) > window.innerWidth) {
            //        loc_x.current = window.innerWidth;
            //    }if ((loc_x.current + parseInt(props.Accelerometer_x*2)) < window.innerWidth) {
            //        loc_x.current = window.innerWidth;
            //    }if ((loc_y.current + parseInt(props.Accelerometer_y*2)) < window.innerHeight) {
            //        loc_y.current = window.innerHeight;
            //    }if ((loc_y.current + parseInt(props.Accelerometer_y*2)) > window.innerHeight) {
            //        loc_y.current = window.innerHeight;
            //    }
            //}else{
                loc_x.current = loc_x.current + parseInt(props.Accelerometer_x*2);
                loc_y.current = loc_y.current - parseInt(props.Accelerometer_y*2);
                socket.emit('cords', {
                    x: loc_x.current,
                    y: loc_y.current
                })
                
            //}
                
         //};
         
         //window.addEventListener('devicemotion', handleMotionEvent, true);
         //return () => window.removeEventListener('devicemotion', handleMotionEvent);
     }, [props.Accelerometer_x, props.Accelerometer_y]); // eslint-disable-line react-hooks/exhaustive-deps
    
     let socket_x=0;
     let socket_y=0;


    socket.on('cords', data => {
        console.log(data.x + ' ' + data.y);
        socket_x = data.x;
        socket_y = data.y;
    })
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
        top: loc_y.current,
        left: loc_x.current
    }
    

    return(
        <div>
            <div>x: {loc_x.current}, y: {loc_y.current}</div>
            <div>socket params: x:{socket_x}, y:{socket_y}</div>
            <form >
                {/* <input onChange={inputTextHandler} type="text"/>
                <button onClick={submitHandler} type="submit">a</button>  */}
            </form>
            <div className="ball" style={ballStyle}></div>
        </div>
    );
    
}
export default Ball