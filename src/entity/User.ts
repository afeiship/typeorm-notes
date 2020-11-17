import { Entity, OneToMany,JoinColumn,PrimaryGeneratedColumn, Column } from "typeorm";
import Abstract from './Abstract';
import { Photo } from './Photo'

@Entity('users')
export class User extends Abstract {

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @OneToMany(type => Photo, photo => photo.user)
  photos: Photo[];
}
