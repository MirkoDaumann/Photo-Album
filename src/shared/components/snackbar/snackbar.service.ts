import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

import { SnackbarComponent } from "./snackbar.component";
import { PanelClass } from "../../interfaces/panel-class";

@Injectable()
export class SnackbarService {
  private durationInSeconds = 5;

  constructor(private readonly snackBar: MatSnackBar) {
  }

  public openSnackBar(headline: string, text: string, panelClass: PanelClass, durationInSeconds?: number): void {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: {
        headline,
        text
      },
      panelClass: panelClass,
      duration: (durationInSeconds || this.durationInSeconds) * 1000,
    })
  }
}
