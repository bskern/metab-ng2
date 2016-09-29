import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { HttpModule }  from '@angular/http';
import 'rxjs/Rx'; // get everything from Rx

import { AppComponent } from './app.component';
import { WeatherComponent } from '../app/weather/weather.component';
import { RedditComponent } from '../app/reddit/reddit.component';
import { HackerNewsComponent } from '../app/hackernews/hn.component';
import { HeaderComponent, ArticleComponent} from '../app/shared/index';

import { WeatherService } from  '../app/weather/weather.service';
import { RedditService } from '../app/reddit/reddit.service';
import { HackerNewsService } from '../app/hackernews/hn.service';



@NgModule({
  declarations: [AppComponent, WeatherComponent,HeaderComponent,ArticleComponent,RedditComponent,HackerNewsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule
  ],
  providers: [WeatherService,RedditService,HackerNewsService],
  bootstrap: [AppComponent]
})

export class AppModule {
}