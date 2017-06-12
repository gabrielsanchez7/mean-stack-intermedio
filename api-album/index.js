'use strict'

var mongoose = require('mongoose');
var port = process.env.PORT || 3700;
var app = require('./app');

mongoose.connect('mongodb://localhost:27017/app_albums', (err, res) => {
	if(err) {
		throw err;
	}
	else {
		console.log('Conexión a mongodb correcta');
		app.listen(port, () => {
			console.log('Api corriendo en puerto 3700');
		});
	}
});