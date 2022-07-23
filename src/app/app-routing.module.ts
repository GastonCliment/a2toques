import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServiciosComponent} from "./componentes/servicios/servicios.component";
import {ActividadesComponent} from "./componentes/actividades/actividades.component";
import {FotosComponent} from "./componentes/fotos/fotos.component";
import {FormularioComponent} from "./componentes/formulario/formulario.component";
import {VideoComponent} from "./componentes/video/video.component";
import {IndexComponent} from "./componentes/index/index.component";

const routes: Routes = [
  {path : 'index', component : IndexComponent},
  {path : 'servicios', component : ServiciosComponent},
  {path : 'actividades', component : ActividadesComponent},
  {path : 'fotos', component: FotosComponent},
  {path : 'formulario', component: FormularioComponent},
  {path : 'video', component : VideoComponent},
  {path : '', pathMatch: 'full', redirectTo : 'index'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
