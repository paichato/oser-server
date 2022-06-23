import { Router } from "express";

const categforiesRoutes = Router();

const categories = [];

categforiesRoutes.post("/categories", (req, res) => {
  const { name, description } = req.body;
  categories.push({ name, description });

  res.status(201).send(categories);
});

categforiesRoutes.post("/categories", (req, res) => {
  res.send("Passando");
});

export { categforiesRoutes };
