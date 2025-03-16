const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = Schema(
  {
    title: { type: String, required: true, unique: true, trim: true },
    productCount: { type: Number, required: true },
  },
  { versionKey: false, Timestamp: true }
);

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
