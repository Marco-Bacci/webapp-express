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

  // query per libro
  const sql = "SELECT * FROM movies WHERE id = ?";

  // query per review
  const sqlReview = "SELECT text FROM reviews WHERE movie_id = ?";

  // eseguo query per libro
  connection.query(sql, [id], (err, resultMovie) => {
    if (err) {
      return res
        .status(500)
        .jason({ error: "errore nell'esecuzione della query:" + err });
    }
    // controllo se non trovo il movie
    if (resultMovie.length === 0) {
      return res.status(404).json({ error: "movie not Found" });
    }

    connection.query(sqlReview, [id], (err, resultReview) => {
      if (err) {
        return res
          .status(500)
          .jason({ error: "errore nell'esecuzione della query:" + err });
      }

      // creo un nuovo oggetto con dati del movie e l'array delle recensioni
      const movieWithReviews = {
        ...resultMovie[0],
        reviews: resultReview,
        image: "http://localhost:3000/imgs/" + resultMovie[0].image,
      };
      console.log(movieWithReviews);

      res.send(movieWithReviews);
    });
  });
};

module.exports = {
  index,
  show,
};
