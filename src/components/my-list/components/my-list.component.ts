import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { MyListItemDefDirective } from '../my-list-item-def.directive';

@Component({
  selector: 'my-list',
  template: `
    <div *ngFor="let item of items">
      <ng-container [ngTemplateOutlet]="listItemTpl" [ngTemplateOutletContext]="{ $implicit: item }"></ng-container>
    </div>
  `,
})
export class MyListComponent {
  @Input() items: any[];

  @ContentChild(MyListItemDefDirective, { read: TemplateRef })
  listItemTpl: TemplateRef<any>;
}
