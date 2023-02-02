import express from "express";
import {
  deleteManyTasks,
  deleteTaskById,
  getsingleTask,
  getTasks,
  insertTask,
  updateTask,
} from "../model/task/taskModel.js";
const router = express.Router();

router.get("/:_id?", async (req, res, next) => {
  try {
    const { _id } = req.params;
    const result = _id ? await getsingleTask(_id) : await getTasks();
    res.json({
      status: "success",
      message: "response from  get method",
      result,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});
router.post("/", async (req, res) => {
  try {
    //  call db query to add data to the database
    const result = await insertTask(req.body);
    res.json({
      status: "success",
      message: "response from  post method",
      result,
    });
  } catch (error) {
    next(error);
  }
});
router.patch("/", async (req, res) => {
  try {
    //
    console.log(req.body);
    const { _id, type } = req.body;
    const result = await updateTask(_id, type);
    res.json({
      status: "success",
      message: "response from  patch method",
      result, 
    });
  } catch (error) {
    next(error);
  }
});
// router.delete("/:_id", async(req, res, next) => {
  router.delete("/", async (req, res, next) => {
    try {
      // const { _id } = req.params;
      const { ids } = req.body;
      // const result = await deleteTaskById(_id);
      const result=await deleteManyTasks(ids)
      console.log(result);
      res.json({
        status: "success",
        message: "response from  delete method",
      });
    } catch (error) {
      next(error);
    }
  });

export default router;
