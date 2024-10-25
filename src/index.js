import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";

import connDB from "./db/conn.js";

connDB().
then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server connection sucessful at port ${process.env.PORT}`);
    })
    app.on("error", err => console.error(err));
});
