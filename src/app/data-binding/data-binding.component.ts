import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-data-binding',
	templateUrl: './data-binding.component.html',
	styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

	url: string = 'http://loiane.com'
	cursoAngular: boolean = true
	urlImagem: string = 'http://lorempixel.com/400/200/city/'
	valorAtual: string = ''
	valorSalvo: string = '' 
	nome: string = 'abc'

	nomeDoCurso: string = 'Angular'

	valorInicial = 15

	pessoa: any = {
		nome: 'def',
		idade: 20
	}

	onMudouValor(evento) {
		console.log(evento.novoValor)
	}

	getValor() {
		return 1;
	}

	getCurtirCurso() {
		return true;
	}

	onKeyUp(evento: KeyboardEvent) {
		this.valorAtual = (<HTMLInputElement>evento.target).value;
	}

	salvarValor(valor) {
		this.valorSalvo = valor;
	}

	constructor() { }

	ngOnInit() {
	}

}
