import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InstituteComponent } from './institute/institute.component';
import { InstituteSearchComponent } from './institute-search/institute-search.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { TrustComponent } from './trust/trust.component';
import { TrusteeComponent } from './trustee/trustee.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthenticationGuard} from "./authentication.guard";
import {AuthenticationService} from "./authentication.service";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { DesignationComponent } from './designation/designation.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { StandardComponent } from './standard/standard.component';
import { StandardSearchComponent } from './standard-search/standard-search.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectSearchComponent } from './subject-search/subject-search.component';
import { StudentComponent } from './student/student.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { ExamComponent } from './exam/exam.component';
import { ExamSearchComponent } from './exam-search/exam-search.component';
import { FeesComponent } from './fees/fees.component';
import { FeesSearchComponent } from './fees-search/fees-search.component';
import { FeesSetupComponent } from './fees-setup/fees-setup.component';
import { SearchFeesHeadComponent } from './search-fees-head/search-fees-head.component';
import { FeesHeadSearchComponent } from './fees-head-search/fees-head-search.component';




@NgModule({
  declarations: [
    AppComponent,
    InstituteSearchComponent,
    HeaderComponent,
    InstituteComponent,
    LoginComponent,
    FooterComponent,
    TrustComponent,
    TrusteeComponent,
    DesignationComponent,
    EmployeeComponent,
    EmployeeSearchComponent,
    StandardComponent,
    StandardSearchComponent,
    SubjectComponent,
    SubjectSearchComponent,
    StudentComponent,
    StudentSearchComponent,
    ExamComponent,
    ExamSearchComponent,
    FeesComponent,
    FeesSearchComponent,
    FeesSetupComponent,
    FeesHeadSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [AuthenticationGuard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
