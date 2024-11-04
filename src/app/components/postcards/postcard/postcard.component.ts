import { Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { Postcard, Type } from '../../../interfaces/postcard';

@Component({
  selector: 'app-postcard',
  standalone: true,
  imports: [],
  templateUrl: './postcard.component.html',
  styleUrl: './postcard.component.scss'
})
export class PostcardComponent {

  @Input()
  postcard!:Postcard

  types = Object.values(Type).filter((x) => typeof(x) == typeof("p"))

}
