import "dotenv/config";
import express, { Request, Response } from "express";
import { execSync } from "child_process";
const app = express();

app.use(express.json());

app.post("/shortcuts/run", (req: Request, res: Response) => {
  const { shortcutName, apiKey } = req.body ?? {};

  if (apiKey !== process.env.API_KEY) {
    res.status(403).send({ error: "Invalid API key." });
    return;
  }

  if (!shortcutName) {
    res
      .status(400)
      .send({ error: 'Missing "shortcutName" in the request body.' });
    return;
  }

  execSync(`shortcuts run "${shortcutName}"`);
  res.status(200).send("Shortcut executed successfully.");
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
