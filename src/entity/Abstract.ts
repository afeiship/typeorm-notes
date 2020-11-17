import { Entity, Generated,CreateDateColumn, UpdateDateColumn,PrimaryGeneratedColumn, Column } from "typeorm";

export default abstract class User {

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
