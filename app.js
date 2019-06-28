const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./router");
let app = express();

//相对路径改为绝对路径
app.use("/public/", express.static(path.join(__dirname, "./public/")));
app.use("/node_modules/", express.static(path.join(__dirname, "./node_modules/")));

app.engine("html", require("express-art-template"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//把路由挂载到app中
app.use(router);

app.get("/", (req, res) => {
    res.render("index.html");
});

app.listen(8000, () => {
    console.log("server is running on 8000 port");
});

