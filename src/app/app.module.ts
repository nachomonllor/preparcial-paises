import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionesComponent } from './components/regiones/regiones.component';
import { PaisesBanderaComponent } from './components/paises-bandera/paises-bandera.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { PaisDetalleComponent } from './components/pais-detalle/pais-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionesComponent,
    PaisesBanderaComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PaisDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
