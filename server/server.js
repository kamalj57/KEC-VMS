const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db/dbConfig");
const route = require("./routes/route");
const sendMessage = require("./utils/smsSender");

const app = express();

app.use(cors());
app.use(express.json());
app.use(route);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
  db();
});

sendMessage();