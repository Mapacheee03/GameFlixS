import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { Gta3Component } from './pages/gta3/gta3.component';
import { ViceCityComponent } from './pages/vice-city/vice-city.component';
import { SanAndreasComponent } from './pages/san-andreas/san-andreas.component';
import { GtaVComponent } from './pages/gta-v/gta-v.component';
import { RedDeadRedemptionComponent } from './pages/red-dead-redemption/red-dead-redemption.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    Gta3Component,
    ViceCityComponent,
    SanAndreasComponent,
    GtaVComponent,
    RedDeadRedemptionComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
