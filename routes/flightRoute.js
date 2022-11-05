const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');



router.get("/", controller.all_flights);

router.get ("/:id", controller.single_flight);

router.post("/", controller.add_flight);

router.patch("/:id", controller.edit_flight);

router.delete("/:id", controller.delete_flight);

module.exports = router;

