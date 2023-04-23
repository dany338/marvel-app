export interface IThumbnail {
  path: string;
  extension: string;
}

export interface ICharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: IThumbnail;
}

class Character implements ICharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: IThumbnail;

  constructor(character: ICharacter) {
    this.id = character.id;
    this.name = character.name;
    this.description = character.description;
    this.thumbnail = character.thumbnail;
  }
}

export default Character;