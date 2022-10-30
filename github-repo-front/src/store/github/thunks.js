import { GithubService } from '../../services';
import { cleanBranches, cleanCommits, cleanProfile, setBranches, setCommits, setCurrentBranch, setIsLoadingCommits, setIsLoadingProfile, setProfile, setRepository } from './githubSlice';

export const startLoadingProfile = () => {
  return async (dispatch) => {
    dispatch(cleanProfile());
    dispatch(setIsLoadingProfile(true));
    const service = new GithubService();
    const profile = await service.getCurrentUser();
    if (profile.ok) {
      dispatch(setProfile(profile.data));
    }
    dispatch(setIsLoadingProfile(false));
  }
}

export const startLoadingCommits = () => {
  return async (dispatch) => {
    dispatch(cleanCommits());
    dispatch(cleanBranches());
    dispatch(setIsLoadingCommits(true));
    const service = new GithubService();
    const branchesResponse = await service.getCurrentRepositoryBranches();
    if (branchesResponse.ok) {
      const branches = branchesResponse.data.map(b => b.name);
      const [currentBranch] = branches;
      dispatch(setBranches(branches));
      dispatch(setCurrentBranch(currentBranch));
      const commits = await service.getCurrentRepositoryCommits(currentBranch);
      const repo = await service.getCurrentRepo();
      if (commits.ok && repo.ok) {
        dispatch(setCommits(commits.data));
        dispatch(setRepository(repo.data));
      }
    }
    dispatch(setIsLoadingCommits(false));
  }
}

export const startLoafingCommitsByBranch = (branch) => {
  return async (dispatch) => {
    dispatch(cleanCommits());
    dispatch(setIsLoadingCommits(true));
    dispatch(setCurrentBranch(branch));
    const service = new GithubService();
    const commits = await service.getCurrentRepositoryCommits(branch);
    if (commits.ok) {
      dispatch(setCommits(commits.data));
    }
    dispatch(setIsLoadingCommits(false));
  }
}