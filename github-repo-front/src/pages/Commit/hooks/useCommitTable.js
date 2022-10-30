import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoafingCommitsByBranch } from '../../../store/github'

export const useCommitTable = () => {
  const { branches, currentBranch } = useSelector(state => state.github);
  const [branchOption, setBranchOption] = useState(currentBranch);
  const dispatch = useDispatch();
  const handleOnchange = (e) => {
    setBranchOption(e.target.value);
  }
  useEffect(() => {
    if (branchOption !== currentBranch) {
      dispatch(startLoafingCommitsByBranch(branchOption));
    }
  }, [branchOption]);

  return {
    branches,
    branchOption,
    handleOnchange,
  };
}