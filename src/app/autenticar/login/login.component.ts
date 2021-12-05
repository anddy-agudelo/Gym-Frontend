import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private serviceUsuario: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password: ['',Validators.required]
    })
  }

  entrar(){
    console.log(this.loginForm)
    if(this.loginForm.status=="VALID"){
      this.serviceUsuario.iniciarSesion(this.loginForm.value).subscribe(data => {
        this.router.navigateByUrl("inicio")
      })
    }else{
      alert("Hay campos vacios")
    }

}
}
