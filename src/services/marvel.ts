import api from './api';
import { API_URL_CHARACTERS, API_URL_COMICS, API_COMICS } from '../constants/api';
import Comic, { IComic } from '../entities/comic';
import Character, { ICharacter } from '../entities/character';
import { getHash } from '../utils/getHash';
import { MARVEL_API_PUBLIC_KEY } from '../constants/api';

export const getCharacterService = async (name: string): Promise<Character | unknown | null> => new Promise( async (resolve, reject) => {
  try {
    const TIMESTAMP = Date.now();
    const HASH = getHash(TIMESTAMP);
    const data: any = await api.get(`${API_URL_CHARACTERS}?ts=${TIMESTAMP}&apikey=${MARVEL_API_PUBLIC_KEY}&hash=${HASH}&name=${name}&offset=0&limit=1`);
    if (data.data.code === 200 && data.data.data && data.data.data.results && data.data.data.results.length) {
      resolve(data.data.data.results.map((character: ICharacter) => new Character(character))?.[0]);
    }
  } catch (err) {
    reject(err);
  }
});

export const getComicsByCharacterService = async (characterId: number, offset: number, limit: number): Promise<Comic[] | []> => new Promise( async (resolve, reject) => {
  try {
    const TIMESTAMP = Date.now();
    const HASH = getHash(TIMESTAMP);
    const data: any = await api.get(`${API_URL_CHARACTERS}/${characterId}${API_COMICS}?ts=${TIMESTAMP}&apikey=${MARVEL_API_PUBLIC_KEY}&hash=${HASH}&offset=${offset}&limit=${limit}`);
    if (data.data.code === 200 && data.data.data && data.data.data.results && data.data.data.results.length) {
      resolve(data.data.data.results.map((comic: IComic) => new Comic(comic)));
    } else {
      resolve([]);
    }
  } catch (err) {
    reject(err);
  }
});

export const getComicByIdService = async (comicId: number): Promise<Comic | unknown | null> => new Promise( async (resolve, reject) => {
  try {
    const TIMESTAMP = Date.now();
    const HASH = getHash(TIMESTAMP);
    const data: any = await api.get(`${API_URL_COMICS}/${comicId}?ts=${TIMESTAMP}&apikey=${MARVEL_API_PUBLIC_KEY}&hash=${HASH}`);
    if (data.code === 200 && data.data && data.data.results && data.data.results.length) {
      resolve(data.data.results.map((comic: IComic) => new Comic(comic)));
    } else {
      resolve([]);
    }
  } catch (err) {
    reject(err);
  }
});

export const getComicsService = async (offset: number, limit: number): Promise<Comic[] | []> => new Promise( async (resolve, reject) => {
  try {
    const TIMESTAMP = Date.now();
    const HASH = getHash(TIMESTAMP);
    const data: any = await api.get(`${API_URL_COMICS}?ts=${TIMESTAMP}&apikey=${MARVEL_API_PUBLIC_KEY}&hash=${HASH}&offset=${offset}&limit=${limit}`);
    if (data.code === 200 && data.data && data.data.results && data.data.results.length) {
      resolve(data.data.results.map((comic: IComic) => new Comic(comic)));
    } else {
      resolve([]);
    }
  } catch (err) {
    reject(err);
  }
});