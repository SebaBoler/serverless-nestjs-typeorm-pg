import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'record_status', schema: 'public' })
export class RecordStatusEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  viewSequence: number;
}
