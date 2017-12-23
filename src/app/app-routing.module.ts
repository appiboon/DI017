import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {InstituteComponent} from './institute/institute.component';
import {InstituteSearchComponent} from './institute-search/institute-search.component';
import {AuthenticationGuard} from "./authentication.guard";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  // Fallback when no prior route is matched
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'institute', canActivate: [AuthenticationGuard], component: InstituteComponent},
  { path: 'institute_search', canActivate: [AuthenticationGuard], component: InstituteSearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
