import { Component } from '@angular/core';
import { createLinkedSignal } from '@angular/core/primitives/signals';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-admin',
  imports: [RouterLink, FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  model: any = {}
  cover!: string
  cover_file: any
  onFileSelected(event: any) {
    const file = event.target.files[0]
    if (file) {
      this.cover_file = file
      const reader = new FileReader();
      console.log(reader)
      reader.onload = () => {
        const dataUrl = reader.result!.toString();
        this.cover = dataUrl
        console.log('image', this.cover)
      }
      reader.readAsDataURL(file)

    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      console.log("form is invalid")
      form.control.markAllAsTouched();
      return
    } else {

      console.log(form.value)
    }
  }


}
