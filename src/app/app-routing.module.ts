import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PharmacyRegistrationComponent } from './pages/pharmacy-registration/pharmacy-registration.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'sign', component: SignupPageComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'about', component: AboutusComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: PharmacyRegistrationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
