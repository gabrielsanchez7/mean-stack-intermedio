'use-strict';

var Favorito = require('../models/favorito');

function prueba(req, res) {

	if(req.params.nombre)
		var nombre = req.params.nombre;
	else
		var nombre = 'sin nombre';

	res.status(200)
		.send({
			data: [2, 3, 4],
			texto: 'Ruta prueba con NodeJs y Express - ' + nombre
		});

}

function getFavorito(req, res, err) {

	var favoritoId = req.params.id;

	Favorito.findById(favoritoId, function(err, favorito){
		if(err)
			res.status(500).send({
				message: 'Error al devolver el marcador'
			});
		if(!favorito)
			res.status(404).send({
				message: 'No existe el favorito'
			});
		res.status(200).send({
			favorito: favorito
		});
	});

}

function getFavoritos(req, res) {

	Favorito.find({}).sort('-_id').exec((err, favoritos) => {
		if(err){
			res.status(500).send({
				message: 'Error al devolver los marcadores'
			});
		}
		else {
			if(!favoritos){
				res.status(404).send({
					message: 'No hay marcadores'
				});
			}
			else {
				res.status(200).send({
					favorito: favoritos
				});
			}
		}
	});

}

function saveFavorito(req, res) {

	var favorito = new Favorito();
	var params = req.body;

	favorito.title = params.title;
	favorito.description = params.description;
	favorito.url = params.url;

	favorito.save((err, favoritoStored) => {
		if(err) {
			res.status(500).send({
				message: 'Error al guardar el marcador'
			});
		}
		res.status(200).send({
			favorito: favoritoStored
		});
	});

}

function updateFavorito(req, res) {

	var favoritoId = req.params.id;
	var update = req.body;

	Favorito.findByIdAndUpdate(favoritoId, update, (err, favoritoUpdate) => {
		if(err) {
			res.send(500).send({
				message: 'Error al actualizar marcador'
			});
		}

		res.status(200).send({
			favorito: favoritoUpdate
		});

	});

}

function deleteFavorito(req, res) {

	var favoritoId = req.params.id;

	Favorito.findById(favoritoId, function(err, favorito) {
		if(!favorito)
			res.status(404).send({
				message: 'No hay marcador'
			});
		else {
			favorito.remove(err => {
				if(err)
					res.status(500).send({
						favorito: 'Error al borrar'
					});
				else
					res.status(200).send({
						message: 'El marcador se ha eliminado'
					});
			});
		}
	});
}

module.exports = {
	prueba,
	getFavorito,
	getFavoritos,
	saveFavorito,
	updateFavorito,
	deleteFavorito
}