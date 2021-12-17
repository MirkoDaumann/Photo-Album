import { Component, OnInit } from '@angular/core';
import { take } from "rxjs/operators";
import { Router } from "@angular/router";

import { AlbumViewService } from "./album-view.service";
import { PhotoAlbum } from "../../shared/interfaces/photo-album";
import { UserDataService } from "../../shared/services/user-data.service";
import { UserOverviewData } from "../../shared/interfaces/user-overview-data";
import { UserPhotoAlbum } from "../../shared/interfaces/user-photo-album";
import { ApplicationRoutes } from "../../shared/interfaces/application-routes";
import { AlbumInformation } from "../../shared/interfaces/album-information";

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

  constructor(private readonly albumService: AlbumViewService,
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

  public navigateTo(route: ApplicationRoutes, selectedAlbum?: PhotoAlbum): void {
    if (route === "photoView" && selectedAlbum) {
      this.setSelectedPhotoAlbum(selectedAlbum);
    }

    this.router.navigate([`${ route }`]);
  }

  public createAlbum(userId: number, index: number): void {
    this.albumService.createPhotoAlbum(userId, this.albumNames[index]).subscribe(() => {
      // get the new Photo-Album back and add it to this.photoAlbums
    }, () => {
      console.error('Could not create a Album');
    });
  }

  private setSelectedPhotoAlbum(selectedAlbum: PhotoAlbum): void {
    this.userDataService.setSelectedPhotoAlbum$({ id: selectedAlbum?.id, title: selectedAlbum?.title });
  }

  private filterAlbums(albums: PhotoAlbum[]): void {
    this.photoAlbums = [];
    this.selectedRows.forEach((row: UserOverviewData) => {
      const foundItems = albums.filter((album: PhotoAlbum) => album.userId === row.id);
      this.photoAlbums = [...this.photoAlbums, { name: row.name, albums: foundItems, userId: row.id }];
    });
  }

  private getPhotoAlbums(): void {
    this.albumService.getPhotoAlbums().pipe(take(1)).subscribe((albums: PhotoAlbum[]) => {
      this.filterAlbums(albums);
    });
  }
}
