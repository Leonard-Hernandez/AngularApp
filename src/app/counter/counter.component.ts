import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit{
  counter: number = 0;


  ngOnInit(): void {
    this.counter = parseInt(localStorage.getItem('counter')!) || 0;
    console.log('creando componentes')
  }


  setCounter(): void {
    this.counter++;
    localStorage.setItem('counter', this.counter.toString());
  }

}
