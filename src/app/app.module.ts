import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InstituteComponent } from './institute/institute.component';
import { InstituteSearchComponent } from './institute-search/institute-search.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthenticationGuard} from "./authentication.guard";
import {AuthenticationService} from "./authentication.service";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';




@NgModule({
  declarations: [
    AppComponent,
    InstituteSearchComponent,
    HeaderComponent,
    InstituteComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [AuthenticationGuard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
