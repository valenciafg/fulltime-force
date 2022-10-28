import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingProfile } from '../../../store/github';

export const useProfile = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.github)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(startLoadingProfile());
  }, []);

  return {
    isLoading,
    profile
  }
}