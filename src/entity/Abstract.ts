import { Entity, Generated,PrimaryGeneratedColumn, Column } from "typeorm";

export default abstract class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type:'datetime', default:'2020-11-17 11:18:07'})
  created_at: Date;

  @Column({ type:'datetime', default:'2020-11-17 11:28:07'})
  updated_at: Date;
}
