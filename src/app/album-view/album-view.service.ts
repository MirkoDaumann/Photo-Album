import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../environments/environment";
import { PhotoAlbum } from "../../shared/interfaces/photo-album";

@Injectable({ providedIn: "root" })
export class AlbumViewService {
  public baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) {
  }

  public getPhotoAlbums(): Observable<PhotoAlbum[]> {
    return this.httpClient.get(`${ this.baseUrl }/albums`) as Observable<PhotoAlbum[]>;
  }

  // Does not really exist, so no type
  public createPhotoAlbum(userId: number, name: string): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/albums`, {userId, name});
  }
}
