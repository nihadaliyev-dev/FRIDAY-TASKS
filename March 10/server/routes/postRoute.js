const express = require("express");
const {
  getAllPosts,
  getPostById,
  deletePostById,
  postPost,
  editPostById,
  searchPostByQuery,
} = require("../controllers/postController");
const productValidation = require("../middlewares/postValidation");
const router = express.Router();

router.get("/", getAllPosts);
router.get("/search", searchPostByQuery);
router.get("/:id", getPostById);
router.post("/", productValidation, postPost);
router.delete("/:id", deletePostById);
router.patch("/:id", editPostById);

module.exports = router;
