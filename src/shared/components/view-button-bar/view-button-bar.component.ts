import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ApplicationRoutes } from "../../interfaces/application-routes";
import { Router } from "@angular/router";

@Component({
  selector: "pa-view-button-bar",
  templateUrl: "./view-button-bar.component.html",
  styleUrls: ["./view-button-bar.component.scss"],
})
export class ViewButtonBarComponent {
  @Input() public routerUrl: ApplicationRoutes;
  @Output() public isReloading$: EventEmitter<boolean> = new EventEmitter<boolean>();
  public isReloading = false;

  constructor(private readonly router: Router) {
  }

  public navigateTo(route: ApplicationRoutes): void {
    this.router.navigate([`${route}`]);
  }

  public reload(): void {
    this.isReloading = true;
    this.isReloading$.next(true);

    setTimeout(() => {
      this.isReloading = false;
    }, 10000)
  }
}
