import { Router } from "express";
import { /* addDiary, */ getAllDiaries } from "@services/diaries.services";
/* import { v4 } from "uuid"; */

const router = Router();

router.get("/", async (_req, res) => {
  const result = await getAllDiaries();
  res.send(result);
});

/* router.get("/", (_req, res) => {
  const id = v4();
  console.log(typeof v4);
  addDiary({
    _id: id,
    date: new Date(),
    weather: "cloudy",
    visibility: "good",
    comment: "ok",
  });
  res.send("ok");
}); */

export default router;
