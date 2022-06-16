import { Request, Response } from "express";
import CreateCourseServices from "./CreateCourseServices";

export const createCourse = (req: Request, res: Response) => {
  CreateCourseServices.execute({
    name: "nodejs",
    duration: 60,
    educator: "paichato",
  });

  return res.send();
};
