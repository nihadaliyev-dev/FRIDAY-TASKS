const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const multer = require("multer");

const { connectDB } = require("./config/db");

const blogRouter = require("./routes/blogRoute");
const categoryRouter = require("./routes/categoryRoute");
const authorRouter = require("./routes/authorRoute");

const multerErrorHandling = require("./middlewares/multerErrorHandling");

const app = express();

dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/categories", categoryRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/authors", authorRouter);
app.use(multerErrorHandling);

const PORT = process.env.PORT || 9998;

app.listen(PORT, () => {
  console.log(`API listening on port: ${PORT}, Link: http://localhost:${PORT}`);
});
