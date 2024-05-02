import { Column, DeleteDateColumn, Entity } from 'typeorm';

@Entity()
export class Acccesory {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  applicationMode: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
