import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import { LoginService } from '@modules/auth/services/login.service';
import { CookieService } from 'ngx-cookie-service';


@Injectable ({providedIn: 'root'})

export class AuthGuard implements CanActivate {

    constructor(private router:Router, 
        private cookieService: CookieService ) {}

    canActivate(route: ActivatedRouteSnapshot) {      
        return this.checkCookieSession();
    }
    
    checkCookieSession(): boolean {
        try {
            const token = this.cookieService.check('token')
            if(!token){
                this.router.navigate(['/', 'login'])
            }
            return token
        } catch(e) {
            return false
        }
    }
}