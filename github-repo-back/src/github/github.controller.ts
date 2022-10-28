import { Controller, Get } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('user')
  getCurrentUser() {
    return this.githubService.getCurrentUser();
  }

  @Get('repo/commits')
  getCurrentRepositoryCommits() {
    return this.githubService.getCurrentRepositoryCommits();
  }

  @Get('repo')
  getCurrentRepo() {
    return this.githubService.getCurrentRepo();
  }
}
