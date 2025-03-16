const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuthorSchema = Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    bio: { type: String },
    profileImage: { type: String },
    articles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
