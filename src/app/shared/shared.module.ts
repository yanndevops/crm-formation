import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from '../templates/templates.module';
import { BtnComponent } from './components/btn/btn.component';
import { TableDarkComponent } from './components/table-dark/table-dark.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { TextModule } from '../text/text.module';
import { TrashBtnComponent } from './components/trash-btn/trash-btn.component';



@NgModule({
  declarations: [TableLightComponent, BtnComponent, TotalPipe, StateDirective, TableDarkComponent, TrashBtnComponent],
  imports: [
    CommonModule,
    RouterModule,
    TemplatesModule,
    TextModule
  ],
  exports: [TableLightComponent, BtnComponent, TotalPipe, StateDirective, TableDarkComponent, TemplatesModule, TextModule, TrashBtnComponent]
})
export class SharedModule { }


