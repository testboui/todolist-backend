const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();
app.use(express.json());
app.use(cors());

// routes
const todoRoute = require("./routes/todo");

// apis
app.get("/", (req, res) => {
  res.send("Todolist api");
});

app.use("/todo", todoRoute);

// connect to mongodb
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

let port = process.env.PORT ? process.env.PORT : 5000;

app.listen(port, () => {
  console.log("Server is running at port: ", port);
});
