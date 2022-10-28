import { createSlice } from '@reduxjs/toolkit';

export const githubSlice = createSlice({
  name: 'github',
  initialState: {
    profile: null,
    repository: null,
    commits: []
  },
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setRepository: (state, action) => {
      state.profile = action.payload;
    },
    setCommits: (state, action) => {
      state.commits = action.commits;
    }
  }
});

export const {
  setProfile,
  setRepository,
  setCommits
} = githubSlice.actions;