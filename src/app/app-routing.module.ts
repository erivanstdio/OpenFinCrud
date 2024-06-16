import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PartnersListComponent } from './partners-list/partners-list.component';
import { PartnersFormComponent } from './partners-form/partners-form.component';
import { ExternalCompaniesListComponent } from './external-companies-list/external-companies-list.component';
import { ExternalCompanyFormComponent } from './external-company-form/external-company-form.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, children: [
      { path: 'partners', component: PartnersListComponent },
      { path: 'partners/new', component: PartnersFormComponent },
      { path: 'partners/edit/:id', component: PartnersFormComponent },
      
      { path: 'external-companies', component: ExternalCompaniesListComponent },
      { path: 'external-companies/new', component: ExternalCompanyFormComponent },
      { path: 'external-companies/edit/:id', component: ExternalCompanyFormComponent },
      
      { path: 'about', component: AboutComponent },
  ]},
  { path: '**', redirectTo: ''}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
