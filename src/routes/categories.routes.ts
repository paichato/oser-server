import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const categforiesRoutes = Router();

const categories = [];

categforiesRoutes.post("/categories", (req, res) => {
  const { name, description } = req.body;
  categories.push({ name, description, id: uuidv4() });

  res.status(201).send(categories);
});

categforiesRoutes.post("/categories", (req, res) => {
  res.send("Passando");
});

export { categforiesRoutes };
