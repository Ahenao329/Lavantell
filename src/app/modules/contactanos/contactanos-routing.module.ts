import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosPageComponent } from './pages/contactanos-page/contactanos-page.component';

const routes: Routes = [
  {  path: '',
  component: ContactanosPageComponent,
  outlet: 'child'


}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactanosRoutingModule { }
