import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallbackComponent } from './callback.component';
import { CallbackRoutingModule } from './callback-routing.module';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [CallbackComponent],
  imports: [CommonModule, SharedModule, CallbackRoutingModule],
})
export class CallbackModule {}
