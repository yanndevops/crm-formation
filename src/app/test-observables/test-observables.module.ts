import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ObservablesComponent } from './pages/observables/observables.component';
import { TestObservablesRoutingModule } from './test-observables-routing.module';



@NgModule({
  declarations: [ObservablesComponent],
  imports: [
    CommonModule,
    TestObservablesRoutingModule
  ]
})
export class TestObservablesModule { }
