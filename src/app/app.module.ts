import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// tslint:disable-next-line: import-spacing
import { MatTableModule } from  '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  MatTableModule,
  BrowserAnimationsModule,
  MatSortModule,
  MatInputModule,
  MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
