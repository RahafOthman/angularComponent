import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-eight',
  templateUrl: './eight.component.html',
  styleUrls: ['./eight.component.css']
})
export class EightComponent implements OnInit {
  @Input() MinValueRecived = 0 ; 
  @Input() MaxValueRecived = 0 ; 
  constructor() { }

  ngOnInit(): void {
  }


}
