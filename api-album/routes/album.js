'use strict'

var express = require('express');
var api = express.Router();
var AlbumController = require('../controllers/album');

api.get('/album/:id', AlbumController.getAlbum);
api.get('/albums', AlbumController.getAlbums);

module.exports = api;