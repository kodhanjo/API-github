import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubProfileComponent } from './Details/github-profile/github-profile.component';
import { GithubSearchComponent } from './Details/github-search/github-search.component';
import { PageNotFoundComponent } from './Details/page-not-found/page-not-found.component';

const routes: Routes = [
  { path:'home', component: GithubProfileComponent},
  { path:'search', component: GithubSearchComponent},
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path:'**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
