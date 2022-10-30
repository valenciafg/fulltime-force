import { createSlice } from '@reduxjs/toolkit';

export const githubSlice = createSlice({
  name: 'github',
  initialState: {
    profile: null,
    repository: null,
    isLoadingProfile: false,
    isLoadingCommits: false,
    commits: [],
    branches: [],
    currentBranch: 'master'
  },
  reducers: {
    cleanProfile: (state) => {
      state.profile = null;
    },
    cleanCommits: (state) => {
      state.commits = [];
    },
    cleanBranches: (state) => {
      state.branches = [];
      state.currentBranch = 'master';
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
    },
    setBranches: (state, action) => {
      state.branches = action.payload;
    },
    setCurrentBranch: (state, action) => {
      state.currentBranch = action.payload;
    }
  }
});

export const {
  cleanProfile,
  cleanCommits,
  cleanBranches,
  setIsLoadingProfile,
  setIsLoadingCommits,
  setProfile,
  setRepository,
  setCommits,
  setBranches,
  setCurrentBranch,
} = githubSlice.actions;