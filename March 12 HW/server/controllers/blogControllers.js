const Blog = require("../models/blogModel");
const Author = require("../models/authorModel");

const getAllBlogs = async (req, res) => {
  const { title, sortBy, order, page = 1, limit = 100000 } = req.query;
  const filter = {};

  if (title) {
    filter.title = {
      $regex: title,
      $options: "i",
    };
  }

  try {
    const blogs = await Blog.find(filter)
      .populate("author", "name email bio profileImage")
      .populate("category", "title productCount")
      .sort({ [sortBy]: order === "asc" ? 1 : -1 })
      .skip((parseInt(page) - 1) * parseInt(limit))
      .limit(parseInt(limit));

    const totalCount = await Blog.countDocuments(filter);

    res.status(200).json({
      message: "Success",
      data: blogs,
      pagination: {
        totalCount: totalCount,
        pageNumber: parseInt(page),
        totalPage: Math.ceil(totalCount / limit),
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error", error: error });
  }
};

const getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id)
      .populate("author", "name email bio profileImage")
      .populate("category", "title productCount");

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found!",
      });
    }

    res
      .status(200)
      .json({ message: "Successful request for blog", data: blog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error", error: error });
  }
};

const deleteBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBlog = await Blog.findById(id);

    if (!deletedBlog) {
      return res.status(404).json({
        message: "Blog not found!",
      });
    }

    // Remove blog reference from author's articles array
    await Author.findByIdAndUpdate(deletedBlog.author, {
      $pull: { articles: id },
    });

    // Delete the blog
    await Blog.findByIdAndDelete(id);

    // Get updated list of blogs with populated data
    const updatedBlogs = await Blog.find()
      .populate("author", "name email bio profileImage")
      .populate("category", "title productCount");

    res.status(200).json({
      message: "Blog deleted successfully",
      data: deletedBlog,
      updatedBlogs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error", error: error });
  }
};

const postBlog = async (req, res) => {
  console.log(req.file);
  console.log(req.body);
  const imageUrl = `/${req.file.path}`;
  console.log(imageUrl);
  try {
    const newBlog = new Blog({ ...req.body, image: imageUrl });
    await newBlog.save();

    // Update author's articles array
    await Author.findByIdAndUpdate(
      req.body.author,
      { $push: { articles: newBlog._id } },
      { new: true }
    );

    // Fetch the populated blog data
    const populatedBlog = await Blog.findById(newBlog._id)
      .populate("author", "name email bio profileImage")
      .populate("category", "title productCount");

    res.status(201).json({
      message: "Blog created successfully",
      data: populatedBlog,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error", error: error });
  }
};

const editBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    )
      .populate("author", "name email bio profileImage")
      .populate("category", "title productCount");

    if (!updatedBlog) {
      return res.status(404).json({
        message: "Blog not found!",
      });
    }

    res.status(200).json({
      message: "Blog updated successfully!",
      data: updatedBlog,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error", error: error });
  }
};

module.exports = {
  getAllBlogs,
  getBlogById,
  deleteBlogById,
  postBlog,
  editBlog,
};
