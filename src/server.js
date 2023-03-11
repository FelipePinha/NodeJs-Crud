const express = require("express");
const routes = require("./routes/posts.routes");

const app = express();

app.use(express.json());
app.use("/", routes);

app.listen(3000, () => {
    console.log("app rodando na porta 3000");
});
