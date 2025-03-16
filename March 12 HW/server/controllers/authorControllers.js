const Author = require("../models/authorModel");
const Blog = require("../models/blogModel");

const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find({}).populate(
      "articles",
      "title description"
    );
    res.status(200).json({
      message: "Success",
      data: authors,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: error,
    });
  }
};

const getAuthorById = async (req, res) => {
  const { id } = req.params;
  try {
    const author = await Author.findById(id).populate("articles");
    if (!author) {
      return res.status(404).json({
        message: "Author not found",
      });
    }
    res.status(200).json({
      message: "Success",
      data: author,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: error,
    });
  }
};

const createAuthor = async (req, res) => {
  try {
    const newAuthor = new Author(req.body);
    await newAuthor.save();

    res.status(201).json({
      message: "Author Created Successfully",
      data: newAuthor,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating author",
      error: error,
    });
  }
};

const updateAuthor = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedAuthor = await Author.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedAuthor) {
      return res.status(404).json({
        message: "Author not found",
      });
    }
    res.status(200).json({
      message: "Author Updated Successfully",
      data: updatedAuthor,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating author",
      error: error,
    });
  }
};

const deleteAuthor = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedAuthor = await Author.findByIdAndDelete(id);
    if (!deletedAuthor) {
      return res.status(404).json({
        message: "Author not found",
      });
    }
    // Also update any blogs that referenced this author
    await Blog.updateMany({ author: id }, { $unset: { author: "" } });

    res.status(200).json({
      message: "Author Deleted Successfully",
      data: deletedAuthor,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting author",
      error: error,
    });
  }
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
