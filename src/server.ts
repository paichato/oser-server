import express from "express";
import { createCourse } from "./routes";

const app = express();

// app.get("/", (req, res) => {
//   return res.json({ message: "Hello World" });
// });

//

app.get("/", createCourse);

app.listen(3333, () => {
  console.log("SERVER STARTED ON PORT 3333");
});
