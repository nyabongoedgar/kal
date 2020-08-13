import express from "express";

const authRouter = express.Router();

authRouter.get("/auth", (res, req) => {
  req.send({
    message: "Hello world!",
  });
});

export default authRouter;
