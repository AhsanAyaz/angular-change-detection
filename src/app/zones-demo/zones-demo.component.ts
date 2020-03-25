import { Component, OnInit, NgZone } from '@angular/core';
import { MouseCoords } from '../core/interfaces/mouse-coords';

@Component({
  selector: 'app-zones-demo',
  templateUrl: './zones-demo.component.html',
  styleUrls: ['./zones-demo.component.scss']
})
export class ZonesDemoComponent implements OnInit {

  constructor(private zone: NgZone) { }

  coordinates: MouseCoords = {
    position_x: 0,
    position_y: 0
  };
  moveTimer: any;
  boxInner: any;
  updateDelay = 100;
  isRunningOutsideAngular = false;
  shouldRunWithDelay = false;

  ngOnInit() {
    this.coordinates = {
      position_x: 0,
      position_y: 0
    };
  }

  /**
   * @author Ahsan Ayaz
   * This function is triggered when we click the toggle button to switch whether our mousemove
   * will be handle inside or outsize NgZone
   * @param boxInner {HTMLElement}
   */
  switchProcessingContext(boxInner) {
    this.isRunningOutsideAngular = !this.isRunningOutsideAngular;
    this.shouldRunWithDelay = false;      // reset the delay flag
    if (this.isRunningOutsideAngular) {
      this.zone.runOutsideAngular(() => {
        boxInner.addEventListener('mousemove', this.onMouseMoveNonZone);
      });
    } else {
      this.zone.runOutsideAngular(() => {
        boxInner.removeEventListener('mousemove', this.onMouseMoveNonZone);
      });
    }
  }

  /**
   * @author Ahsan Ayaz
   * Updates the coordinates model
   * @param event
   */
  updateCoordinates($event) {
    const position = {
      position_x: $event.offsetX ? $event.offsetX + 2 : 0,
      position_y: $event.offsetY ? $event.offsetY + 2 : 0
    };
    this.coordinates = position;
    console.log(this.coordinates);
  }

  /**
   * @author Ahsan Ayaz
   * This function toggles the shouldRunWithDelay flag which enables/disables the delayed processing on mousemove
   */
  toggleRunWithDelay() {
    this.shouldRunWithDelay = !this.shouldRunWithDelay;
  }

  /**
   * @author Ahsan Ayaz
   * Handler for Non-NgZone mouse move events
   * Will not update the view on coordinates change until we demand it using `zone.run`
   */
  onMouseMoveNonZone = ($event) => {
    if (this.shouldRunWithDelay) {
      this.updateCoordinatesWithDelay($event);
    } else {
      this.updateCoordinates($event);
    }

  }
  /**
   * @author Ahsan Ayaz
   * Updates the coordinates model but with a delay
   * Reflects changes in view
   * @param event
   */
  updateCoordinatesWithDelay($event) {
    if (this.moveTimer) { clearTimeout(this.moveTimer); }
    this.moveTimer = setTimeout(() => {
      this.zone.run(() => {       // this is what will trigger the view changes
        this.updateCoordinates($event);
      });
    }, this.updateDelay);
  }

  /**
   * @author Ahsan Ayaz
   * The function is directly bound to the box using Angular2 (mousemove) event.
   * Will update the view when the coordinates change
   * @param event
   */
  onMouseMove($event) {
    this.updateCoordinates($event);
  }

}
