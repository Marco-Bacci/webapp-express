// importo la connessione al db
const connection = require("../data/db");

// index
const index = (req, res) => {
  const sql = "SELECT * FROM movies";
  connection.query(sql, (err, results) => {
    if (err) {
      return res
        .status(500)
        .jason({ error: "errore nell'esecuzione della query:" + err });
    }
    res.send(results);
  });
};

// show
const show = (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM movies WHERE id = ?";
  connection.query(sql, [id], (err, resultMovie) => {
    if (err) {
      return res
        .status(500)
        .jason({ error: "errore nell'esecuzione della query:" + err });
    }
    // controllo se non trovo il movie
    if(resultMovie.length === 0){
      return res.status(404).json({error: "movie not Found"})
    }
    res.send(resultMovie[0]);
  });
};

module.exports = {
  index,
  show,
};
