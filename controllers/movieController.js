// importo la connessione al db
const connection = require("../data/db")

// index
const index = (req, res) => {
  res.send("lista movies");
};

// show
const show = (req, res) => {
  res.send(`dettaglio movie ${req.params.id}`);
};

module.exports = {
  index,
  show,
};
