import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RecordStatusService } from './recordStatus.service';
import { CreateRecordStatusInput } from './dto/create-recordStatus.input';
import { UpdateRecordStatusInput } from './dto/update-recordStatus.input';

@Controller('recordstatuses')
export class RecordStatusController {
  constructor(private readonly recordStatusService: RecordStatusService) {}

  @Get()
  findAll() {
    return this.recordStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordStatusService.findOne({ where: { id } });
  }

  @Post()
  async create(@Body() input: CreateRecordStatusInput) {
    return await this.recordStatusService.create(input);
  }

  @Put()
  async update(@Body() input: UpdateRecordStatusInput) {
    const { id } = input;
    return await this.recordStatusService.update(id, input);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.recordStatusService.remove(id);
  }
}
