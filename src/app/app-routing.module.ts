import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { Gta3Component } from './pages/gta3/gta3.component';
import { ViceCityComponent } from './pages/vice-city/vice-city.component';
import { SanAndreasComponent } from './pages/san-andreas/san-andreas.component';
import { RedDeadRedemptionComponent } from './pages/red-dead-redemption/red-dead-redemption.component';

const routes: Routes = [
  {path: '', redirectTo: 'principal', pathMatch: 'full'},
  {path: 'principal', component: PrincipalComponent},
  {path: 'gta3', component: Gta3Component},
  {path: 'vicecity', component: ViceCityComponent},
  {path: 'sanandreas', component: SanAndreasComponent},
  {path: 'reddeadredemption', component: RedDeadRedemptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
