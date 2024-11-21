import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Required for routing

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Enable routing in the main component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Standalone Angular App';
}
