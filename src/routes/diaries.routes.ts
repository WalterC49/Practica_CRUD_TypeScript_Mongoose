import {
  addDiary,
  deleteDiaryById,
  getAllDiaries,
  getDiaryById,
  UpdateDiaryById,
} from "@services/diaries.services";
import { validateNewDiary, validateUpdateDiary } from "@utils/utils";
import { Router } from "express";

const router = Router();

router.get("/", async (_req, res) => {
  const result = await getAllDiaries();
  res.send(result);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await getDiaryById(id);
  return result ? res.send(result) : res.sendStatus(404);
});

router.post("/", async (req, res) => {
  try {
    const newDiary = validateNewDiary(req.body);

    const diary = await addDiary(newDiary);
    res.json(diary);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const newDiary = validateUpdateDiary(req.body);

    const diary = await UpdateDiaryById(req.params.id, newDiary);
    res.json(diary);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  await deleteDiaryById(req.params.id);
  res.send({ message: "Diary deleted." });
});

export default router;
