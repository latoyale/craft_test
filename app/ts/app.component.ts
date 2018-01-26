import {Component} from 'angular2/core';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }      from '@angular/http';
import { AppComponent }   from './app.component';

@Component({
    selector: 'my-app',
    template: '<h1>Craft Test)jdfkjasdkfjsdfljsadfk</h1>'
})

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent],
})

export class AppComponent {
  data;

      constructor(private http:Http) {
          this.http.get('data/data.json')
                  .subscribe(res => this.data = res.json());

}
