import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { ListParentComponent } from './input-output/list-parent/list-parent.component';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [
    MatIconModule,
    ListParentComponent
  ],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent {

}
