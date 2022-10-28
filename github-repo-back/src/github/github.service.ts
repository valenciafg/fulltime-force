import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Octokit, App } from 'octokit';
import { CreateGithubDto } from './dto/create-github.dto';
import { UpdateGithubDto } from './dto/update-github.dto';

@Injectable()
export class GithubService {
  private octokit: Octokit;
  constructor(configService: ConfigService) {
    this.octokit = new Octokit({
      auth: configService.get('GITHIB_TOKEN'),
    });
  }
  create(createGithubDto: CreateGithubDto) {
    return 'This action adds a new github';
  }

  async findAll() {
    const { data } = await this.octokit.rest.users.getAuthenticated();
    return data;
  }

  async getCurrentUser() {
    const { data } = await this.octokit.rest.users.getAuthenticated();
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} github`;
  }

  update(id: number, updateGithubDto: UpdateGithubDto) {
    return `This action updates a #${id} github`;
  }

  remove(id: number) {
    return `This action removes a #${id} github`;
  }
}
