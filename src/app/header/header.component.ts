import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'pa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public title: string = "Photo Album";

  public changeTitle(): void {
    this.title = this.title === "Photo Album" ? "Easter Egg" : "Photo Album";
  }
}

