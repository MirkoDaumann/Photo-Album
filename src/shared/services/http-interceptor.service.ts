import { Injectable } from "@angular/core";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { SnackbarService } from "../components/snackbar/snackbar.service";

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private readonly snackbarService: SnackbarService) {
  }

  // Globally throw an Error notification
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        this.snackbarService.openSnackBar("Error", "There was an Error. Sorry.", "error-snackbar");
        return throwError(error.message);
      })
    );
  }
}
