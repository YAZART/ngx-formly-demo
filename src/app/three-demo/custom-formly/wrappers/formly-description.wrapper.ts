import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-wrapper-description',
  template: `
    <ng-template #fieldComponent></ng-template>
    <div *ngIf="to.description" [style.opacity]="0.5">
        <small>{{ to.description }}</small>
    </div>
    `,
})
export class FormlyWrapperDescriptionComponent extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef }) public fieldComponent: ViewContainerRef;
}
