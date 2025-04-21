import express from "express";
import path from "path";
import viewRouter from "./viewroute";

const app = express();

// Initialisation du moteur de template pug
app.set("view engine", "pug");
app.set("views", "views");

app.use(express.static("public"));

app.use("/", viewRouter);

const PORT = 8000;
app.listen(PORT, () =>
  console.log(`App running on port http://localhost:4000...`)
);
