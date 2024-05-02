import { IsIn, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateAcccesoryDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsIn(['sewable', 'gluable'])
  applicationMode: string;
}
