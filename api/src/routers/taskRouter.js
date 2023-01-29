import express from "express";
const router = express.Router();
let fakeDB = [
  { _id: 1, task: "coding", hr: "5" },
  { _id: 2, task: "sleeping", hr: "8" },
  { _id: 3, task: "working", hr: "8" },
];
router.get("/:_id?", (req, res, next) => {
  try {
    const { _id } = req.params;
    if (_id) {
      data = fakeDB.filter((item) => item._id === +_id);
      fakeDB = data;
    }

    res.json({
      status: "success",
      message: "response from  get method",
      fakeDB,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});
router.post("/", (req, res) => {
  try {
    //  call db query to add data to the database
    fakeDB.push(req.body);
    res.json({
      status: "success",
      message: "response from  post method",
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
    const { _id } = req.params;
    // db query to delete data
    const filteredArg = fakeDB.filter((item) => item?._id !== +_id);
    fakeDB = filteredArg;
    res.json({
      status: "success",
      message: "response from  delete method",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
