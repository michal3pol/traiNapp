import { Component } from '@angular/core';
import { InputChildComponent } from '../input-child/input-child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-parent',
  standalone: true,
  imports: [
    InputChildComponent,
    CommonModule
  ],
  template: `
    <div class="lister">
      <div class="component-description">
         Lister
      </div>
      <!-- noElements is an Input parameter -->
      <app-input-child
        [elementsCount]="listName.length"
        (newInputEvent)="addName($event)"
        (clearListEvent)="clearList()">
      </app-input-child>
      <!-- newInputEvent is event defined in input-child that emits string -->

        <ul>
          <li *ngFor="let item of listName">{{item}}</li>
        </ul>

    </div>
  `,
  styleUrl: './list-parent.component.scss'
})
export class ListParentComponent {

  listName: string[] = [];

  addName(value: string) {
    this.listName.push(value);
  }

  clearList() {
    this.listName = [];
  }

}
