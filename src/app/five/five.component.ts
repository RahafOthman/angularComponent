import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {
  @Output() outputData = new EventEmitter<any>();
  @Output() outputdata2 = new EventEmitter<any>() ; 
  MinValue = -10 ; 
  MaxValue = 10 ; 
  constructor() { }

  ngOnInit(): void {
  }
  
  sendData(minValue:string,maxValue:string):void{
    this.outputData.emit(minValue); 
    this.outputdata2.emit(maxValue);
  }
  
}
