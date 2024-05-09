import { IsIn, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateAcccesoryDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsOptional()
  @IsString()
  description?: string | null;

  @IsString()
  @IsIn(['sewable', 'gluable'])
  applicationMode: string;
}
