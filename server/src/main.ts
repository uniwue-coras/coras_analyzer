import express, { Request, Response } from "express";
import { readFileSync } from 'fs';

const port = 8080;

const app = express();

app.get("/", (_req: Request, res: Response): void => {
  res.send("TODO!");
});

app.get("/:id", (req: Request, res: Response): void => {
  // const id = req.params.id;
  // console.info(id);

  const filename = 'data/example.json';

  res.json(
    JSON.parse(
      readFileSync(filename, 'utf-8')
    )
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
