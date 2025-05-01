const express = require("express");
const router = express.Router();
const Milestone = require("../models/milestoneModel");

router.get("/", async (req, res) => {
  try {
    const milestones = await Milestone.find();
    res.json(milestones);
  } catch (error) {
    res.status(500).json({ message: "Error fetching milestones" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newMilestone = new Milestone(req.body);
    await newMilestone.save();
    res.status(201).json(newMilestone);
  } catch (error) {
    res.status(500).json({ message: "Error adding milestone" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedMilestone = await Milestone.findByIdAndDelete(req.params.id);
    if (!deletedMilestone) return res.status(404).json({ message: "Milestone not found" });
    res.json({ message: "Milestone deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting milestone" });
  }
});

module.exports = router;
