# column types
- https://typeorm.io/#/entities

```js
// type
@Column({ type: "int" })

// type + validate
@Column("varchar", { length: 200 })

// with default
@Column({ type:'datetime', default:'2020-11-17 11:28:07'})
```

## primary
- PrimaryColumn
- PrimaryGeneratedColumn
- @PrimaryGeneratedColumn("uuid") 

## types
- number
- string
- simple-json
- simple-array
- set

## generatedColumn
```ts
  @PrimaryGeneratedColumn()
  @Generated("uuid")
  id: number;
```

## sqlite3
```conf
int, int2, int8, integer, tinyint, smallint, mediumint, bigint, decimal, numeric, float, double, real, double precision, datetime, varying character, character, native character, varchar, nchar, nvarchar2, unsigned big int, boolean, blob, text, clob, date
```


## enum type
```ts
export enum UserRole {
    ADMIN = "admin",
    EDITOR = "editor",
    GHOST = "ghost"
}

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.GHOST
    })
    role: UserRole

}
```


## validate
```ts
@Column({
    type: "varchar",
    length: 150,
    unique: true,
    // ...
})
```
