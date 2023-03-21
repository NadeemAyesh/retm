import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { ServiceCodeComponent } from './pages/service-code/service-code.component';
import { RegisterComponent } from './pages/register/register.component';
import { SummeryComponent } from './pages/summery/summery.component';
import { ErorrCheckingComponent } from './pages/erorr-checking/erorr-checking.component';

const routes: Routes = [
  {
    path: 'home/:token',
    component: HomeComponent,
    pathMatch: 'full'
  },
  /* {
    path:':token',
    redirectTo: 'home',
    pathMatch: 'full',
  }, */
  {
    path:'privacy',
    component: PrivacyComponent,
    pathMatch: 'full'
  },
  {
    path:'service-code',
    component: ServiceCodeComponent,
    pathMatch: 'full'
  },
  {
    path:'register',
    component: RegisterComponent,
    pathMatch: 'full'
  },
  {
    path:'summery',
    component: SummeryComponent,
    pathMatch: 'full'
  },
  {
    path:'error',
    component: ErorrCheckingComponent,
    pathMatch: 'full'
  },
  { path: '**', component: ErorrCheckingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
