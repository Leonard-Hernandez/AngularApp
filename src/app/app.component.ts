import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Hola mundo angular desde el componente!!!';

  users: string[] = ['pepe', 'juan', 'ana', 'pedro'];

  visible: boolean = false;

  setVisible():void {
    this.visible = !this.visible;
  }
}
