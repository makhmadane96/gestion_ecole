import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StatistiqueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
