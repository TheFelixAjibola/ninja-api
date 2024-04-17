import { IsEnum, MinLength } from 'class-validator';
export class CreateNinjaDto {
  @MinLength(3)
  name: string;

  @IsEnum(['Professional Styler', 'Software Engineer'], {
    message: 'Use the correct skill!',
  })
  skill: 'Professional Styler' | 'Software Engineer';
}
