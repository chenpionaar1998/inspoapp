// Libraries
import dotenv from 'dotenv';
import express from "express";
import bodyParser from "body-parser";
import path from "path";

// Api
import { signUp } from './server/database/api/createUser';
import { signIn } from './server/database/api/signInUser';
 import { getUser } from './server/database/api/findUser';

dotenv.config();
const app = express();

const port = process.env.PORT || 5000;
const dev = app.get('env');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

if (dev === "production") {
    app.disable("x-powered-by");

    app.use(express.static(path.resolve(__dirname, './client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'./client/build', 'index.html'));
    })
}

app.post("/api/signUp", async (req, res): Promise<void> => {
    const result = signUp(req.body);
    result.then(ress => {
        if (ress) {
            const user = getUser(req.body.email);
            user.then(user => {
                res.send({ 
                    correctUser: true,
                    user: user 
                });
            })
        }
        else {
            res.send({ 
                correctUser: false,
                user: {}
            });
        }
    })
});

app.post("/api/signIn", async (req, res): Promise<void> => {
    const result = signIn(req.body);
    result.then(ress => {
        if (ress) {
            const user = getUser(req.body.email);
            user.then(user => {
                res.send({ 
                    correctUser: true,
                    user: user 
                });
            })
        }
        else {
            res.send({ 
                correctUser: false,
                user: {}
            });
        }
    })
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
