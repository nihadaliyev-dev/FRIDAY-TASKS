const validate = (req, res, next) => {
  const { title, description, category, image } = req.body;

  if (!title || !description || !category || !image) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  next();
};

module.exports = validate;
