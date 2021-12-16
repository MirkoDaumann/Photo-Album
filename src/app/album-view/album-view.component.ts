import { Component, OnInit } from '@angular/core';
import { take } from "rxjs/operators";

import { AlbumService } from "../../shared/services/album.service";
import { PhotoAlbum } from "../../shared/interfaces/photo-album";
import { UserDataService } from "../../shared/services/user-data.service";
import { UserOverviewData } from "../../shared/interfaces/user-overview-data";
import { UserPhotoAlbum } from "../../shared/interfaces/user-photo-album";

@Component({
  selector: 'pa-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.scss']
})
export class AlbumViewComponent implements OnInit {
  public userIDs: string;
  public photoAlbums: UserPhotoAlbum[] = [];
  public selectedRows: UserOverviewData[] = [];

  constructor(private readonly albumService: AlbumService,
              private readonly userDataService: UserDataService) {
  }

  public ngOnInit(): void {
    this.userDataService.getSelectedTableRows$().pipe(take(1)).subscribe((selectedRows: UserOverviewData[]) => {
      this.selectedRows = selectedRows;
    });

    this.getPhotoAlbums();
  }

  public reload(): void {
    this.getPhotoAlbums();
  }

  private filterAlbums(albums: PhotoAlbum[]): void {
    this.selectedRows.forEach((row: UserOverviewData) => {
      const foundItems = albums.filter((album: PhotoAlbum) => album.userId === row.id)
      this.photoAlbums = [...this.photoAlbums, { name: row.name, albums: foundItems }];
    })
  }

  private getPhotoAlbums(): void {
    this.albumService.getPhotoAlbums().pipe(take(1)).subscribe((albums: PhotoAlbum[]) => {
      this.filterAlbums(albums);
    });
  }
}
