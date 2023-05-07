import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BanerComponent } from './componentes/baner/baner.component';
import { LoginComponent } from './componentes/login/login.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import  {  NgCircleProgressModule  }  from  'ng-circle-progress';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './componentes/inicio/inicio.component' ;
import {HabilidadesComponent} from './componentes/habilidades/habilidades.component';
import { HttpClientModule } from '@angular/common/http';
import { AgregarexpeComponent } from './componentes/experiencia/agregarexpe/agregarexpe.component';
import { EditarexpeComponent } from './componentes/experiencia/editarexpe/editarexpe.component';
import { AgregarhabiComponent } from './componentes/habilidades/agregarhabi/agregarhabi.component';
import { EditarhabiComponent } from './componentes/habilidades/editarhabi/editarhabi.component';
import { AgregarproyeComponent } from './componentes/proyectos/agregarproye/agregarproye.component';
import { EditarproyeComponent } from './componentes/proyectos/editarproye/editarproye.component';
import { EditarsobreComponent } from './componentes/sobre-mi/editarsobre/editarsobre.component';
import { AgregareduComponent } from './componentes/educacion/agregaredu/agregaredu.component';
import { EditareduComponent } from './componentes/educacion/editaredu/editaredu.component';
import { EditarbanerComponent } from './componentes/baner/editarbaner/editarbaner.component';
import { AgregarredComponent } from './componentes/header/agregarred/agregarred.component';
import { PersonaService } from './service/persona.service';
import { EducacionService } from './service/educacion.service';
import { ExperienciaService } from './service/experiencia.service';
import { HabilidadesService } from './service/habilidades.service';
import { ProyectosService } from './service/proyectos.service';
import { RedesService } from './service/redes.service';
import { AuthService } from './service/auth.service';
import { CrudServiceService } from './service/crud.service.service';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    SobreMiComponent,
    EducacionComponent,
    HeaderComponent,
    BanerComponent,
    LoginComponent,
    ExperienciaComponent,
    ProyectosComponent,
    FooterComponent,
    InicioComponent,
    HabilidadesComponent,
    AgregarexpeComponent,
    EditarexpeComponent,
    AgregarhabiComponent,
    EditarhabiComponent,
    AgregarproyeComponent,
    EditarproyeComponent,
    EditarsobreComponent,
    AgregareduComponent,
    EditareduComponent,
    EditarbanerComponent,
    AgregarredComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule . forRoot ({})
  ],
  providers: [PersonaService,
              EducacionService,
              ExperienciaService,
              HabilidadesService,
              ProyectosService,
              RedesService,
              UserService,
              AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
