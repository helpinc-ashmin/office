import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { JobsComponent } from './jobs/jobs.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes=[
    {path: '', component:WelcomeComponent},
    {path: 'signup', component:SignupComponent, },
    {path: 'login', component:LoginComponent},
    {path: 'jobs', component:JobsComponent},
    {path: 'register', component:RegisterComponent},
  
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}