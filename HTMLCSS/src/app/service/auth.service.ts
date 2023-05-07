import { Injectable } from '@angular/core';
import { User } from '../modelo/user';
import { HttpClient } from '@angular/common/http';
import { CrudServiceService } from './crud.service.service';
import { UserService } from './user.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  adminUser: any;

  constructor(private userService: UserService) { 
    this.getAdmin();
  }
  getAdmin(): void {
    this.userService.getById(1).subscribe(data => {
      this.adminUser = data;
    });
  }

  authenticate(credentials: User): boolean {
    const usuarioVerif =
      credentials.email == this.adminUser.email && credentials.password == this.adminUser.password;
      if (usuarioVerif) {
        localStorage.setItem('loggedUser', 'true');
        return true;
      } else {
        return false;
      }
  }

  logout(): void {
    localStorage.removeItem('loggedUser');
  }
}
