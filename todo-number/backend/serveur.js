require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

const cors = require("cors");

app.use(cors());

const port = process.env.APP_PORT ?? 5000;

const Hello = (req, res) => {
  res.send("Hello my Active friend");
};

app.get("/", Hello);

const numberHandlers = require("./numberHandlers");

app.post("/numbers", numberHandlers.postNumber);
app.get("/numbers", numberHandlers.getNumbers);
app.get("/numbers/:id", numberHandlers.getNumberById);
app.put("/numbers/:id", numberHandlers.updateNumber);
app.delete("/numbers/:id", numberHandlers.deleteNumber);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on ${port}`);
  }
});
