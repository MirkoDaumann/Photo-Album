import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PhotoAlbum } from "../interfaces/photo-album";

@Injectable({ providedIn: "root" })
export class AlbumService {
  public baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) {
  }

  public getPhotoAlbums(): Observable<any> {
    return this.httpClient.get(`${ this.baseUrl }/albums`);
  }
}
