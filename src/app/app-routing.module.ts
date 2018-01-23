import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {InstituteComponent} from './institute/institute.component';
import {InstituteSearchComponent} from './institute-search/institute-search.component';
import {TrustComponent} from './trust/trust.component';
import {TrusteeComponent} from './trustee/trustee.component';
import {DesignationComponent} from './designation/designation.component';
import {EmployeeComponent} from './employee/employee.component';
import {EmployeeSearchComponent} from './employee-search/employee-search.component';
import {StandardComponent} from './standard/standard.component';
import {StandardSearchComponent} from './standard-search/standard-search.component';
import {SubjectComponent} from './subject/subject.component';
import {SubjectSearchComponent} from './subject-search/subject-search.component';
import {StudentComponent} from './student/student.component';
import {StudentSearchComponent} from './student-search/student-search.component';
import {ExamComponent} from './exam/exam.component';
import {ExamSearchComponent} from './exam-search/exam-search.component';
import {FeesComponent} from './fees/fees.component';
import {FeesSearchComponent} from './fees-search/fees-search.component';
import {FeesSetupComponent} from './fees-setup/fees-setup.component';
import {FeesHeadSearchComponent} from './fees-head-search/fees-head-search.component';
import {HolidayComponent} from './holiday/holiday.component';
import {TimetableComponent} from './timetable/timetable.component';
import {CastComponent} from './cast/cast.component';
import {SubCastComponent} from './sub-cast/sub-cast.component';
import {CreateGroupComponent} from './create-group/create-group.component';
import {RoleComponent} from './role/role.component';
import {UserComponent} from './user/user.component';
import {UserSearchComponent} from './user-search/user-search.component';
import {ReligionComponent} from './religion/religion.component';
import {ExamTypeComponent} from './exam-type/exam-type.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {EventsComponent} from './events/events.component';
import {EventsSearchComponent} from './events-search/events-search.component';
import {CollectFeesComponent} from './collect-fees/collect-fees.component';
import {AuthenticationGuard} from "./authentication.guard";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  // Fallback when no prior route is matched
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'institute', canActivate: [AuthenticationGuard], component: InstituteComponent},
  { path: 'institute_search', canActivate: [AuthenticationGuard], component: InstituteSearchComponent},
  { path: 'trust', canActivate: [AuthenticationGuard], component: TrustComponent},
  { path: 'trustee', canActivate: [AuthenticationGuard], component: TrusteeComponent},
  { path: 'designation', canActivate: [AuthenticationGuard], component: DesignationComponent},
  { path: 'employee', canActivate: [AuthenticationGuard], component: EmployeeComponent},
  { path: 'employee_search', canActivate: [AuthenticationGuard], component: EmployeeSearchComponent},
  { path: 'standard', canActivate: [AuthenticationGuard], component: StandardComponent},
  { path: 'standard_search', canActivate: [AuthenticationGuard], component: StandardSearchComponent},
  { path: 'subject', canActivate: [AuthenticationGuard], component: SubjectComponent},
  { path: 'subject_search', canActivate: [AuthenticationGuard], component: SubjectSearchComponent},
  { path: 'student', canActivate: [AuthenticationGuard], component: StudentComponent},
  { path: 'student_search', canActivate: [AuthenticationGuard], component: StudentSearchComponent},
  { path: 'exam', canActivate: [AuthenticationGuard], component: ExamComponent},
  { path: 'exam_search', canActivate: [AuthenticationGuard], component: ExamSearchComponent},
  { path: 'fees', canActivate: [AuthenticationGuard], component: FeesComponent},
  { path: 'fees_search', canActivate: [AuthenticationGuard], component: FeesSearchComponent},
  { path: 'fees_setup', canActivate: [AuthenticationGuard], component: FeesSetupComponent},
  { path: 'fees_head_search', canActivate: [AuthenticationGuard], component: FeesHeadSearchComponent},
  { path: 'holiday', canActivate: [AuthenticationGuard], component: HolidayComponent},
  { path: 'timetable', canActivate: [AuthenticationGuard], component: TimetableComponent},
  { path: 'cast', canActivate: [AuthenticationGuard], component: CastComponent},
  { path: 'sub-cast', canActivate: [AuthenticationGuard], component: SubCastComponent},
  { path: 'create-group', canActivate: [AuthenticationGuard], component: CreateGroupComponent},
  { path: 'role', canActivate: [AuthenticationGuard], component: RoleComponent},
  { path: 'user', canActivate: [AuthenticationGuard], component: UserComponent},
  { path: 'user_search', canActivate: [AuthenticationGuard], component: UserSearchComponent},
  { path: 'religion', canActivate: [AuthenticationGuard], component: ReligionComponent},
  { path: 'exam-type', canActivate: [AuthenticationGuard], component: ExamTypeComponent},
  { path: 'notifications', canActivate: [AuthenticationGuard], component: NotificationsComponent},
  { path: 'events', canActivate: [AuthenticationGuard], component: EventsComponent},
  { path: 'events_search', canActivate: [AuthenticationGuard], component: EventsSearchComponent},
  { path: 'collect-fees', canActivate: [AuthenticationGuard], component: CollectFeesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
