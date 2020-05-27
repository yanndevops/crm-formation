import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { TotalComponent } from './pipes/total/total.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';



@NgModule({
  declarations: [TableLightComponent, BtnComponent, TotalComponent, TotalPipe, StateDirective],
  imports: [
    CommonModule
  ],
  exports: [TableLightComponent, BtnComponent, TotalComponent, TotalPipe, StateDirective]
})
export class SharedModule { }
