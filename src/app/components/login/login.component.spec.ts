import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Reactive forms imports
import { ReactiveFormsModule } from '@angular/forms';  // <-- Import ReactiveFormsModule

@Component({
  selector: 'app-login',
  standalone: true,  // Mark the component as standalone
  imports: [ReactiveFormsModule],  // <-- Add ReactiveFormsModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form with validation
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // Email validation
      password: ['', Validators.required],  // Password validation
    });
  }

  // Submit form
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
      // You can handle the login logic here, like sending to a server
    } else {
      console.log('Form is invalid');
    }
  }
}
