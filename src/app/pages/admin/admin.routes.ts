import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageAboutComponent } from './manage-about/manage-about.component';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';
import { ManageExperienceComponent } from './manage-experience/manage-experience.component';
import { ManageContactComponent } from './manage-contact/manage-contact.component';

export const ADMIN_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: DashboardComponent },
  { path: 'about', component: ManageAboutComponent },
  { path: 'projects', component: ManageProjectsComponent },
  { path: 'experience', component: ManageExperienceComponent },
  { path: 'contact', component: ManageContactComponent },
];
