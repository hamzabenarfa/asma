const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());

const dotenv = require("dotenv");
dotenv.config();

const produitRoute = require("./route/prods");
const userRoute = require("./route/User");

app.use(express.json());

mongoose.set("strictQuery", false);

mongoose.connect(process.env.URL,
     { useNewUrlParser: true, 
        useUnifiedTopology: true }).then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


app.use("/api/prods", produitRoute);
app.use("/api/user", userRoute);
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
  