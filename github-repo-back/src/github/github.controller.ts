import { Controller, Get } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('current-user')
  getCurrentUser() {
    return this.githubService.getCurrentUser();
  }

  @Get('current-repo-commits')
  getCurrentRepositoryCommits() {
    return this.githubService.getCurrentRepositoryCommits();
  }

  @Get('repo')
  getCurrentRepo() {
    return this.githubService.getCurrentRepo();
  }
}
