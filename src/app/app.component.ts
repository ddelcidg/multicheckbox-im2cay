import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'multicheckbox',
      type: 'multicheckbox',
      templateOptions: {
        label: 'Multi checkbox',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
          { value: 3, label: 'Option 3' },
          { value: 4, label: 'Option 4' },
          { value: 5, label: 'Option 5' },
          { value: 6, label: 'Option 6' },
          { value: 7, label: 'Option 7' },
          { value: 8, label: 'Option 8' },
        ],
        valueProp: 'value',
        selectedProp: 'selected',
      },
      defaultValue: {
        option1: false,
        option2: true,
        option3: true,
      },
    },
  ];

  submit(model) {
    alert(this.form.valid);
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
