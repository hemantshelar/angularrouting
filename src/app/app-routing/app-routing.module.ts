import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule, ExtraOptions } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';
import { ContactComponent } from '../contact/contact.component';

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled'
};

const routes: Routes = [
  { path: '' , component: LandingComponent},
  { path: 'home' , component: LandingComponent},
  { path: 'contact', component: ContactComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, routerOptions)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
