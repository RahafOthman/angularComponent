import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { SixComponent } from './six/six.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';
import { SevenComponent } from './seven/seven.component';
import { EightComponent } from './eight/eight.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    SixComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent,
    SevenComponent,
    EightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
