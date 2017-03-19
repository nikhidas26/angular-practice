import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ArchivesComponent } from './archives.component';
import { HomeComponent } from './home.component';
import { TestComponent } from './test.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    ArchivesComponent, 
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
