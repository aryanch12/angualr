import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route (Home)
  { path: 'login', component: LoginComponent }, // Login route
  { path: 'dashboard', component: DashboardComponent }, // Dashboard route
  { path: '**', redirectTo: '/' } // Wildcard route for 404, redirects to home
];
