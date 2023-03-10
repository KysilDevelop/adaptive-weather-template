import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { CelsiumPipe } from './pipes/celsium.pipe';
import { CitiesComponent } from './components/cities/cities/cities.component';
import { ScreenHeightDirective } from './directives/screen-height.directive';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CelsiumPipe,
    CitiesComponent,
    ScreenHeightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
