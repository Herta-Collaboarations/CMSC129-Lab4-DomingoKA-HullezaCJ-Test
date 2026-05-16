import express from "express";
import e, { json } from "express";

const app = express();
app.use(express.json());

// as if db lmao
const notesDB = [];
let dbIndex = 1;

app.get("/notes", (req, res) => {
    res.status(200).send(notesDB);
})

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


app.put("/notes/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const result = req.body;
        if (notesDB[id]) {
            notesDB[id] = {...result, "id": id};
            res.status(200).send(notesDB[id]);
        } else {
            res.status(404).send({ "error": "Note ID not found" });
        }

    } catch (error) {
        res.status(500).send({"error" : error.message})
    }
});

app.listen(3000, () => {
    console.log("Server is running in http://localhost:3000")
});

