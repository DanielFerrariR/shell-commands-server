import "dotenv/config";
import express, { Request, Response } from "express";
import { execSync } from "child_process";
const app = express();

app.use(express.json());

app.post("/shell-command/run", (req: Request, res: Response) => {
  const { shellCommand, apiKey } = req.body ?? {};

  if (apiKey !== process.env.API_KEY) {
    res.status(403).send({ error: "Invalid API key." });
    return;
  }

  if (!shellCommand) {
    res
      .status(400)
      .send({ error: 'Missing "shellCommand" in the request body.' });
    return;
  }

  execSync(shellCommand);
  res.status(200).send("Command executed successfully.");
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
