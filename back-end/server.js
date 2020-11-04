const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

const Categories = require("./models/Categories");
const categories = require("./data/categories");

const userRoute = require("./routes/userAuth");
const categoriesRoute = require("./routes/categories");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/user", userRoute);
app.use("/api/categories", categoriesRoute)

mongoose.connect(
  process.env.ATLAS_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      console.log("Connection to database failed");
    } else {
      console.log("Database is successfully connected");
    }
  }
);

const db = mongoose.connection;
db.once("open", async (req, res) => {
  if ((await Categories.countDocuments().exec()) > 0) {
    return;
  }
  Categories.insertMany(categories)
    .then(() => res.json("categories added successfully"))
    .catch((err) => res.status(400).json("error in adding categories", err));
});

app.listen(5000, () => {
  console.log("Server is up and running on 5000");
});
