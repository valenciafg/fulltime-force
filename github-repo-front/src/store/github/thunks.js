import { GithubService } from '../../services';
import { setIsLoadingProfile, setProfile, setRepository } from './githubSlice';

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