import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeprivateComponent } from '@modules/home-private/page/homeprivate/homeprivate.component';
import { HomePagesComponent } from '@modules/home/pages/home-pages/home-pages.component';
import { AuthGuard } from './security/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren:() => import ('./modules/auth/auth.module').then(m => m.AuthModule) 
  },
  {
    path: 'private',
    component: HomeprivateComponent,
    loadChildren: () => import ('@modules/home-private/home-private.module').then(m => m.HomePrivateModule),
    canActivate: [AuthGuard]  
  },
  {
    path: '',
    component: HomePagesComponent,
    loadChildren:() => import ('./modules/home/home.module').then(m => m.HomeModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
