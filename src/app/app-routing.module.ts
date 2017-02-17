import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerseComponent } from './verse/verse.component';

const routes: Routes = [
	{
		path: 'verse',
		component: VerseComponent
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
