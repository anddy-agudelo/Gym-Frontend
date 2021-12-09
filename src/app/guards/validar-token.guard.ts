import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor(private usuarioService:UsuarioService, private router: Router){}


  canActivate(): Observable<boolean> |  boolean  {
    return this.usuarioService.verificarToken().pipe(
      tap((valido) => {
        if(!valido) {
          this.router.navigateByUrl("")
        }
      })
    )
  }

  canLoad(): Observable<boolean> |  boolean {
    return this.usuarioService.verificarToken().pipe(
      tap((valido) => {
        if(!valido) {
          this.router.navigateByUrl("")
        }
      })
    )
  }
}