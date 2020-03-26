import { LancamentopesquisaComponent } from './lancamentos/lancamentopesquisa/lancamentopesquisa.component';
import { CategoriaService } from './categorias/categoria.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule} from 'primeng/components/confirmdialog/confirmdialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/fr';


import { CoreModule } from './core/core.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { ConfirmationService } from 'primeng/components/common/api';
import { RouterModule, Routes } from '@angular/router';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ConfirmDialogModule,

    CoreModule,
    LancamentosModule,
    PessoasModule,
    ToastyModule.forRoot(),
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    Title,
    ConfirmationService,
    CategoriaService,
   { provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
