import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile', pathMatch: 'full'
  },
  {
    path: 'resume',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: HomeComponent
  },
  {
    path: 'blog',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: HomeComponent
  },
  {
    path: 'portfolio',
    component: HomeComponent
  },
  {
    path: 'settings',
    component: HomeComponent
  },
  {
    path: 'tests',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false, relativeLinkResolution: 'legacy' } // <-- debugging purposes only
 // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
