const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogSchema = Schema(
  {
    title: { type: String, required: true },
    // date: { type: Date, required: true },
    description: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    image: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
