const express = require("express");
const path = require("path");

let app = express();

//相对路径改为绝对路径
app.use("/public/", express.static(path.join(__dirname, "./public/")));
app.use("/node_modules/", express.static(path.join(__dirname, "./node_modules/")));

app.get("/", (req, res) => {
    res.send("hello");
});

app.listen(8000, () => {
    console.log("server is running on 8000 port");
});

