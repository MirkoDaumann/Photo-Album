import { Component, OnInit } from '@angular/core';
import { take } from "rxjs/operators";

import { AlbumService } from "../../shared/services/album.service";
import { PhotoAlbum } from "../../shared/interfaces/photo-album";
import { UserDataService } from "../../shared/services/user-data.service";
import { UserOverviewData } from "../../shared/interfaces/user-overview-data";
import { UserPhotoAlbum } from "../../shared/interfaces/user-photo-album";
import { Router } from "@angular/router";
import { ApplicationRoutes } from "../../shared/interfaces/application-routes";

@Component({
  selector: 'pa-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.scss']
})
export class AlbumViewComponent implements OnInit {
  public userIDs: string;
  public photoAlbums: UserPhotoAlbum[] = [];
  public selectedRows: UserOverviewData[] = [];
  public albumNames: string[] = [];
  public isReloading = false;

  constructor(private readonly albumService: AlbumService,
              private readonly userDataService: UserDataService,
              private readonly router: Router) {
  }

  public ngOnInit(): void {
    this.userDataService.getSelectedTableRows$().pipe(take(1)).subscribe((selectedRows: UserOverviewData[]) => {
      if (!selectedRows.length) {
        this.router.navigate(["/userOverview"]);
      }
      this.selectedRows = selectedRows;
    });

    this.getPhotoAlbums();
  }

  public reload(): void {
    this.getPhotoAlbums();
  }

  public navigateTo(route: ApplicationRoutes): void {
    this.router.navigate([`${route}`]);
  }

  public createAlbum(userId: number, index: number): void {
    this.albumService.createPhotoAlbum(userId, this.albumNames[index]).subscribe(() => {
      // get the new Photo-Album back and add it to this.photoAlbums
    }, () => {
      console.error('Could not create a Album');
    });
  }

  private filterAlbums(albums: PhotoAlbum[]): void {
    this.photoAlbums = [];
    this.selectedRows.forEach((row: UserOverviewData) => {
      const foundItems = albums.filter((album: PhotoAlbum) => album.userId === row.id)
      this.photoAlbums = [...this.photoAlbums, { name: row.name, albums: foundItems, userId: row.id }];
    })
  }

  private getPhotoAlbums(): void {
    this.isReloading = true;
    this.albumService.getPhotoAlbums().pipe(take(1)).subscribe((albums: PhotoAlbum[]) => {
      this.filterAlbums(albums);
      this.isReloading = false;
    }, () => {
      this.isReloading = false;
    });
  }
}
