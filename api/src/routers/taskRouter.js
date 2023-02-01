import express from "express";
import { getsingleTask, getTasks, insertTask } from "../model/task/taskModel.js";
const router = express.Router();

router.get("/:_id?", async(req, res, next) => {
  try {
    const { _id } = req.params;
   const result=_id? await getsingleTask(_id):await getTasks()
    res.json({
      status: "success",
      message: "response from  get method",
      result
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});
router.post("/", async (req, res) => {
  try {
    //  call db query to add data to the database
    const result=await insertTask(req.body);
    res.json({
      status: "success",
      message: "response from  post method",
      result,
    });
  } catch (error) {
    next(error);
  }
});
router.patch("/", (req, res) => {
  try {
    res.json({
      status: "success",
      message: "response from  patch method",
    });
  } catch (error) {
    next(error);
  }
});
router.delete("/:_id", (req, res, next) => {
  try {
  
    res.json({
      status: "success",
      message: "response from  delete method",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
