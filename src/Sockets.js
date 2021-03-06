
import { io } from "socket.io-client";


const connectionOptions =  {
    "force new connection" : true,
    "reconnectionAttempts": "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
    "timeout" : 10000,                  //before connect_error and connect_timeout are emitted.
    "transports" : ["websocket"]
    };
export const socket = io.connect("http://185.45.197.227:3001/", connectionOptions);

        
        
    

    