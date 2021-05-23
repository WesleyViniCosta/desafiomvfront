import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCreateComponent } from './components/views/lista/lista-create/lista-create.component';
import { HomeComponent } from './components/views/home/home.component';
import { ListaReadComponent } from './components/views/lista/lista-read/lista-read.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'lista',
    component: ListaReadComponent
  },
  {
    path: 'lista/create',
    component: ListaCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
