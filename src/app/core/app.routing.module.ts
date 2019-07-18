import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from '../user/user.component';
import {LoginComponent} from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { AuthGuard } from '../auth.guard';
const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'user', component: UserComponent, canActivate: [AuthGuard], },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'user/:id', component: UserComponent, canActivate: [AuthGuard], },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
