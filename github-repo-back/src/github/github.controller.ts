import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SearchCommitDto } from './dto/search-commits.dto';
import { GithubService } from './github.service';

@ApiTags('github')
@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('user')
  @ApiOperation({
    summary: 'Get user information',
  })
  getCurrentUser() {
    return this.githubService.getCurrentUser();
  }
  @Get('repo/commits')
  @ApiOperation({
    summary: 'Get commits by branch',
  })
  getCurrentRepositoryCommits(@Query() searchCommitDto: SearchCommitDto) {
    return this.githubService.getCurrentRepositoryCommits(searchCommitDto);
  }

  @Get('repo/branches')
  @ApiOperation({
    summary: 'Get branches',
  })
  getBranches() {
    return this.githubService.getBranches();
  }

  @Get('repo')
  @ApiOperation({
    summary: 'Get repository information',
  })
  getCurrentRepo() {
    return this.githubService.getCurrentRepo();
  }
}
