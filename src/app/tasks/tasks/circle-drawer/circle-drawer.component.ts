// Mostly adapted from Rich Harris's code for Svelte at https://github.com/sveltejs/v2.svelte.dev/tree/master/content/examples
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-circle-drawer',
  templateUrl: './circle-drawer.component.html',
  styleUrls: ['./circle-drawer.component.scss']
})
export class CircleDrawerComponent {

  @Input() width: number = 500;
  @Input() height: number = 500;

  i = 0;
  undoStack: {x: number, y: number, r: number}[][] = [[]];
  circles: {x: number, y: number, r: number}[] = [];
  selected: {x: number, y: number, r: number};
  adjusting = false;
  adjusted = false;

  constructor() { }

  onClick(event: MouseEvent) {
    if (this.adjusting) {
      this.adjusting = false;
      if (this.adjusted) { this.push(); }
      return;
    }

    const target = event.target;
    const dim = target.getBoundingClientRect();
    const x = event.clientX - dim.left;
    const y = event.clientY - dim.top;

    const circle = {
      x,
      y,
      r: 50
    };

    this.circles = this.circles.concat(circle);
    this.selected = circle;

    this.push();
  }

  adjust(event) {
    this.selected.r = +event.target.value;
    this.adjusted = true;
  }

  adjustCircle(circle, event: MouseEvent) {
    event.preventDefault();
    this.adjusting = !this.adjusting;
    if (this.adjusting) { this.selected = circle; }
  }

  select(circle, event) {
    if (!this.adjusting) {
      event.stopPropagation();
      this.selected = circle;
    }
  }

  push() {
    this.i++;
    const newUndoStack = this.undoStack.slice(0, this.i);
    newUndoStack.push(this.circles);
    this.undoStack = newUndoStack;
  }

  undo() {
    this.circles = this.undoStack[this.i -= 1];
    this.adjusting = false;
  }

  redo() {
    this.circles = this.undoStack[this.i += 1];
    this.adjusting = false;
  }

}
