const express = require("express");

const app = express();

const port = process.env.PORT;

// importo router
const movieRouter = require("./routers/movieRouter");

// importo middlewares
const errorHandler = require(`./middlewares/errorHandler`)
const notFound = require('./middlewares/notFound')

app.use(express.static("public"));

// rotta base
app.get("/", (req, res) => {
  res.send("rotta base del mio blog");
});

// definisco le rotte per i movies
app.use("/movies", movieRouter);

// utilizzio middlewares
app.use(errorHandler)
app.use(notFound)

app.listen(port, () => {
  console.log(`server in ascolta sulla porta ${port}`);
});
