import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { CustomMaterialModule } from './core/material.module';
import { AppRoutingModule } from './core/app.routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { SessionService } from './service/session.service';
import { SessionStorageService } from 'angular-web-storage';
import { AuthGuard } from './auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    FormsModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService, SessionService, SessionStorageService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
