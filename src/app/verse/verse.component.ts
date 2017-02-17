import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Verse } from './verse';
import { VerseService } from './verse.service';

@Component({
	selector: 'app-verse',
	templateUrl: './verse.component.html',
	styleUrls: ['./verse.component.css']
})
export class VerseComponent implements OnInit {

	allVerse: Verse[];

	constructor(
		private verseService: VerseService,
		private router: Router) { }


	getAllVerse(): void {
		this.verseService
			.getAllVerse()
			.then( allVerse => this.allVerse = allVerse )
	}

ngOnInit(): void {
	this.getAllVerse();
}

}
