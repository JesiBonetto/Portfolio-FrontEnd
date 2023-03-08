import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BanerComponent } from './componentes/baner/baner.component';
import { LoginComponent } from './componentes/login/login.component';
import { PorfolioService } from './servicios/porfolio.service';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import  {  NgCircleProgressModule  }  from  'ng-circle-progress';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './componentes/inicio/inicio.component' ;
//tengo que importar HttpClientModule


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    SobreMiComponent,
    EducacionComponent,
    HeaderComponent,
    BanerComponent,
    LoginComponent,
    ExperienciaComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    InicioComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule . forRoot ({})
  ],
  providers: [PorfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
