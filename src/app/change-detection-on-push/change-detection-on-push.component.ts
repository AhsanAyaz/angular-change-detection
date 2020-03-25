import { Component, OnInit } from '@angular/core';
import { CdTreePageComponent } from '../shared/components/cd-tree-page/cd-tree-page.component';

@Component({
  selector: 'app-change-detection-on-push',
  templateUrl: './change-detection-on-push.component.html',
  styleUrls: ['./change-detection-on-push.component.scss']
})
export class ChangeDetectionOnPushComponent extends CdTreePageComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
