import express from "express";
import { json } from "express";

const app = express();
app.use(express.json());

// as if db lmao
const notesDB = [];
let dbIndex = 1;


app.post("/notes", (req, res) => {
    try {
        const result = req.body;
        if (result.title && result.content) {
            notesDB[dbIndex] = {...result, "id": dbIndex};
            res.status(201).send(notesDB[dbIndex++]);
        } else {
            if (!result.title) {
                res.status(400).send({"error": "Title is required"});
            } else if (!result.content) {
                res.status(400).send({"error": "Content is required"});    
            } else {
                throw Error("undefined error found!");
            }
        }
    } catch (error) {
        res.status(500).send({"error" : error.message})
    }
});

app.listen(3000, () => {
    console.log("Server is running in http://localhost:3000")
});

