import { createSlice } from '@reduxjs/toolkit';

export const githubSlice = createSlice({
  name: 'github',
  initialState: {
    profile: null,
    repository: null,
    isLoadingProfile: false,
    isLoadingCommits: false,
    commits: []
  },
  reducers: {
    cleanProfile: (state) => {
      state.profile = null;
    },
    cleanCommits: (state) => {
      state.commits = [];
    },
    setIsLoadingProfile: (state, action) => {
      state.isLoadingProfile = action.payload;
    },
    setIsLoadingCommits: (state, action) => {
      state.isLoadingCommits = action.payload;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setRepository: (state, action) => {
      state.repository = action.payload;
    },
    setCommits: (state, action) => {
      state.commits = action.payload;
    }
  }
});

export const {
  cleanProfile,
  cleanCommits,
  setIsLoadingProfile,
  setIsLoadingCommits,
  setProfile,
  setRepository,
  setCommits
} = githubSlice.actions;