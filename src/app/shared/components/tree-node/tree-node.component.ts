import {
  Component,
  OnInit,
  Input,
  DoCheck,
  ChangeDetectorRef,
  NgZone,
  ViewChild,
  ElementRef,
  OnChanges
} from '@angular/core';
import { TreeNode } from '../../../models/tree-node';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent implements OnInit, OnChanges, DoCheck {
  @Input() node: TreeNode;
  @Input() showSpinner = false;
  @ViewChild('elNode', { static: true }) elNode: ElementRef;
  progressVal = 0;
  progressInterval;
  constructor(
    private cdRef: ChangeDetectorRef,
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.node.options = this.node.options || {
      detachRef: false
    };
    if (this.node.options.detachRef) {
      setTimeout(() => this.cdRef.detach(), 500);
    }
  }

  ngOnChanges() {
    if (this.node.options && this.node.options.detachRef) {
      setTimeout(() => this.cdRef.detach(), 500);
    }
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
    if (this.showSpinner) {
      this.zone.runOutsideAngular(() => {
        this.progressInterval = setInterval(() => {
          this.zone.run(() => {
            this.progressVal = (++this.progressVal % 100);
          });
        }, 100);
      });
    }
  }

  ngDoCheck() {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.elNode.nativeElement.classList.add('tree-node__el--on-changes');
      }, 100 * this.node.depth);
      setTimeout(() => {
        this.elNode.nativeElement.classList.remove('tree-node__el--on-changes');
      }, 100 * this.node.depth * 2);
    });
  }

  nodeTap() {
    console.log('clicked');
  }

}
