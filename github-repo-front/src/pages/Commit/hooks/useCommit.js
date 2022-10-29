import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingCommits } from '../../../store/github';

export const useCommit = () => {
  const dispatch = useDispatch();
  const { isLoadingCommits, commits } = useSelector(state => state.github)

  useEffect(() => {
    dispatch(startLoadingCommits());
  }, []);

  return {
    isLoadingCommits,
    commits
  }
}