import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent {
  @Input('active') isActive: boolean;
  @Input('count') count: number;

  errors: string;

  onClick() {
    this.count += this.isActive ? -1 : 1;
    this.isActive = !this.isActive;
  }

}
