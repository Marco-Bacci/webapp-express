const setImagePath = (req, res, next) => {
  req.marcoBacci = `${req.protocol}://${req.get("host")}/imgs`;
  next();
};

module.exports = setImagePath;
