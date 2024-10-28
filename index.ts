import express,{Express} from "express";
import env from "dotenv";
import {connect} from "./config/database";
import router from "./ver1/router/index.router";
import bodyParser from "body-parser";
import cors from "cors";
env.config();
connect();


const app: Express  = express();
app.use(bodyParser.json());
const port: (number | string) = `${process.env.PORT}` || 3000;
router(app);
app.use(cors());


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
