import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubProfileComponent } from './Details/github-profile/github-profile.component';
import { GithubSearchComponent } from './Details/github-search/github-search.component';
import { GithubNavbarComponent } from './Details/github-navbar/github-navbar.component';
import { PageNotFoundComponent } from './Details/page-not-found/page-not-found.component';
import { LoadingColorChangeDirective } from './Directives/loading-color-change.directive';
import { TimePasedCountPipe } from './Pipes/time-pased-count.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TimePasedCountPipe,
    LoadingColorChangeDirective,
    GithubNavbarComponent,
    GithubProfileComponent,
    GithubSearchComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
