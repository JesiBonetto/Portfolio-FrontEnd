import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { LoginComponent } from './componentes/login/login.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';

const routes: Routes = [
  {path: 'encabezado', component: EncabezadoComponent},
  {path: 'sobre-mi', component: SobreMiComponent},
  {path: 'educacion', component: EducacionComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
