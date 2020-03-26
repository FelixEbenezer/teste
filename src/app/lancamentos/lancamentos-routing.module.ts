import { LancamentopesquisaComponent } from './lancamentopesquisa/lancamentopesquisa.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LancamentocadastroComponent } from './lancamentocadastro/lancamentocadastro.component';


const routes: Routes = [
  { path: 'lancamentos', component: LancamentopesquisaComponent },
  { path: 'lancamentos/novo', component: LancamentocadastroComponent },
  { path: 'lancamentos/:codigo', component: LancamentocadastroComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LancamentosRoutingModule { }
