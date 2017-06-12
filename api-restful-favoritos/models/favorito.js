'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FavoritoSchema = Schema({
	id: String,
	url: String,
	description: String,
	title: String
});

module.exports = mongoose.model('Favorito', FavoritoSchema);