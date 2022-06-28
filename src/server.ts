import express from "express";
import { createCourse } from "./routes";
import { categforiesRoutes } from "./routes/categories.routes";
import "./database";

const app = express();

// app.get("/", (req, res) => {
//   return res.json({ message: "Hello World" });
// });

//

// app.get("/", createCourse);

app.use(express.json());

app.use(categforiesRoutes);

app.listen(3333, () => {
  console.log("SERVER STARTED ON PORT 3333");
});
