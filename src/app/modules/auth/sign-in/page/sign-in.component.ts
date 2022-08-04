import { Component } from '@angular/core';
import { ACTIONS } from 'src/app/core/const/const';
import { OptionsForm } from '../../form/form.component';

@Component({
  selector: 'app-sign-in',
  template: `
  <div class="formLogin">
    <app-form [options]='options'></app-form>
  </div>
  `,
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  options: OptionsForm = {
    id: ACTIONS.signIn,
    label: ACTIONS.signIn
  }


}
