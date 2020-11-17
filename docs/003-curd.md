## curd

## RepoManager
```js
import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";

createConnection().then(async connection => {
  const manager = connection.manager;
}).catch(error => console.log(error));
```


### Create
```js
// create
const user = await manager.create(User, {
  first_name: 'afei',
  last_name: 'zheng',
  age: 100
})
```

### Update


### Get
```js
const users = await manager.find(User);
```

### Delete
