const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const cors = require("cors");
const app = express();

// middlewares
app.use(express.json()); // this middle helps to read and send data in json formate.
app.use(express.urlencoded({ extended: false })); // it's allow us to add form formate data.
app.use(cors());

// routers
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("I am sending response to api");
});

mongoose
  .connect(
    "mongodb+srv://aftabd8982:hU1RxdKv18TB8CHQ@curddb.lauskwa.mongodb.net/Curd-Api?retryWrites=true&w=majority&appName=curdDB"
  )
  .then(() => {
    console.log("database is connected");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
