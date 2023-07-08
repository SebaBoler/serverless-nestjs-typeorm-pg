import { IsInt, IsString } from 'class-validator';

export class CreateRecordStatusInput {
  @IsString()
  name: string;

  @IsInt()
  viewSequence: number;
}
