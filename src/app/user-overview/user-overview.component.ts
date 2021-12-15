import { Component, OnInit } from '@angular/core';
import { take } from "rxjs/operators";

import { UserService } from "../../services/user.service";
import { UserOverviewData } from "../../interfaces/user-overview-data";

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
    })
  }
}
