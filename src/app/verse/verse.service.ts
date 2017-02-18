import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Verse } from './verse'

// Verse class


@Injectable()
export class VerseService {

	private headers = new Headers({ 'Content-Type': 'application/json' });
	private verseUrl = 'api/verse';  // URL to web api

	constructor(private http: Http) { }

	// get all verse
	getAllVerse(): Promise<Verse[]> {
		return this.http.get(this.verseUrl)
			.toPromise()
			.then( response => response.json() as Verse )
			.catch( this.handleError );
	};

	// get verse by ID
	getVerseById(id: string): Promise<Verse> {
		const url =  `  ${this.verseUrl}/${id}`
		return this.http.get(url)
			.toPromise()
			.then( response => response.json() as Verse )
			.catch( this.handleError );
	};

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}
