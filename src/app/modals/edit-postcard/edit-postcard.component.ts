import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Type } from '../../interfaces/postcard';

@Component({
  selector: 'app-edit-postcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-postcard.component.html',
  styleUrl: './edit-postcard.component.scss'
})
export class EditPostcardComponent {

  types = Object.values(Type).filter((x) => typeof(x) == typeof("p"))
}
