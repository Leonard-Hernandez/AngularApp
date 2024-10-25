import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit{
  counter: number = 0;

  @Input() title!: string;

  @Output() counterEmit: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.counter = parseInt(localStorage.getItem('counter')!) || 0;
    console.log('creando componentes')
  }


  setCounter(): void {
    this.counter++;
    localStorage.setItem('counter', this.counter.toString());
    this.counterEmit.emit(this.counter);
  }

}
