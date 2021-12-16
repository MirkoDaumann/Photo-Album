import { Component, OnInit } from '@angular/core';
import { take } from "rxjs/operators";

import { UserService } from "../../shared/services/user.service";
import { UserOverviewData } from "../../shared/interfaces/user-overview-data";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";

@Component({
  selector: 'pa-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss'],
})
export class UserOverviewComponent implements OnInit {
  public userOverviewData: UserOverviewData[];
  public displayedColumNames: string[] = ['select', 'Name', 'Address'];
  public selection = new SelectionModel<UserOverviewData>(true, []);
  public dataSource: MatTableDataSource<UserOverviewData>;

  constructor(private readonly userService: UserService) {
  }

  public ngOnInit(): void {
    this.userService.getUsers().pipe(take(1)).subscribe((userData: UserOverviewData[]) => {

      this.dataSource = new MatTableDataSource<UserOverviewData>(userData);
      this.userOverviewData = userData;
    }, (error: Error) => {
      console.error("Error: " + error)
      // Every Component could Error-handle it's self here too.
    })
  }

  public isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  public masterToggle(): void {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  public checkboxLabel(row?: UserOverviewData): string {
    if (!row) {
      return `${ this.isAllSelected() ? 'deselect' : 'select' } all`;
    }
    return `${ this.selection.isSelected(row) ? 'deselect' : 'select' } row ${ row }`;
  }
}
