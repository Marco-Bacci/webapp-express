const express = require("express");

// importo cors
const cors = require("cors");

const app = express();

const port = process.env.PORT;

// importo router
const movieRouter = require("./routers/movieRouter");

// usomiddlewares cors
app.use(cors({origin: process.env.FE_APP}))

// importo gli altri middlewares
const errorHandler = require(`./middlewares/errorHandler`);
const notFound = require("./middlewares/notFound");
const imagePath = require("./middlewares/imagePath");


app.use(express.static("public"));
app.use(imagePath);

// rotta base
app.get("/", (req, res) => {
  res.send("rotta base del mio blog");
});

// definisco le rotte per i movies
app.use("/movies", movieRouter);

// utilizzio middlewares
app.use(errorHandler);
app.use(notFound);

app.listen(port, () => {
  console.log(`server in ascolta sulla porta ${port}`);
});
