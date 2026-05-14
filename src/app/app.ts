import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkWithHref } from '@angular/router';
// import { Form } from './Components/form/form';
// import { Addmission } from './Components/addmission/addmission';
// import { PracticeCode } from './Components/practice-code/practice-code';


@Component({
  selector: 'app-root',
  // imports: [RouterLink,RouterOutlet,Form,Addmission,PracticeCode,Home,About],
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
   title = signal('admission-form');

   ngOnInit() {
     console.log("NgOninit is working!")
   }
}
