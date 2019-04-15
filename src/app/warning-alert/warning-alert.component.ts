import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<p>This is a warning, you are in danger!</p>`,
  styles: [`
    p {
      color: rgb(63, 22, 22);
      padding: 10px;
      background-color: rgb(223, 187, 187);
      border: 1px solid rgb(63, 22, 22);
    }
  `]
})
export class WarningAlertComponent {

}
