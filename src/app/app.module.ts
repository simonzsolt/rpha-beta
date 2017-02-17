import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { VerseComponent } from './verse/verse.component';
import { AllVerseService } from './verse/all-verse.service';

@NgModule({
	declarations: [
		AppComponent,
		VerseComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule
	],
	providers: [AllVerseService],
	bootstrap: [AppComponent]
})
export class AppModule { }
