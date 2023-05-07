import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  

  constructor(private formBuilder: FormBuilder, 
              private http: HttpClientModule,
              private authService: AuthService, 
              private router: Router){ 
    ///Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]], 
   })
}


ngOnInit(): void {
  this.authService.logout();
}

  get Password(){
    return this.form.get("password");
  }
 
  get Email(){
   return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get EmailValid() {
    return this.Email?.touched && !this.Email?.valid;
  }

  onEnviar(event: Event){
    
    event.preventDefault();
    const Autenticado = this.authService.authenticate(this.form.value);
    if (Autenticado){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      this.router.navigate(['/']);
    }else {
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
  }

  

} 