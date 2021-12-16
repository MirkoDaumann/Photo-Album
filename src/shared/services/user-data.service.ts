import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { UserOverviewData } from "../interfaces/user-overview-data";

@Injectable({ providedIn: "root" })
export class UserDataService {
  private userData$ = new BehaviorSubject<UserOverviewData[]>([]);

  public getUserData$(): BehaviorSubject<UserOverviewData[]> {
    return this.userData$
  }

  public setUserData$(userData: UserOverviewData[]): void {
    this.userData$.next(userData);
  }
}
