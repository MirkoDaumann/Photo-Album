import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PhotoAlbum } from "../../shared/interfaces/photo-album";

@Injectable({ providedIn: "root" })
export class AlbumViewService {
  public baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) {
  }

  public getPhotoAlbums(): Observable<any> {
    return this.httpClient.get(`${ this.baseUrl }/albums`);
  }

  public createPhotoAlbum(userId: number, name: string): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/albums`, {userId, name});
  }
}
