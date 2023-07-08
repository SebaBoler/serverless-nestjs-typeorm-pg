import { Module } from '@nestjs/common';
import { RecordStatusService } from './recordStatus.service';
import { RecordStatusController } from './recordStatus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordStatusEntity } from './entities/recordStatus.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RecordStatusEntity])],
  controllers: [RecordStatusController],
  providers: [RecordStatusService],
  exports: [RecordStatusService],
})
export class RecordStatusModule {}
