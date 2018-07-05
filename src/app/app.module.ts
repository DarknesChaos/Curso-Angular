import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HttpHeaders, HttpEvent } from '@angular/common/http';

// Rutas
import { app_routing } from './app.routes';

// Servicios
import { InformacionService } from './services/informacion.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ProductoComponent } from './components/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    app_routing
  ],
  providers: [
    InformacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
