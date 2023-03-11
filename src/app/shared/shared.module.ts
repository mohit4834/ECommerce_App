import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoutButtonComponent } from './components/buttons/logout-button.component';

@NgModule({
  declarations: [
    LogoutButtonComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    LogoutButtonComponent
  ],
})
export class SharedModule {}
