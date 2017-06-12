'use strict'

var app = require('./app');
var port = process.env.PORT || 2717;
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cursofavoritos', (err, res) => {

    if(err) {
        throw err;
    }
    else {
        console.log('Conexión a mongo db correcta');
        app.listen(port, function(){
        	console.log(`Api Rest Favoritos funcionando en http://localhost:${port}`);
        });
    }

});


// app.listen(port, () => console.log(`Api Rest Favoritos funcionando en http://localhost:${port}`));