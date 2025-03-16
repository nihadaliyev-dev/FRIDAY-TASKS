const validate = (req, res, next) => {
  const { title, content, category, image } = req.body;

  if (!title || !content || !category || !image) {
    return res.status(400).json({
      message: "All fields are required!",
    });
  }
  next();
};

module.exports = validate;
