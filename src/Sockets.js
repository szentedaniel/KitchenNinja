
import { io } from "socket.io-client";


const connectionOptions =  {
    "force new connection" : true,
    "reconnectionAttempts": "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
    "timeout" : 10000,                  //before connect_error and connect_timeout are emitted.
    "transports" : ["websocket"]
    };
export const socket = io.connect("https://kitchen-ninja-server.herokuapp.com:36154/", connectionOptions); //https://kitchen-ninja-server.herokuapp.com:3001/
//http://185.45.197.227:3001/

        
        
    

    