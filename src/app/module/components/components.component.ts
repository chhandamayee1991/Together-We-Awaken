import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {
  constructor(private dialog: MatDialog) { }
  // Open the login dialog
  openLoginDialog(): void {
    this.dialog.open(LoginDialogComponent, {
      width: '400px'
    });
  }
}
