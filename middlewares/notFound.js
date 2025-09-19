const notFound = (err, res, next) => {
  res
    .status(404)
    .json({ error: "404 not found", message: "pagina non trovata" });
};
module.exports = notFound;
