import express from "express";
const app = express();
const PORT = 8000;
import taskRouter from "./src/routers/taskRouter.js"
app.use((req, res, next) => {
    console.log(error);
    res.json({ 
        status: "error",
        message: error.message,
    })
})
app.listen(PORT, (error) => {
    error && console.log(error)
    console.log(`server running at http://localhost:${PORT}`)
})
app.use("/api/v1/task", taskRouter);
app.post("/api/v1/task", (req, res) => {
  res.json({
    status: "success",
    message: "response from root post method",
  });
});
app.use("/", (req, res) => {
  res.json({
    status: "success",
    message: "response from root page",
  });
});
console.log("Hello my first api server");