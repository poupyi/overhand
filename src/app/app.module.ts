import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { DinoService } from './services/dinoServices';
import { HttpModule, Response} from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ HttpModule, BrowserModule, FormsModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DinoService],

})
export class AppModule { }
