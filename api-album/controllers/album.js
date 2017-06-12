'use strict'

var Album = require('../models/album');

function getAlbum(req, res) {

	var albumId = req.params.id;
	Album.findById(albumId, (err, album) => {
		if(err)
			return res.status(500).send({
				message: 'Error en la petición'
			});
		else {
			if(!album)
				res.status(404).send({
					message: 'No se ha encontrado el álbum'
				});
			else
				res.status(200).send({
					album
				});
		}
	})

}

function getAlbums(req, res) {

	Album.find({}, (err, albums) => {
		if(err)
			return res.status(500).send({
				message: 'Error en la petición'
			});
		else {
			if(!albums)
				res.status(404).send({
					message: 'No se han encontrado álbums'
				});
			else
				res.status(200).send({
					albums
				});
		}
	})

}

module.exports = {
	getAlbum,
	getAlbums
}