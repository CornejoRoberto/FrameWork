import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtencionComponent } from './components/atencion/atencion.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path: 'pagina1', component:Pagina1Component},
  {path: 'atencion', component:AtencionComponent},
  {path: 'registro', component:RegistroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
