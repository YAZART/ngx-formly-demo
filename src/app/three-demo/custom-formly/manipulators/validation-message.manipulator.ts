import { FormlyFieldConfig, FormlyConfig } from '@ngx-formly/core';

export class ValidationManipulator {
    public run(fc: FormlyConfig) {
        fc.templateManipulators.postWrapper.push((field: FormlyFieldConfig) => {
            if (!field.templateOptions || field.templateOptions.validationWrapper !== false) {
                return 'validation-message';
            }
        });
    }
}
