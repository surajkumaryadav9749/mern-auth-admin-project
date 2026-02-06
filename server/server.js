require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/authRoute");
const connectDb = require("./config/db");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

//cors
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  }),
);

//middleware
app.use(express.json());

// routes
app.use("/api/auth", router);

//db + server
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening at the port number ${PORT}`);
  });
});
