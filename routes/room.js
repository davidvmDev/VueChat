var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Room = require('../models/Room.js');

/* Get todos las Rooms */
router.get('/', function(req, res, next) {
  Room.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* Traerse un solo Room por id */
router.get('/:id', function(req, res, next) {
  Room.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* guardar una Room */
router.post('/', function(req, res, next) {
  Room.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Actualizar una Room */
router.put('/:id', function(req, res, next) {
  Room.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Borrar Room */
router.delete('/:id', function(req, res, next) {
  Room.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
