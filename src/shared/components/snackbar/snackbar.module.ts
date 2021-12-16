import { NgModule } from "@angular/core";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { SnackbarComponent } from "./snackbar.component";
import { SnackbarService } from "./snackbar.service";

@NgModule({
  declarations: [SnackbarComponent],
  imports: [MatSnackBarModule],
  providers: [SnackbarService],
  entryComponents: [SnackbarComponent]
})
export class SnackbarModule {
}
