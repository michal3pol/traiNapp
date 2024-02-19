import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input-child',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  template: `
    <p>
      Currently there are {{ elementsCount }} elements. 
      <mat-icon (click)="clearList()" title="Clear">clear</mat-icon>
    </p>

    <mat-form-field>
      <mat-label>New name to display</mat-label>
      <input matInput #newItem>
    </mat-form-field>
    
    <button mat-raised-button color="primary" (click)="addNewItem(newItem.value)">
      Add to parent's list
    </button>
  `,
  styleUrl: './input-child.component.scss'
})
export class InputChildComponent {

  @Input() elementsCount: number = 0;

  @Output() newInputEvent = new EventEmitter<string>();
  @Output() clearListEvent = new EventEmitter<boolean>();

  addNewItem(value: string) {
    this.newInputEvent.emit(value);
  }

  clearList() {
    this.clearListEvent.emit(true);
  }

}
