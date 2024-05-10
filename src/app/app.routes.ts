import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {HeroesComponent} from "./heroes/heroes.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailsComponent} from "./hero-details/hero-details.component";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";

export const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'hero/:id', component: HeroDetailsComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: "full"},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutesModule { }
