import { GithubService } from '../../services';
import { setCommits, setIsLoadingCommits, setIsLoadingProfile, setProfile, setRepository } from './githubSlice';

export const startLoadingProfile = () => {
  return async (dispatch) => {
    dispatch(setIsLoadingProfile(true));
    const service = new GithubService();
    const profile = await service.getCurrentUser();
    const repo = await service.getCurrentRepo();
    if (profile.ok && repo.ok) {
      dispatch(setProfile(profile.data));
      dispatch(setRepository(repo.data));
    }
    dispatch(setIsLoadingProfile(false));
  }
}

export const startLoadingCommits = () => {
  return async (dispatch) => {
    dispatch(setIsLoadingCommits(true));
    const service = new GithubService();
    const commits = await service.getCurrentRepositoryCommits();
    if (commits.ok) {
      dispatch(setCommits(commits.data));
    }
    dispatch(setIsLoadingCommits(false));
  }
}