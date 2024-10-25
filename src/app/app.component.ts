import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Hola mundo angular desde el componente!!!';

  subtitle: string = 'Contador con estado de session'

  users: string[] = ['pepe', 'juan', 'ana', 'pedro'];

  visible: boolean = false;

  setVisible():void {
    this.visible = !this.visible;
  }
}
