import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export default abstract class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
