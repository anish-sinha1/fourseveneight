//Implements server

import dotenv from "dotenv";
import express from "express";
import http from "http";
import passport from "passport";
import cors from "cors";
import mongoSanitize from "express-mongo-sanitize";

import connectDatabase from "./config/db";

import userRouter from "./api/routes/userRouter";
import adminRouter from "./api/routes/adminRouter";
import profileRouter from "./api/routes/profileRouter";
import postRouter from "./api/routes/postRouter";
import commentRouter from "./api/routes/commentRouter";
import tagsRouter from "./api/routes/tagsRouter";
import mediaRouter from "./api/routes/mediaRouter";
import questionRouter from "./api/routes/questionRouter";
import tmceRouter from "./api/routes/tmceRouter";

dotenv.config({ path: "src/config/config.env" });

const app: express.Application = express();
app.use(cors());

process.on("uncaughtException", () => {
  process.exit(1);
});

app.use(mongoSanitize());
app.use(express.json());

connectDatabase();

app.use(passport.initialize());
require("./auth/passport")(passport);

app.use("/api/users", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/profiles", profileRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);
app.use("/api/tags", tagsRouter);
app.use("/api/media", mediaRouter);
app.use("/api/questions", questionRouter);
app.use("/api/tmce", tmceRouter);

const port = process.env.PORT || 8000;

const server: http.Server = app.listen(port);

process.on("unhandledRejection", () => {
  server.close(() => {
    process.exit(1);
  });
});

export default server;
