import {Entity, PrimaryGeneratedColumn,RelationId, Column, ManyToOne} from "typeorm";
import {User} from "./User";
import Abstract from './Abstract';

@Entity()
export class Photo extends Abstract {

  @Column()
  url: string;

  @ManyToOne(type => User, user => user.photos)
  user: User;

}
