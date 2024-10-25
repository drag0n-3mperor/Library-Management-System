import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connDB = async () => {    
    try {        
        const conn = await mongoose.connect(`${process.env.MONGODB_CONN_STRING}/${DB_NAME}`);
        console.log(`MONGODB connection successful! ${conn.connection.host}`);
    } catch (err) {
        console.error(`MONGOBD connection error!\n${err}`);
        throw err;
    }
}

export default connDB;
