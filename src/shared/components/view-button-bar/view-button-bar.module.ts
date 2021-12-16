import { NgModule } from "@angular/core";
import { ViewButtonBarComponent } from "./view-button-bar.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [ViewButtonBarComponent],
  exports: [
    ViewButtonBarComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule
  ]
})
export class ViewButtonBarModule {
}
