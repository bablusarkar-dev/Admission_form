import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { Form } from './Components/form/form';
// import { Addmission } from './Components/addmission/addmission';
// import { PracticeCode } from './Components/practice-code/practice-code';
import { Home } from './Components/home/home';
import { About } from './Components/about/about';

@Component({
  selector: 'app-root',
  // imports: [RouterLink,RouterOutlet,Form,Addmission,PracticeCode,Home,About],
  imports: [RouterLink,RouterOutlet,Home,About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
   title = signal('admission-form');

   ngOnInit(): void {
     console.log("NgOninit is working        !")
   }
}
