import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEquipoPageComponent } from './admin-equipo-pages/admin-equipo-page/admin-equipo-page.component';
import { AdminNosotrosPageComponent } from './admin-pages/admin-nosotros-page/admin-nosotros-page.component';
import { NosotrosPageComponent } from './pages/nosotros-page/nosotros-page.component';

const routes: Routes = [
{  path: '',
  component: NosotrosPageComponent,
  outlet: 'child'
},
{  path: '',
component: AdminEquipoPageComponent,
outlet: 'admin',
pathMatch: 'prefix',

},
{  path: 's',
component: AdminNosotrosPageComponent,
outlet: 'admin',
pathMatch: 'prefix',

},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NosotrosRoutingModule { }
