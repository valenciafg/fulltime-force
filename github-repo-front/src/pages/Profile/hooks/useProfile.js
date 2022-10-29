import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingProfile } from '../../../store/github';

export const useProfile = () => {
  const dispatch = useDispatch();
  const { profile, isLoadingProfile } = useSelector(state => state.github)

  useEffect(() => {
    dispatch(startLoadingProfile());
  }, []);

  return {
    isLoadingProfile,
    profile
  }
}