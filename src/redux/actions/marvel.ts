import Character from '../../entities/character';
import Comic from '../../entities/comic';
import { getCharacterService, getComicsByCharacterService, getComicByIdService, getComicsService } from '../../services/marvel';
import { MARVEL_CHARACTER_BY_NAME, MARVEL_COMICS_BY_CHARACTERS, MARVEL_COMICS_BY_LIMIT } from '../types/marvel';

export const getCharacterAction = (name: string) => async (dispatch: any) => {
  try {
    const response: Character | unknown | null = await getCharacterService(name);
    dispatch({
      type: MARVEL_CHARACTER_BY_NAME,
      payload: response,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getComicsByCharacterAction = (characterId: number, offset: number, limit: number) => async (dispatch: any) => {
  try {
    const response: Comic[] | [] = await getComicsByCharacterService(characterId, offset, limit);
    console.log('🚀 ~ file: marvel.ts:21 ~ getComicsByCharacterAction ~ response:', response)
    dispatch({
      type: MARVEL_COMICS_BY_CHARACTERS,
      payload: {
        offset,
        limit,
        comics: response,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const getComicByIdAction = (comicId: number) => async (dispatch: any) => {
  try {
    const response: Comic | unknown | null = await getComicByIdService(comicId);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getComicsAction = (offset: number, limit: number) => async (dispatch: any) => {
  try {
    const response: Comic[] | [] = await getComicsService(offset, limit);
    dispatch({
      type: MARVEL_COMICS_BY_LIMIT,
      payload: {
        offset,
        limit,
        comics: response,
      },
    });
  } catch (err) {
    console.log(err);
  }
};