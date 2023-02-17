import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { COMPONENTS } from './components';
import { LoginButtonComponent } from './components/buttons/login-button.component';

@NgModule({
  declarations: [
    ...COMPONENTS,
    LoginButtonComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ...COMPONENTS,
    LoginButtonComponent
  ],
})
export class SharedModule {}
