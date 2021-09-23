import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// layouts
// admin views
// auth views
// no layouts views
// components for views and layouts
import { CardStatsComponent } from './components/cards/card-stats/card-stats.component';
import { RankingComponent } from './views/tournament/ranking/ranking.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [
    AppComponent,
    CardStatsComponent,
    RankingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ScullyLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
