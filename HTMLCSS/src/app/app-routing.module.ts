import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'encabezado', component: EncabezadoComponent},
  {path: 'sobre-mi', component: SobreMiComponent},
  {path: 'educacion', component: EducacionComponent},
  {path: 'login', component: LoginComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'skills', component: SkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
