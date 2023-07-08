import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateRecordStatusInput } from './create-recordStatus.input';

export class UpdateRecordStatusInput extends PartialType(
  CreateRecordStatusInput,
) {
  @IsString()
  id: string;
}
