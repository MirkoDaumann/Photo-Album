import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { UserOverviewData } from "../interfaces/user-overview-data";
import { AlbumInformation } from "../interfaces/album-information";

@Injectable({ providedIn: "root" })
export class UserDataService {
  private userData$ = new BehaviorSubject<UserOverviewData[]>([]);
  private selectedTableRows$ = new BehaviorSubject<UserOverviewData[]>([]);
  private selectedPhotoAlbum$ = new BehaviorSubject<AlbumInformation>({ title: "", id: 0 });

  public getUserData$(): BehaviorSubject<UserOverviewData[]> {
    return this.userData$;
  }

  public setUserData$(userData: UserOverviewData[]): void {
    this.userData$.next(userData);
  }

  public getSelectedTableRows$(): BehaviorSubject<UserOverviewData[]> {
    return this.selectedTableRows$;
  }

  public setSelectedTableRows$(selectedTableRows: UserOverviewData[]): void {
    this.selectedTableRows$.next(selectedTableRows);
  }

  public getSelectedPhotoAlbum$(): BehaviorSubject<AlbumInformation> {
    return this.selectedPhotoAlbum$;
  }

  public setSelectedPhotoAlbum$(selectedPhotoAlbum: AlbumInformation): void {
    this.selectedPhotoAlbum$.next(selectedPhotoAlbum)
  }
}
