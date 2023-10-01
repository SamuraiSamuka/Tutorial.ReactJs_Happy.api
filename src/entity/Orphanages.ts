import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Orphanages {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column("decimal")
  latitude: number;

  @Column("decimal")
  longitude: number;

  @Column("text")
  about: string;

  @Column("text")
  instructions: string;

  @Column({
    length: 100,
  })
  opening_hours: string;

  @Column()
  open_on_weekends: boolean;
}
