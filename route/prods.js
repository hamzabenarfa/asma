const router = require("express").Router();
const Produit = require("../model/produit");

router.post("/", async (req, res) => {
  const newPost = new Produit(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    prod = await Produit.find();
    res.status(200).json(prod);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
