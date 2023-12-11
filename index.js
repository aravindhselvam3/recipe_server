import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./src/routes/user.js";
import { recipesRouter } from "./src/routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
  "mongodb+srv://aravindhselvam3:aravindh@cluster0.3jnxgfn.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const port = 3001;
app.listen(port, () => console.log(`server running on port: ${port}`));
