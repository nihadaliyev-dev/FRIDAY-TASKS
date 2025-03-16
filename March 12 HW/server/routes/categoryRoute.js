const express = require("express");
const {
  getAllCategories,
  getCategoryById,
  deleteCategoryById,
  postCategory,
  editCategory,
} = require("../controllers/categoryControllers");

const router = express.Router();

router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.delete("/:id", deleteCategoryById);
router.post("/", postCategory);
router.put("/:id", editCategory);

module.exports = router;
