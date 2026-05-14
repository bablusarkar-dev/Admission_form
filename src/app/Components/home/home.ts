// import { Component, inject } from '@angular/core';
import { Component } from '@angular/core';
// import { Router, RouterLink, RouterModule } from "@angular/router";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // this is first methode use construtor  then navigate. it is old methode
  // constructor(private router:Router){}
  // navigate(){
  //   this.router.navigate(['/about'])
  // }

  // direct inject the router. it is new methode
  // private router = inject(Router)
  // navigate(){
  //   this.router.navigate(['/about'])
  // }

  val:number=Math.floor(Math.random()*10)
}
