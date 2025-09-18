const express = require("express");

const app = express();

const port = process.env.PORT;

// importo router
const movieRouter = require("./routers/movieRouter");

app.use(express.static("public"));

// rotta base
app.get("/", (req, res) => {
  res.send("rotta base del mio blog");
});

// definisco le rotte per i movies
app.use("/movies", movieRouter);

app.listen(port, () => {
  console.log(`server in ascolta sulla porta ${port}`);
});
