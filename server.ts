// Libraries
import dotenv from 'dotenv';
import express from "express";
import bodyParser from "body-parser";
import path from "path";

// Api
import { signUp } from './server/database/api/createUser';
import { signIn } from './server/database/api/signInUser';
import { getUser } from './server/database/api/findUser';
import { createPlan, linkUserToPlan } from './server/database/api/createPlan';
import { fetchPlansForUser, getPlansInfoWithID, getPlanInfoWithID } from './server/database/api/fetchPlans';
import { editPlan, deletePlan } from './server/database/api/modifyPlan';

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
    });
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
    });
});

app.post("/api/createPlan", async (req, res): Promise<void> => {
    const result = createPlan(req.body);
    result.then(ress => {
        if (ress) {
            res.send({ success: true });
        }
        else {
            res.send({ success: false });
        }
    });
});

app.post("/api/linkUserToPlan", async (req, res): Promise<void> => {
    const result = linkUserToPlan(req.body);
    result.then(ress => {
        if (ress) {
            res.send({ success: true });
        }
        else {
            res.send({ success: false });
        }
    });
});

app.post("/api/fetchPlansForUser", async (req, res): Promise<void> => {
    const result = fetchPlansForUser(req.body);
    result.then(ress => {
        if (ress) {
            res.send({ 
                success: true,
                planIDs: ress
            });
        }
        else {
            res.send({ 
                success: false,
                planIDs: {}
            });
        }
    });
});

app.post("/api/getPlansInfoWithID", async (req, res): Promise<void> => {
    const result = getPlansInfoWithID(req.body);
    result.then(ress => {
        if (ress) {
            res.send({ 
                success: true,
                plans: ress.plans
            });
        }
        else {
            res.send({ 
                success: false,
                plans: []
            });
        }
    });
});

app.post("/api/getPlanInfoWithID", async (req, res): Promise<void> => {
    const result = getPlanInfoWithID(req.body);
    result.then(ress => {
        if (ress) {
            res.send({ 
                success: true,
                plan: ress.plan
            });
        }
        else {
            res.send({ 
                success: false,
                plan: {}
            });
        }
    });
});

app.post("/api/editPlan", async (req, res): Promise<void> => {
    const result = editPlan(req.body);
    result.then(ress => {
        if (ress) {
            res.send({ success: true });
        }
        else {
            res.send({ success: false });
        }
    });
});

app.post("/api/deletePlan", async (req, res): Promise<void> => {
    const result = deletePlan(req.body);
    result.then(ress => {
        if (ress) {
            res.send({ success: true });
        }
        else {
            res.send({ success: false });
        }
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
