import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoticeCardComponent } from "./Components/notice-card/notice-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NoticeCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blog';
}
