import express from "express";

const viewRouter = express.Router();

viewRouter.get("/", (req, res) => {
  res.status(200).render("index");
});

export default viewRouter;
