import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-addmission',
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './addmission.html',
  styleUrl: './addmission.css',
})
export class Addmission {

  nameError = ''
  emailError = ''
  genderError = ''
  courseError = ''
  addressError = ''
  gender = ''

  userDataValidation(
    name: string,
    email: string,
    course: string,
    address: string
  ) {

 
    this.nameError = ''
    this.emailError = ''
    this.genderError = ''
    this.courseError = ''
    this.addressError = ''

   
    if (!name) {
      this.nameError = "Name is Required!"
    } else if (name.length < 5 || name.length > 25) {
      this.nameError = "Name must be 5 to 25 characters"
    }


    if (!email) {
      this.emailError = "Email is Required!"
    } else if (!email.includes('@')) {
      this.emailError = "Enter a valid email"
    }

    
    if (!this.gender) {
      this.genderError = "Gender is Required!"
    }

    if (!course) {
      this.courseError = "Course is Required!"
    }

    if (!address) {
      this.addressError = "Address is required"
    } else if (address.length < 5 || address.length > 50) {
      this.addressError = "Address must be 5 to 50 characters"
    }

    
    if (
      !this.nameError &&
      !this.emailError &&
      !this.genderError &&
      !this.courseError &&
      !this.addressError
    ) {

      const userData = {
        name,
        email,
        gender: this.gender,
        course,
        address
      }

      console.log(userData)
      alert(JSON.stringify(userData))
    }
  }
}
