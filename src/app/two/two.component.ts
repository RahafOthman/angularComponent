import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  minValue = 0 ; 
  maxValue = 0 ; 
  @Output() minValueData = new EventEmitter<any>();
  @Output() maxValueData = new EventEmitter<any>()  ; 
  constructor() { }

  ngOnInit(): void {
  }
  SetMinValue(data1:any):void{
    this.minValue = data1;
    this.minValueData.emit(this.minValue);
  }
  SetMaxValue(data2:any):void{
    this.maxValue = data2;
    this.maxValueData.emit(this.maxValue);
  }
}
