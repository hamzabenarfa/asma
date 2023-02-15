const express = require("express");
const app = express();
const port = process.env.PORT;
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const produitRoute = require("./route/prods");

app.use(express.json());

mongoose.set("strictQuery", false);

mongoose.connect(process.env.URL,
     { useNewUrlParser: true, 
        useUnifiedTopology: true }).then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


app.use("/api/prods", produitRoute);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
  