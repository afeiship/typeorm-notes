import {Entity, Tree, Column, PrimaryGeneratedColumn, TreeChildren, TreeParent, TreeLevelColumn} from "typeorm";
import Abstract from './Abstract';

@Entity('categories')
@Tree("materialized-path")
export class Category extends Abstract {

  @Column()
  name: string;

  @TreeChildren()
  children: Category[];

  @TreeParent()
  parent: Category;
}
