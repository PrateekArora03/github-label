const express = require("express");
const router = express.Router();

const labelController = require("../../controllers/labelController");

router.get("/", labelController.getAllLabels);

router.post("/", labelController.createLabel);

router.patch("/:labelId", labelController.updateLabel);

router.delete("/:labelId", labelController.deleteLabel);

module.exports = router;
