import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: './app/views/home.html' 
})

export class AppComponent{
	public title: string;
	public description: string;

	constructor(){
		this.title = 'Título de marcadores de favoritos';
		this.description = 'Apliación web SPA con Angular para gestionar favoritos online.'
	}
}