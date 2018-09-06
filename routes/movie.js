const express = require('express');
const router = express.Router();

/*
Models
*/

const Movie = require('../models/Movie');

router.get('/', (req, res) => {
  const promise = Movie.find({});
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

router.put('/:movie_id', (req, res) => {
  const promise = Movie.findByIdAndUpdate(req.params.movie_id, req.body);
  promise.then((movie) => {
    if(!movie)
      next({message:'The movie was not found.'});
    res.json(movie);
  }).catch((err) => {
    res.json(err);
  })
})

router.delete('/:movie_id', (req, res) => {
  const promise = Movie.findByIdAndRemove(req.params.movie_id, req.body);
  promise.then((movie) => {
    if(!movie)
      next({message:'The movie was not found.'});
    res.json(movie);
  }).catch((err) => {
    res.json(err);
  })
})

router.get('/:movie_id', (req, res) => {
  const promise = Movie.findById(req.params.movie_id);
  promise.then((movie) => {
    if(!movie)
      next({message:'The movie was not found.'});
    res.json(movie);
  }).catch((err) => {
    res.json(err);
  })
})

router.post('/', (req, res, next) => {
 // const {title} = req.body;
  const movie = new Movie(req.body);
 /* movie.save((err, data) => {
    if(err)
      res.json(err);
    res.json(data);
  }); */

  const promise = movie.save();
  
  promise.then((data) => {
    res.json({data});
  }).catch((err) => {
    res.json(err);
  });

});

module.exports = router;
