# tree entities
- https://orkhan.gitbook.io/typeorm/docs/tree-entities



```js
import {Entity, Tree, Column, PrimaryGeneratedColumn, TreeChildren, TreeParent, TreeLevelColumn} from "typeorm";

@Entity("categories")
@Tree("nested-set")
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @TreeChildren()
    children: Category[];

    @TreeParent()
    parent: Category;
}
```
