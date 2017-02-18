import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerseComponent } from './verse/verse.component';
import { VerseDetailComponent } from './verse-detail/verse-detail.component';

const routes: Routes = [
	{
		path: 'verse',
		component: VerseComponent
	},
	{
		path: 'verse/:id',
		component: VerseDetailComponent
	},
	{
		path: '',
		redirectTo: '/',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }
