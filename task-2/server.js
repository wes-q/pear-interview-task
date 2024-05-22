const express = require("express");
const app = express();
const PORT = 3021;
app.use(express.json());
app.use(express.static("public"));

let count = 0;

app.get("/", (_, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/count", (_, res) => {
    res.json({ count: count });
});

app.post("/increment", (req, res) => {
    const { value } = req.body;
    if (typeof value === "number" && value > 0) {
        count += value;
        res.json({ count });
    } else {
        res.status(400).json({ error: "Invalid value" });
    }
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = server;
