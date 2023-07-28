import express from "express";
import diaryRouter from "@routes/diaries.routes";

const app = express();

app.use(express.json());

app.use("/api/diaries", diaryRouter);

export default app;
