import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JugadoresAndresFelipeHoyosService } from './services/jugadores-andres-felipe-hoyos.service';

import { APP_ROUTING } from './app.routes';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    JugadoresComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [JugadoresAndresFelipeHoyosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
