import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LancamentopesquisaComponent } from './lancamentopesquisa/lancamentopesquisa.component';
import { SharedModule } from './../shared/shared.module';

import {TableModule} from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { InputMaskModule } from 'primeng/inputmask';
import { LancamentocadastroComponent } from './lancamentocadastro/lancamentocadastro.component';
import { LancamentoService } from './lancamento.service';


@NgModule({
  declarations: [LancamentopesquisaComponent, LancamentocadastroComponent],
  imports: [
    CommonModule,
    TableModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    FormsModule,
    InputTextareaModule,
    DropdownModule,
    CalendarModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    CurrencyMaskModule,
    InputMaskModule,

    SharedModule,
    HttpClientModule
  ],
  exports: [
    LancamentopesquisaComponent,
    LancamentocadastroComponent],
    providers: [LancamentoService]
})
export class LancamentosModule { }
