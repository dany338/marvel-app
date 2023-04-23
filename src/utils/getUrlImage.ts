import { MARVEL_IMAGE_DETAIL } from "../constants/api";

export const getUrlImage = (url: string, extension: string, type: string) => {
  return `${url}/${type}.${extension}`;
}