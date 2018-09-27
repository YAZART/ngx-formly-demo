import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
    selector: 'app-formly-wrapper-validation-messages',
    template: `
      <ng-template #fieldComponent></ng-template>
      <div *ngIf="showError">
          <small class="validation-message" [style.display]="'block'" [style.color]="'red'" [id]="validationId">
              <formly-validation-message [field]="field"></formly-validation-message>
          </small>
      </div>
    `
})
export class FormlyWrapperValidationMessagesComponent extends FieldWrapper {
    @ViewChild('fieldComponent', { read: ViewContainerRef }) public fieldComponent: ViewContainerRef;
    get validationId() {
        return this.field.id + '-message';
    }
}
