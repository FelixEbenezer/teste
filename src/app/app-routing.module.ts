import { LancamentopesquisaComponent } from './lancamentos/lancamentopesquisa/lancamentopesquisa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LancamentocadastroComponent } from './lancamentos/lancamentocadastro/lancamentocadastro.component';
import { PessoapesquisaComponent } from './pessoas/pessoapesquisa/pessoapesquisa.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { LancamentosRoutingModule } from './lancamentos/lancamentos-routing.module';
import { PessoasRoutingModule } from './pessoas/pessoas-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'lancamentos', pathMatch: 'full' },
  { path: 'pessoas', component: PessoapesquisaComponent },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' }
];

@NgModule({
  imports: [
    LancamentosRoutingModule,
    PessoasRoutingModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
