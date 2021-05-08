import express from "express";
import {
  homeController,
  detailController,
  createController,
  editController,
  createBoardController,
  deleteBoardController,
  editBoardController,
} from "../controllers/boardController";

const boardRouter = express.Router();

boardRouter.get("/", homeController);
boardRouter.get("/detail", detailController);
boardRouter.get("/create", createController);
boardRouter.get("/edit", editController);

boardRouter.post("/detailBoard", deleteBoardController);
boardRouter.post("/createBoard", createBoardController);
boardRouter.post("/editBoard", editBoardController);

export default boardRouter;
