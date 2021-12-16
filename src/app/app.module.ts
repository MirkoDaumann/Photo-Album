import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTableModule } from "@angular/material/table";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { HeaderComponent } from './header/header.component';
import { HttpInterceptorService } from "../shared/services/http-interceptor.service";
import { SnackbarModule } from "../shared/components/snackbar.module";
import { UserAddressPipe } from "../shared/pipes/user-address.pipe";

@NgModule({
  declarations: [
    AppComponent,
    UserOverviewComponent,
    HeaderComponent,
    UserAddressPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SnackbarModule,
    MatCardModule,
    MatCheckboxModule,
    MatTableModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
