import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  @Input() MinValueInput = 0 ; 
  @Input() MaxValueInput = 0 ; 
  
  constructor() { }

  ngOnInit(): void {
  }
  
}
