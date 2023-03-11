const express = require("express");
const routes = require("./routes/posts.routes");
const { sequelize } = require("./models");

const app = express();

app.use(express.json());
app.use("/", routes);

sequelize.sync().then(() => {
    console.log("conectado ao banco com sucesso!!");
});

app.listen(3000, () => {
    console.log("app rodando na porta 3000");
});
