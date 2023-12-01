import express, { Request, Response, Express } from "express";
import cors from 'cors';
import { readFileSync } from 'fs';

const port = 8080;

function getExerciseIds(_req: Request, res: Response): void {
  // TODO: implement!
  res.json([1, 2]);
}

function getExerciseData(_req: Request, res: Response): void {
  // const id = req.params.id;
  // console.info(id);

  const filename = 'data/example.json';

  res.json(
    JSON.parse(
      readFileSync(filename, 'utf-8')
    )
  );

}

express()
  // enable cors
  .use(cors())
  // define routes
  .get("/", (_req: Request, res: Response): void => res.redirect("/exerciseIds"))
  .get("/exerciseIds", getExerciseIds)
  .get("/:id", getExerciseData)
  // start server
  .listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
