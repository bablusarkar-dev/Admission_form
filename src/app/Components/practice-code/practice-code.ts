import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-code',
  imports: [],
  templateUrl: './practice-code.html',
  styleUrl: './practice-code.css',
})
export class PracticeCode implements OnInit {
  ngOnInit(): void {
    console.log("Oninit is workig in home components!")
  }
}
