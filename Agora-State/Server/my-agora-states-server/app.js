const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
const router = require("./router/discussions");

// app.js -> 라우터로 라우팅 -> 라우터에서 컨트롤러로 라우팅 ->  컨트롤러 내부에서 로직에 따른 response 값 전달

const port = 4000;
const discussionsRouter = require("./router/discussions");

app.use("/", discussionsRouter);

app.get("/", (req, res) => {
  res.status(200).send("fe-sprint-my-agora-states-server");
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
