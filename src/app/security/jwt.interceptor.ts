import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginService } from "@modules/auth/services/login.service";
import { Observable } from "rxjs";


@Injectable()


export class JwtInterceptor implements HttpInterceptor {

    constructor(private apiathService: LoginService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const usuario = this.apiathService.usuarioData

        if(usuario){
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${usuario.token}`
                }
            });
        }
        return next.handle(req);
    }
}