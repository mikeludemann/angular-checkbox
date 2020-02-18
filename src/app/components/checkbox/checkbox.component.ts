import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }

	@Input() name: string;

	constructor() { }

	ngOnInit() {
	}

	isChecked:boolean = false;

	doCheck($event) {
		this.isChecked = !this.isChecked;
	}

}
