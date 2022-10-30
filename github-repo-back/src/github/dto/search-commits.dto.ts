import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class SearchCommitDto {
  @ApiProperty()
  @IsString()
  @MinLength(1)
  branch: string;
}
