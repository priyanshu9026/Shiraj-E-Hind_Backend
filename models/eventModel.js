const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  year: Number,
  title: String,
  description: String,
  date: String,
  address: String,
  city: String,
  photourl: String,
});

module.exports = mongoose.model("Event", eventSchema);
