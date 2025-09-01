const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 1234;

// Middleware
// Middleware
app.use(cors({ origin: "*" }));  // <- IZINKAN semua origin
app.use(bodyParser.json());
const path = require("path");


// Routes
app.use("/api/users", userRoutes);
const uri = "mongodb+srv://pdrtechnology93_db_user:od6VwoIoCCFworj9@cluster0.kjdqtrl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// MongoDB Connection
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.log(err));
