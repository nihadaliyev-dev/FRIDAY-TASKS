const { query } = require("express");
const Post = require("../models/postModel");
const getAllPosts = async (req, res) => {
  const { sortOrder } = req.query;
  console.log(sortOrder);
  if (sortOrder) {
    let sortedPosts = await Post.find();
    switch (sortOrder) {
      case "asc":
        console.log(sortedPosts);
        sortedPosts = sortedPosts.sort((a, b) =>
          a.title
            .toLocaleLowerCase()
            .trim()
            .localeCompare(b.title.toLocaleLowerCase().trim())
        );
        break;
      case "desc":
        sortedPosts = sortedPosts.sort((a, b) =>
          b.title
            .toLocaleLowerCase()
            .trim()
            .localeCompare(a.title.toLocaleLowerCase().trim())
        );
        break;
      default:
        break;
    }
    return res.status(200).json({ message: "success sort", data: sortedPosts });
  }
  try {
    const posts = await Post.find();
    res.status(200).json({ message: "Success", data: posts });
  } catch (error) {
    res.status(500).json({ message: "Error", error: error });
  }
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(400).json({ message: "Product not found" });
    }
    res.status(200).json({
      message: "Success",
      data: post,
    });
  } catch (error) {
    res.status(500).json({ message: "Error", error: error });
  }
};

const deletePostById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(400).json({ message: "Post not found" });
    }
    res.status(200).json({
      message: "Success",
      data: deletedPost,
    });
  } catch (error) {
    res.status(500).json({ message: "Error", error: error });
  }
};

const postPost = async (req, res) => {
  try {
    const newPost = new Post({ ...req.body });
    await newPost.save();
    res.status(201).json({ message: "Post Created!", data: newPost });
  } catch (error) {
    res.status(500).json({ message: "Error", error: error });
  }
};

const editPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedPost = await Post.findByIdAndUpdate(id);
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res
      .status(200)
      .json({ message: "Post edited successfully", data: updatedPost });
  } catch (error) {
    res.status(500).json({ message: "Error", error: error });
  }
};

const searchPostByQuery = async (req, res) => {
  const { title } = req.query;
  console.log(title);
  try {
    const queryResult = await Post.find({
      title: { $regex: new RegExp(title, "i") },
    });
    res.status(200).json({
      message: "Succesful query",
      data: queryResult,
    });
  } catch (error) {
    res.status(500).json({ message: "Error", error: error });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  deletePostById,
  postPost,
  editPostById,
  searchPostByQuery,
};
