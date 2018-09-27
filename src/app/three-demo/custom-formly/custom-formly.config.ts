import { CustomFormlyInputComponent } from './types/input.type';
import { CustomFormlyRadioComponent } from './types/radio.type';
import { CustomFormlySelectComponent } from './types/select.type';
import { ValidationManipulator } from './manipulators/validation-message.manipulator';
import { FormlyWrapperDescriptionComponent } from './wrappers/formly-description.wrapper';
import { FormlyWrapperValidationMessagesComponent } from './wrappers/validation-message.wrapper';
import { CustomFormlyColorComponent } from './types/color.type';

export const CustomFormlyConfig = {
  types: [
    {
      name: 'input',
      component: CustomFormlyInputComponent,
      wrappers: ['custom-description']
    },
    {
        name: 'color',
        component: CustomFormlyColorComponent,
        wrappers: []
      },
    {
      name: 'radio',
      component: CustomFormlyRadioComponent,
      wrappers: [],
      defaultOptions: {
        templateOptions: {
          options: []
        }
      }
    },
    {
      name: 'select',
      component: CustomFormlySelectComponent,
      wrappers: [],
      defaultOptions: {
        templateOptions: {
          options: []
        }
      }
    }
  ],
  wrappers: [
    {
      name: 'custom-description',
      component: FormlyWrapperDescriptionComponent
    },
    {
      name: 'validation-message',
      component: FormlyWrapperValidationMessagesComponent
    }
  ],
  validationMessages: [
    { name: 'required', message: 'Это поле обязательно для заполнения' },
  ],
  manipulators: [{ class: ValidationManipulator, method: 'run' }]
};
