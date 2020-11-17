import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";

createConnection().then(async connection => {
  const manager = connection.manager;
  // create
  const user = await manager.create(User, {
    first_name: 'afei',
    last_name: 'zheng',
    age: 100
  })

  // save
  await manager.save(user);

  // get
  const users = await manager.find(User);

  console.log(
    JSON.stringify(users, null, 2)
  )

}).catch(error => console.log(error));
