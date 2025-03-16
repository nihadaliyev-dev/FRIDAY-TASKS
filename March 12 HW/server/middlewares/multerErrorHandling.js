const multer = require("multer");

const multerErrorHandling = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(400).json({
      message: "Multer Error",
      erorr: err.message,
    });
  } else if (err) {
    res.status(500).json({
      message: "Unknown error",
      error: err.message,
    });
  } else {
    next();
  }
};

module.exports = multerErrorHandling;
