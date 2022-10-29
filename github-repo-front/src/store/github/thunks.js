import { GithubService } from '../../services';
import { cleanCommits, cleanProfile, setCommits, setIsLoadingCommits, setIsLoadingProfile, setProfile, setRepository } from './githubSlice';

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
    dispatch(setIsLoadingCommits(true));
    const service = new GithubService();
    const commits = await service.getCurrentRepositoryCommits();
    const repo = await service.getCurrentRepo();
    if (commits.ok && repo.ok) {
      dispatch(setCommits(commits.data));
      dispatch(setRepository(repo.data));
    }
    dispatch(setIsLoadingCommits(false));
  }
}