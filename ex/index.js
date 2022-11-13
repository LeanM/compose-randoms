const Express = require("express");
const cors = require("cors");
var app = Express();

app.use(cors());

app.get("/", (req, res) => {
  valor = Math.random() * (99999 - 10000) + 10000;
  res.send("" + Math.round(valor));
});

app.listen(process.env.NUMEX_PORT, () => {
  console.log(process.env.NUMEX_PORT);
});
