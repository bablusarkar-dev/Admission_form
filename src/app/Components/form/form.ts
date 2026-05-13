import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {

  constructor(private router: Router) {}

  emailError: string = '';
  passwordError: string = '';

  validate(email: string, password: string) {

    this.emailError = '';
    this.passwordError = '';

    if (!email) {
      this.emailError = 'Email is required';
    }
    else if (!email.includes('@')) {
      this.emailError = 'Invalid email';
    }
    if (!password) {
      this.passwordError = 'Password is required';
    }
    else if (password.length < 6) {
      this.passwordError = 'Password must be 6 characters';
    }

    if (!this.emailError && !this.passwordError) {

      const loginData = {
        email,
        password
      };
      alert('Form Submitted');
      this.router.navigate(['/addmission']);
    }
  }
}