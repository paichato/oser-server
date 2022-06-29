const express = require("express");
import { createCourse } from "./routes";
import { categforiesRoutes } from "./routes/categories.routes";
import "./database";
import { AppDataSource } from "./database/data-source";
import { User } from "./database/entity/User";

const app = express();

// app.get("/", (req, res) => {
//   return res.json({ message: "Hello World" });
// });

//

// app.get("/", createCourse);
AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await AppDataSource.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await AppDataSource.manager.find(User);
    console.log("Loaded users: ", users);

    console.log(
      "Here you can setup and run express / fastify / any other framework."
    );
  })
  .catch((error) => console.log(error));

app.use(express.json());

app.use(categforiesRoutes);

app.listen(3333, () => {
  console.log("🚀SERVER STARTED ON PORT 3333");
});
