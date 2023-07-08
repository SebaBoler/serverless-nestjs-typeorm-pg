import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, FindOneOptions, Repository } from 'typeorm';
import { RecordStatusEntity } from './entities/recordStatus.entity';
import { CreateRecordStatusInput } from './dto/create-recordStatus.input';
import { UpdateRecordStatusInput } from './dto/update-recordStatus.input';
import { LazyModuleLoader } from '@nestjs/core';

@Injectable()
export class RecordStatusService {
  constructor(
    @InjectRepository(RecordStatusEntity)
    private readonly recordStatusRepository: Repository<RecordStatusEntity>,
    private entityManager: EntityManager,
    private lazyModuleLoader: LazyModuleLoader,
  ) {}

  async findAll(): Promise<RecordStatusEntity[]> {
    return await this.recordStatusRepository.find();
  }

  async findOne(
    options: FindOneOptions<RecordStatusEntity>,
  ): Promise<RecordStatusEntity> {
    return await this.recordStatusRepository.findOne(options);
  }

  async create(data: CreateRecordStatusInput) {
    const recordStatus = this.recordStatusRepository.create(data);
    return await this.recordStatusRepository.save(recordStatus);
  }

  async update(id: string, data: UpdateRecordStatusInput) {
    try {
      return this.entityManager.transaction(async (manager) => {
        const recordStatus = await this.findOne({ where: { id } });
        return await manager.save(RecordStatusEntity, {
          ...recordStatus,
          ...data,
        });
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async remove(id: string) {
    try {
      return this.entityManager.transaction(async (manager) => {
        const recordStatus = await this.findOne({ where: { id } });
        return await manager.remove(recordStatus);
      });
    } catch (err) {
      throw new Error(err);
    }
  }
}
