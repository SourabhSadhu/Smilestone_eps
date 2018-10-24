import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminComponent} from './admin/admin.component';
import { MaterialTestComponent } from './material-test/material-test.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'test', component: MaterialTestComponent },
  // { path: 'heroes', component: HeroesComponent },
  // { path: 'app-material-nav', component: MaterialNavComponent},
  // { path: 'app-material-dashboard', component: MaterialDashboardComponent},
  // { path: 'app-material-table', component: MaterialTableComponent},
  // { path: 'angular-material-component', component: AngularComponentsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class DashRoutingModule {
}
