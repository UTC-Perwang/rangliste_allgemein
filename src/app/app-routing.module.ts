import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// layouts

// admin views

// auth views

// no layouts views
import { RankingComponent } from './views/tournament/ranking/ranking.component';

const routes: Routes = [
  {path: '', component: RankingComponent}
  // admin views
  /*{
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'tables', component: TablesComponent},
      {path: 'maps', component: MapsComponent},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    ],
  },
  // auth views
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'},
    ],
  },*/
  // no layout views
  /*
  {path: 'profile', component: ProfileComponent},
  {path: 'landing', component: LandingComponent},
  {path: '', component: IndexComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
