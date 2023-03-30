import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyListComponent } from './components/my-list.component';
import { MyListItemDefDirective } from './my-list-item-def.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [MyListComponent, MyListItemDefDirective],
  exports: [MyListComponent, MyListItemDefDirective],
})
export class MyListModule {}
