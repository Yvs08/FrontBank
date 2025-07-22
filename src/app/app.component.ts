import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, HttpClientModule],
  standalone: true,
  styleUrl: './app.css'
})
export class AppComponent {
  // title = signal('bank-frontEnd');
   protected readonly title = 'My bank';
}
