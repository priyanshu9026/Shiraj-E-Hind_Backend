const express = require('express');
const router = express.Router(); 
const News = require('../models/newsModel');

// add news
router.get('/' , async (req, res) => {
   try {
      const news = await News.find({});
      res.json(news);
   }
   catch (err) {
      console.error("Error:", err);
      res.status(500).json({ message: "Server Error fetching news" });
   }
})

// delete news
router.delete('/:id', async (req, res) => {  
   try {
      const news = await News.findById(req.params.id);
      if (!news) {
         return res.status(404).json({ message: "News not found" });
      }
      await news.remove();
      res.json({ message: "News removed" });
   }
   catch (err) {
      console.error("Error:", err);
      res.status(500).json({ message: "Server Error deleting news" });
   }
}
);

module.exports = router;