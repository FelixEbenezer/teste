import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule} from 'primeng/components/confirmdialog/confirmdialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';


import { CoreModule } from './core/core.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { ConfirmationService } from 'primeng/components/common/api';

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
    ToastyModule.forRoot()
  ],
  providers: [
    ConfirmationService,
   { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
