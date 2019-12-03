import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroSegurosComponent } from './components/cadastro-seguros/cadastro-seguros.component';
import { ListarSegurosComponent } from './components/listar-seguros/listar-seguros.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cadastro' },
  { path: 'cadastro', component: CadastroSegurosComponent },
  { path: 'listar', component: ListarSegurosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
