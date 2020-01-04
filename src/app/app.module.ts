import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material';

@NgModule({
	declarations: [
		AppComponent,
		DataBindingComponent,
		InputPropertyComponent,
		OutputPropertyComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatSliderModule,
		MatInputModule,
		MatButtonModule,
		MatIconModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
