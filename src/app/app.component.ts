import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from "./components/title/title.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { PostcardsComponent } from "./components/postcards/postcards.component";
import { EditPostcardComponent } from "./modals/edit-postcard/edit-postcard.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleComponent, NavbarComponent, PostcardsComponent, EditPostcardComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'disc-the-world';
}
