import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosPageComponent } from './pages/nosotros-page/nosotros-page.component';

const routes: Routes = [
{  path: '',
  component: NosotrosPageComponent,
  outlet: 'child'

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NosotrosRoutingModule { }
