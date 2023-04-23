import { LIMIT, OFFSET } from '../../constants/api';
import Character from '../../entities/character';
import Comic from '../../entities/comic';
import { MARVEL_CHARACTER_BY_NAME, MARVEL_COMICS_BY_CHARACTERS, MARVEL_COMICS_BY_LIMIT } from '../types/marvel';

interface IActionProps {
  type: string;
  payload: any | unknown;
}

export interface IInitialState {
  offset: number;
  limit: number;
  character: Character | null;
  comics: Comic[] | [];
}

const initialState: IInitialState = {
  offset: OFFSET,
  limit: LIMIT,
  character: null,
  comics: [],
};

export const marvelReducer = (state = initialState, action: IActionProps) => {
  switch (action.type) {
    case MARVEL_COMICS_BY_LIMIT:
      return {
        ...state,
        offset: action.payload.offset,
        limit: action.payload.limit,
        comics: action.payload.comics,
      };
    case MARVEL_CHARACTER_BY_NAME:
      return {
        ...state,
        character: action.payload,
      };
    case MARVEL_COMICS_BY_CHARACTERS:
      return {
        ...state,
        offset: action.payload.offset,
        limit: action.payload.limit,
        comics: action.payload.comics,
      };
    default:
      return state;
  }
}