require("dotenv").config();
const express = require("express");
const app = express();
const authRouter = require("./routes/authRoute");
const contactRouter = require("./routes/contactRoute");
const connectDb = require("./config/db");
const cors = require("cors");
const errorMiddleware = require("./middlewares/errorMiddleware");

const PORT = process.env.PORT || 5000;

//cors
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  }),
);
//default res
app.get("/", (req, res) => {
  res.send("Welcome, this is backend of my application!!");
});

//middleware
app.use(express.json());

// routes
app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);

app.use(errorMiddleware);

//db + server
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening at the port number ${PORT}`);
  });
});
