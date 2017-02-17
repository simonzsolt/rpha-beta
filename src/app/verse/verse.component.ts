import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Verse } from './verse';
import { AllVerseService } from './all-verse.service';

@Component({
	selector: 'app-verse',
	templateUrl: './verse.component.html',
	styleUrls: ['./verse.component.css']
})
export class VerseComponent implements OnInit {

	verse: Verse[];

	constructor(
		private verseService: AllVerseService,
		private router: Router) { }


	getVerse(): void {
		this.verseService
			.getVerse()
			.then( verse => this.verse = verse )
	}

ngOnInit() {
}

}
