import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubProfileComponent } from './Details/github-profile/github-profile.component';
import { GithubSearchComponent } from './Details/github-search/github-search.component';
import { GithubNavbarComponent } from './Details/github-navbar/github-navbar.component';
import { PageNotFoundComponent } from './Details/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubProfileComponent,
    GithubSearchComponent,
    GithubNavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
