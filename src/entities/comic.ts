export interface IThumbnail {
  path: string;
  extension: string;
}

export interface IComic {
  id: number;
  title: string;
  thumbnail: IThumbnail;
}

class Comic implements IComic {
  id: number;
  title: string;
  thumbnail: IThumbnail;

  constructor(comics: IComic) {
    this.id = comics.id;
    this.title = comics.title;
    this.thumbnail = comics.thumbnail;
  }
}

export default Comic;