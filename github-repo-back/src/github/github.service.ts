import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Octokit, App } from 'octokit';
import { SearchCommitDto } from './dto/search-commits.dto';

@Injectable()
export class GithubService {
  private octokit: Octokit;
  private owner: string;
  private repo: string;

  constructor(configService: ConfigService) {
    this.octokit = new Octokit({
      auth: configService.get('GITHUB_TOKEN'),
    });
    this.owner = configService.get('CURRENT_OWNER');
    this.repo = configService.get('CURRENT_REPOSITORY');
  }

  async getCurrentUser() {
    const { data } = await this.octokit.rest.users.getByUsername({
      username: this.owner,
    });
    return data;
  }

  async getCurrentRepo() {
    const { data } = await this.octokit.request('GET /repos/{owner}/{repo}', {
      owner: this.owner,
      repo: this.repo,
    });
    return data;
  }

  async getBranches() {
    const { data } = await this.octokit.rest.repos.listBranches({
      owner: this.owner,
      repo: this.repo,
    });
    return data;
  }

  async getCurrentRepositoryCommits(searchCommitDto: SearchCommitDto) {
    const { branch } = searchCommitDto;
    const { data } = await this.octokit.rest.repos.listCommits({
      owner: this.owner,
      repo: this.repo,
      sha: branch,
    });
    return data;
  }
}
