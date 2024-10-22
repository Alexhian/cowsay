import "dotenv/config.js"

import { say } from 'cowsay';


console.log(say({
    text : `Hello I'm ${process.env.NAME} from ${process.env.CAMPUS}`,
    e : "oO",
    T : "U "
}));