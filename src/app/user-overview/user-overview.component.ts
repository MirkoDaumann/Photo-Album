import { Component, OnDestroy, OnInit } from '@angular/core';
import { take, takeUntil } from "rxjs/operators";
import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";

import { UserOverviewData } from "../../shared/interfaces/user-overview-data";
import { UserDataService } from "../../shared/services/user-data.service";
import { Subject } from "rxjs";

@Component({
  selector: 'pa-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss'],
})
export class UserOverviewComponent implements OnInit, OnDestroy {
  public userOverviewData: UserOverviewData[];
  public displayedColumNames: string[] = ['select', 'Name', 'Address'];
  public selection = new SelectionModel<UserOverviewData>(true, []);
  public dataSource: MatTableDataSource<UserOverviewData>;
  private destroy$: Subject<boolean> = new Subject();

  constructor(private readonly userDataService: UserDataService,
              private readonly router: Router) {
  }

  public ngOnInit(): void {
    this.userDataService.getUserData$().pipe(takeUntil(this.destroy$)).subscribe((userData: UserOverviewData[]) => {
      this.dataSource = new MatTableDataSource<UserOverviewData>(userData);
      this.userOverviewData = userData;
    })
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public navigateToAlbumView(): void {
    this.userDataService.setSelectedTableRows$(this.selection.selected);
    this.router.navigate(['/albumView']);
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
