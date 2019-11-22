import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoapesquisaComponent } from './pessoapesquisa/pessoapesquisa.component';
import { SharedModule } from '../shared/shared.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { InputMaskModule } from 'primeng/inputmask';
import { PessoaService } from './pessoa.service';

@NgModule({
  declarations: [PessoapesquisaComponent],
  imports: [
    CommonModule,
    SharedModule,

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

  ],
  exports: [PessoapesquisaComponent],
  providers: [PessoaService]
})
export class PessoasModule { }
