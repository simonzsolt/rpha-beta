import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { VerseComponent } from './verse/verse.component';
import { VerseService } from './verse/verse.service';
import { VerseDetailComponent } from './verse-detail/verse-detail.component';

@NgModule({
	declarations: [
		AppComponent,
		VerseComponent,
		VerseDetailComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule
	],
	providers: [VerseService],
	bootstrap: [AppComponent]
})
export class AppModule { }
