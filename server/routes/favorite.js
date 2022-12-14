const express = require('express');
const router = express.Router();
const {Favorite} = require("../models/Favorite");

router.post("/favoriteNumber", (req,res) => {

  Favorite.find({"movieId" : req.body.movieId})
  .exec((err, info) => {
    if(err) return res.status(400).send(err)
    res.status(200).json({success : true, favoriteNumber : info.length})
  })
})

router.post("/favorited", (req,res) => {
  Favorite.find({"movieId" : req.body.movieId, "userFrom" : req.body.userId})
  .exec((err, info) => {
    if(err) return res.status(400).send(err)

    let result = false;
    if(info.length !== 0) {
      result = true
    }
    res.status(200).json({success : true, favorited : result })
  })
})

router.post("/addToFavorite", (req,res) => {
    const favorite = new Favorite(req.body)

    favorite.save((err, doc) => {
      if(err) return res.status(400).send(err)
      return res.status(200).json({ success : true })
    })
})

router.post("/removeFromFavorite", (req,res) => {
  Favorite.findOneAndDelete({movieId : req.body.movieId , userId : req.body.userId})
    .exec((err, doc) => {
      if(err) return res.status(400).send(err)
      res.status(200).json({success: true, doc})
    })
})


router.post("/getFavoritedMovie", (req,res) => {
  Favorite.find({'userId' : req.body.userId})
  .exec((err, favorites) => {
    if(err) return res.status(400).send(err)
    return res.status(200).json({success : true, favorites})
  })
})

router.post("/removeFromFavorite", (req,res) => {
  Favorite.findOneAndDelete({ movieId: req.body.movieId, userId: req.body.userId})
  .exec((err, resilt) => {
    if(err) return res.status(400).send(err)
    return res.status(200).json({success: true})
  })
})


module.exports = router;
