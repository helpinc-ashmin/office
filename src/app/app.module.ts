import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { JobsComponent } from './jobs/jobs.component';
import { NewJobComponent } from './jobs/new-job/new-job.component';
import { OldJobComponent } from './jobs/old-job/old-job.component';
import { ExpandJobsComponent } from './jobs/expand-jobs/expand-jobs.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component'
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    JobsComponent,
    NewJobComponent,
    OldJobComponent,
    ExpandJobsComponent,
    WelcomeComponent,
    RegisterComponent,
    
 

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    QuillModule,
    ReactiveFormsModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
