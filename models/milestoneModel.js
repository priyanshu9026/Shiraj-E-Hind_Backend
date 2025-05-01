const mongoose = require("mongoose");

const milestoneSchema = new mongoose.Schema({
  year: Number,
  title: String,
  description: String,
  photourl: String,
});

module.exports = mongoose.model("Milestone", milestoneSchema);
