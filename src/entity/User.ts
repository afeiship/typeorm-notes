import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import Abstract from './Abstract';

@Entity('users')
export class User extends Abstract {

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  age: number;

}
