// Libraries
import dotenv from 'dotenv';
import express from "express";
import bodyParser from "body-parser";
import path from "path";

// Api
import { createUser } from './server/database/api/createUser';
import pool from './server/database/database';

dotenv.config();
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post("/api/insertUser", async (req, res): Promise<void> => {
    createUser(req.body);
})

if (process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
        res.sendFile(path.join(path.join(__dirname, '../client/build'), 'index.html'))
    })
}


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
