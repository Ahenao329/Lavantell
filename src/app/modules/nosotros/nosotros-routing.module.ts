import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminNosotrosPageComponent } from './admin-pages/admin-nosotros-page/admin-nosotros-page.component';
import { NosotrosPageComponent } from './pages/nosotros-page/nosotros-page.component';

const routes: Routes = [
{  path: '',
  component: NosotrosPageComponent,
  outlet: 'child'

},
{  path: '',
component: AdminNosotrosPageComponent,
outlet: 'admin'

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NosotrosRoutingModule { }
