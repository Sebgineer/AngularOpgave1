import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pal',
  templateUrl: './my-pal.component.html',
  styleUrls: ['./my-pal.component.css']
})
export class MyPalComponent implements OnInit {
  @Input() path: string = "assets/img/Tobias.jpg";
  @Input() text: string = "Input Text"; 

  constructor() { }

  ngOnInit(): void {
  }

}
