import CryptoJS from 'crypto-js';
import { MARVEL_API_PUBLIC_KEY, MARVEL_API_PRIVATE_KEY } from '../constants/api';
const marvelApiPrivateKey = MARVEL_API_PRIVATE_KEY || '';
const marvelApiPublicKey = MARVEL_API_PUBLIC_KEY || '';
export const getHash = (TIMESTAMP: number) => {
  const HASH = CryptoJS.MD5(TIMESTAMP + marvelApiPrivateKey + marvelApiPublicKey).toString();
  return HASH;
};