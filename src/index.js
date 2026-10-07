import express, { Router } from "express";
import {config} from 'dotenv';
import { router } from "./routes/user.routes.js";
config();
const port=process.env.PORT || 3005;
const app=express();
app.use(express.json());
app.use('/api/users',router)
//------------- LISTEN ----------//
app.listen(port,()=>{
    console.log(`Server running on ${port} port`);
})
