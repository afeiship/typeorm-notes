import {Entity, Tree, Column, PrimaryGeneratedColumn, TreeChildren, TreeParent, TreeLevelColumn} from "typeorm";
import Abstract from './Abstract';

@Entity('categories')
@Tree("closure-table")
export class Category extends Abstract {

  @Column()
  name: string;

  @Column()
  description: string;

  @TreeChildren()
  children: Category[];

  @TreeParent()
  parent: Category;

  @TreeLevelColumn()
  level: number;
}
