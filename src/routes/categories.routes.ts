import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import { Category } from "../models/Category";

const categforiesRoutes = Router();

const categories: Category[] = [];

categforiesRoutes.post("/categories", (req, res) => {
  const { name, description } = req.body;

  const category = new Category();

  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  categories.push(category);

  res.status(201).send(categories);
});

categforiesRoutes.post("/categories", (req, res) => {
  res.send("Passando");
});

export { categforiesRoutes };
