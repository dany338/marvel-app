/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MARVEL_CHARACTER_IRON_MAN } from '../constants/api';
import { getCharacterAction, getComicsByCharacterAction } from '../redux/actions/marvel';
import useEffectOnce from './useEffectOnce';

const useMarvel = () => {
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ error, setError ] = useState<string | null>(null);
  // const [ comics, setComics ] = useState([]);
  const dispatch = useDispatch();
  const { marvel: { offset, limit, comics, character } }: any = useSelector((state) => state);

  const getCharacter = useCallback(async (name: string) => {
    try {
      setLoading(true)
      setError(null)
      await dispatch<any | unknown>(getCharacterAction(name));
    } catch (e: any) {
      setError(e.message)
    } finally {
      // tanto en el try como en el catch
      setLoading(false)
    }
  }, [])

  const getComicsByCharacter = useCallback(async ({ offset, limit }: any) => {
    try {
      if (character) {
        console.log('getComicsByCharacter:', offset, limit, character);
        setLoading(true)
        setError(null)
        await dispatch<any | unknown>(getComicsByCharacterAction(character.id, offset, limit));
        // setComics(newComics)
      }
    } catch (e: any) {
      setError(e.message)
    } finally {
      // tanto en el try como en el catch
      setLoading(false)
    }
  }, [character, offset, limit])

  useEffect(() => {
    getComicsByCharacter({ offset, limit });
  }, []);

  useEffectOnce(() => {
    getCharacter(MARVEL_CHARACTER_IRON_MAN);
    return () => console.log('unmounting...');
  });

  return { loading, error, comics, character };
}

export default useMarvel;