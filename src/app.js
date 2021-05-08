import express from "express";
import path from "path";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import boardRouter from "./routers/boardRouter";
import connect from "../db";

const app = express();
const PORT = 3000;

app.use(helmet());
app.use(morgan(`dev`));
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/assets")));
app.use("/", boardRouter);
connect();

app.listen(PORT, () => {
  console.log(`🐳 ${PORT} Server Start`);
});
