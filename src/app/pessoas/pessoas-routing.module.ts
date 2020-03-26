import { PessoacadastroComponent } from './pessoacadastro/pessoacadastro.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PessoapesquisaComponent } from './pessoapesquisa/pessoapesquisa.component';


const routes: Routes = [
  { path: 'pessoas', component: PessoapesquisaComponent },
  { path: 'pessoas/novo', component: PessoacadastroComponent },
  { path: 'pessoas/:codigo', component: PessoacadastroComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
