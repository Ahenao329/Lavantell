import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/security/auth.guard';
import { AdminServiciosPageComponent } from './page/admin-servicios-page/admin-servicios-page.component';
import { ServiciosPageComponent } from './pages/servicios-page/servicios-page.component';

const routes: Routes = [
{  path: '',
  component: ServiciosPageComponent,
  outlet: 'child'
},
{  path: '',
  component: AdminServiciosPageComponent,
  outlet: 'admin',
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
