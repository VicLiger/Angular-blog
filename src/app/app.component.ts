import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoticeCardComponent } from "./Components/notice-card/notice-card.component";
import { HeaderCardComponent } from "./Components/header-card/header-card.component";
import { HeaderTextComponent } from "./Components/header-text/header-text.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NoticeCardComponent, HeaderCardComponent, HeaderTextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blog';
}
