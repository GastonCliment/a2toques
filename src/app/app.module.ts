import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './componentes/titulo/titulo.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { ActividadesComponent } from './componentes/actividades/actividades.component';
import { FotosComponent } from './componentes/fotos/fotos.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { VideoComponent } from './componentes/video/video.component';
import { FooterComponent } from './componentes/footer/footer.component';
import {ReactiveFormsModule} from "@angular/forms";
import { IndexComponent } from './componentes/index/index.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    ServiciosComponent,
    ActividadesComponent,
    FotosComponent,
    FormularioComponent,
    VideoComponent,
    FooterComponent,
    IndexComponent,
    NavbarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
