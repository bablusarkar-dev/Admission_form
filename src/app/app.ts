import { Component, signal } from '@angular/core';
import { Form } from './Components/form/form';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Addmission } from './Components/addmission/addmission';

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet,Form,Addmission],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('admission-form');
}
