import React, { useEffect, useRef} from 'react';
//import { Socket } from 'socket.io-client';
import {socket} from './Sockets';

function Ball(props) {

    const loc_x = useRef(window.innerWidth/2);
    const loc_y = useRef(window.innerHeight/2);
    const socket_x = useRef(0);
    const socket_y = useRef(0);

 
    const ballStyle = {
        top: loc_y.current,
        left: loc_x.current
    }

    useEffect(() => {
        loc_x.current = loc_x.current + parseInt(props.alpha*2);
        loc_y.current = loc_y.current - parseInt(props.beta*2);
    
        socket.on('cords', data => {
        loc_x.current = data.x
        loc_y.current= data.y
        console.log(data.x, data.y);
        socket_x.current = loc_x.current
        socket_y.current = loc_y.current
        
        })
        
        socket.emit('cords', {
            x: loc_x.current,
            y: loc_y.current
        })

        
        return () => {
            socket.off('cords');
         };
    },[props.alpha, props.beta])
    

    return(
        
        <div>
            
            <div>x: {loc_x.current}, y: {loc_y.current}</div>
            <div>socket params: x:{socket_x.current},{console.log("megj" +socket_x.current)} y:{socket_y.current}</div>
            <form >
                {/* <input onChange={inputTextHandler} type="text"/>
                <button onClick={submitHandler} type="submit">a</button>  */}
            </form>
            <div className="ball" style={ballStyle}></div>
        </div>
    );
    
}
export default Ball