import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { HeaderComponent } from './header/header.component';
import { HttpInterceptorService } from "../shared/services/http-interceptor.service";
import { SnackbarModule } from "../shared/components/snackbar.module";

@NgModule({
  declarations: [
    AppComponent,
    UserOverviewComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SnackbarModule
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
