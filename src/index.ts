import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";

createConnection().then(async connection => {

  const manager = connection.manager;

  // console.log("Inserting a new user into the database...");
  // const user = new User();
  // user.firstName = "Timber";
  // user.lastName = "Saw";
  // user.age = 25;
  // await connection.manager.save(user);
  // console.log("Saved a new user with id: " + user.id);

  // console.log("Loading users from the database...");
  // const users = await connection.manager.find(User);
  // console.log("Loaded users: ", users);

  // console.log("Here you can setup and run express/koa/any other framework.");


  // console.log(
  //   await manager.find(User)
  // );


  const usr = await manager.create(User, {
    first_name: 'afei',
    last_name: 'zheng',
    age: 100
  })

  await manager.save(usr);


  // console.log(
  //   await manager.find(User)
  // );


}).catch(error => console.log(error));
