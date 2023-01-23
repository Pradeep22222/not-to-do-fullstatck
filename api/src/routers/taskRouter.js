import express from "express";
const router=express.Router();
router.get("/", (req, res,next) => {
    try {
         res.json({
           status: "success",
           message: "response from root get method",
         });
    } catch (error) {
        next(error);
    }
 
});
router.post("/", (req, res) => {
 try {
   res.json({
     status: "success",
     message: "response from root post method",
   });
 } catch (error) {
   next(error);
 }
});

export default router;