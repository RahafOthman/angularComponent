import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  h1Color = 'green';
  minValueRecived = 0 ; 
  maxValueRecived = 0 ; 

  constructor() { }

  ngOnInit(): void {
  }
  recivedMinValue(data:any):void{
    this.minValueRecived=data ; 
    console.log(this.minValueRecived+" this is one");
  }
  recivedMaxValue(data:any):void{
    this.maxValueRecived = data;
    console.log(this.maxValueRecived+" this is max in one");
  }
  
}
