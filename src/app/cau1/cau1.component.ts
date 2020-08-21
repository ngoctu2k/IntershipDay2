import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cau1',
  templateUrl: './cau1.component.html',
  styleUrls: ['./cau1.component.css']
})
export class Cau1Component implements OnInit {
  arr:any = ['a', 'b', 'c', 'd'];
  constructor() { }

  ngOnInit(): void {
  }

}
