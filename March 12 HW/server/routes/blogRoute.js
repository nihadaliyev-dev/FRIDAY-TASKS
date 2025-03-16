const express = require("express");

const {
  getAllBlogs,
  getBlogById,
  deleteBlogById,
  postBlog,
  editBlog,
} = require("../controllers/blogControllers");

const blogValidation = require("../middlewares/blogValidation");
const imageUpload = require("../middlewares/multerMiddleware");
const router = express.Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.delete("/:id", deleteBlogById);
router.post("/", imageUpload.single("image"), postBlog);
router.put("/:id", editBlog);

module.exports = router;
