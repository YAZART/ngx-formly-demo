import { CustomFormlyInputComponent } from './types/input.type';
import { CustomFormlyRadioComponent } from './types/radio.type';
import { CustomFormlySelectComponent } from './types/select.type';

export const CustomFormlyConfig = {
    types: [
         {
            name: 'input',
            component: CustomFormlyInputComponent,
            wrappers: [],
          },
          {
            name: 'radio',
            component: CustomFormlyRadioComponent,
            wrappers: [],
            defaultOptions: {
              templateOptions: {
                options: [],
              },
            },
          },
          {
            name: 'select',
            component: CustomFormlySelectComponent,
            wrappers: [],
            defaultOptions: {
              templateOptions: {
                options: [],
              },
            },
          },
    ],

};
