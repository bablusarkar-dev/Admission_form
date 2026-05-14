import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterLink } from "@angular/router";

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit{
  private route = inject(ActivatedRoute)

  ngOnInit(){
    // this is first way to get urldata
    // const id=this.route.snapshot.paramMap.get('id')
    // console.log(id)


    // this is second way to get data
    this.route.params.subscribe({
      next:(val)=>{
        console.log(val['id'])
      },error(e){
        console.log(e)
      }
    })
  }
}
