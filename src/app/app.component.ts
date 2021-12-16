import { Component, OnInit } from '@angular/core';
import { take } from "rxjs/operators";
import { UserOverviewData } from "../shared/interfaces/user-overview-data";
import { MatTableDataSource } from "@angular/material/table";
import { UserService } from "../shared/services/user.service";
import { UserDataService } from "../shared/services/user-data.service";

@Component({
  selector: 'pa-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private readonly userService: UserService,
              private readonly userDataService: UserDataService) {
  }

  public ngOnInit(): void {
    this.userService.getUsers().pipe(take(1)).subscribe((userData: UserOverviewData[]) => {
      this.userDataService.setUserData$(userData);
    }, (error: Error) => {
      console.error("Error: " + error)
      // Every Component could Error-handle it's self here too.
    })
  }
}
