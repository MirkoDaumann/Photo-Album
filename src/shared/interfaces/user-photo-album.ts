import { PhotoAlbum } from "./photo-album";

export interface UserPhotoAlbum {
  name: string;
  albums: PhotoAlbum[];
  userId: number;
}
