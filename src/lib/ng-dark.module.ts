import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgDarkComponent } from './ng-dark.component';

@NgModule({
  declarations: [NgDarkComponent],
  imports: [CommonModule],
  exports: [NgDarkComponent],
})
export class NgDarkModule {}
