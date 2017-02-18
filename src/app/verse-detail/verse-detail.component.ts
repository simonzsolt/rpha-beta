import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Verse }        from '../verse/verse';
import { VerseService } from '../verse/verse.service';

@Component({
	moduleId: module.id,
	selector: 'app-verse-detail',
	templateUrl: './verse-detail.component.html',
	styleUrls: ['./verse-detail.component.css']
})
export class VerseDetailComponent implements OnInit {

	verse: Verse;

	constructor(
		private verseService: VerseService,
		private route: ActivatedRoute,
		private location: Location
	) { }

	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => this.verseService.getVerseById(params['id']))
			.subscribe(verse => this.verse = verse);
	}

	goBack(): void {
		this.location.back();
	}

}
