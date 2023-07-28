import express from "express";
import diaryRouter from "@routes/diaries.routes";

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/", (_req, res) => {
  res.send({ message: "Welcome" });
});

app.use("/api/diaries", diaryRouter);

app.listen(PORT, () => {
  console.log(`Server up on http://localhost:${PORT}`);
});
