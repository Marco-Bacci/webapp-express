// importo express
const express = require("express");
// importo router
const router = express.Router();
// importo controller
const movieController = require("../controllers/movieController");

// definizione rotte
router.get("/", movieController.index);
router.get("/:id", movieController.show);

module.exports = router