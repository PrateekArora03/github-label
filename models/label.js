const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const labelSchema = Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  color: {
    type: String,
    required: true
  }
});

const Label = model("Label", labelSchema);

module.exports = Label;
