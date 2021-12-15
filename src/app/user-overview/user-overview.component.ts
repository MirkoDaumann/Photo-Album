import { Component, OnInit } from '@angular/core';
import { take } from "rxjs/operators";

import { UserService } from "../../shared/services/user.service";
import { UserOverviewData } from "../../shared/interfaces/user-overview-data";

@Component({
  selector: 'pa-user-overview',
  templateUrl: './user-overview.component.html',
})
export class UserOverviewComponent implements OnInit {
  public userOverviewData: UserOverviewData[];

  constructor(private readonly userService: UserService) {
  }

  public ngOnInit(): void {
    this.userService.getUsers().pipe(take(1)).subscribe((userData: UserOverviewData[]) => {
      this.userOverviewData = userData;
    }, (error: Error) => {
      console.error("Error: " + error)
      // Every Component could Error-handle it's self here too.
    })
  }
}
