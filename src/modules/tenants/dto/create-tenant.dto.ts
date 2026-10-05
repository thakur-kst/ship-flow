import { IsString, Length } from 'class-validator';

export class CreateTenantDto {
  @IsString()
  @Length(2, 100)
  name: string;

  @IsString()
  @Length(2, 20)
  code: string;
}