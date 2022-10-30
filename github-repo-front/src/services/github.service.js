import axios from 'axios';

export class GithubService {
    constructor() {
        this.request = axios.create({
            baseURL: 'http://localhost:3000/api/github'
        });
    }
    async getCurrentUser() {
        let ok = true;
        let data = null;
        try {
            const response = await this.request.get('/user');
            data = response.data;
        } catch (error) {
            console.log(error);
            ok = false
        }
        return { ok, data };
    }
    async getCurrentRepo() {
        let ok = true;
        let data = null;
        try {
            const response = await this.request.get('/repo');
            data = response.data;
        } catch (error) {
            console.log(error);
            ok = false
        }
        return { ok, data };
    }
    async getCurrentRepositoryCommits(branch) {
        let ok = true;
        let data = [];
        try {
            const response = await this.request.get(`/repo/commits?branch=${branch}`);
            data = response.data;
        } catch (error) {
            console.log(error);
            ok = false
        }
        return { ok, data };
    }
    async getCurrentRepositoryBranches() {
        let ok = true;
        let data = [];
        try {
            const response = await this.request.get('/repo/branches');
            data = response.data;
        } catch (error) {
            console.log(error);
            ok = false
        }
        return { ok, data };
    }
}