import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { take } from "rxjs/operators";

import { PhotoViewService } from "./photo-view.service";
import { PhotoMetadata } from "../../shared/interfaces/photo-metadata";
import { UserDataService } from "../../shared/services/user-data.service";
import { AlbumInformation } from "../../shared/interfaces/album-information";
import { PhotoAlbum } from "../../shared/interfaces/photo-album";
import { UserOverviewData } from "../../shared/interfaces/user-overview-data";
import { PhotoViewData } from "../../shared/interfaces/photo-view-data";

@Component({
  selector: 'pa-photo-view',
  templateUrl: './photo-view.component.html',
})
export class PhotoViewComponent implements OnInit {
  public photos: PhotoViewData[] = [];
  public selectedAlbum: AlbumInformation;

  constructor(private readonly photoViewService: PhotoViewService,
              private readonly userDataService: UserDataService,
              private readonly router: Router) {
  }

  public ngOnInit(): void {
    this.userDataService.getSelectedPhotoAlbum$().pipe(take(1)).subscribe((photoAlbum: AlbumInformation) => {
      if (!photoAlbum.id) {
        this.router.navigate(["/userOverview"]);
      }

      this.selectedAlbum = photoAlbum;

      this.getPhotos();
    });
  }

  public reload(): void {
    this.getPhotos();
  }

  private getPhotos(): void {
    this.photoViewService.getPhotos().pipe(take(1)).subscribe((photosMetadata: PhotoMetadata[]) => {
      this.filterPhotos(photosMetadata);
    });
  }

  private filterPhotos(photosMetadata: PhotoMetadata[]): void {
    this.photos = [];
    photosMetadata.forEach((photoMetaData: PhotoMetadata) => {
      if (photoMetaData.albumId === this.selectedAlbum.id) {
        this.photos.push({ albumName: this.selectedAlbum.title, photoMetadata: photoMetaData });
      }
    });
  }
}
