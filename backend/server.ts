const express = require("express");
import mongoose from "./db";
const cors = require("cors");
import { Request, Response } from "express";

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/wiisort-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(console.error);

// User Data
// Profile,
const User = require("./models/User");

// Get all users
app.get("/users", async (req: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
});

// Create new user
app.post("/user/new", async (req: Request, res: Response) => {
  const existingUser = await User.findOne({ email: req.body.email });
  if (!existingUser) {
    const user = new User({
      email: req.body.email,
    });

    user.save();

    res.json(user);
  }
});

// Update User
// app.get('/todo/')

// Delete User
app.delete("/todo/delete/:id", async (req: Request, res: Response) => {
  const result = await User.findByIdAndDelete(req.params.id);

  res.json({ result });
});


// Save game to user library
app.post("/game/save", async (req: Request, res: Response) => {
  const user = await User.findOne({ email: req.body.email });
  user.

})
