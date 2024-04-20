// get-involved.component.ts
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-get-involved',
  templateUrl: './get-involved.component.html',
  styleUrls: ['./get-involved.component.css']
})
export class GetInvolvedComponent {

  constructor(private snackBar: MatSnackBar) { }

  submitForm() {
    // Perform form submission logic here
    // For example, you can show a success or error message using MatSnackBar
    this.snackBar.open('Form submitted successfully', 'Close', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }
}
