import express from "express";

import {
  createUser,
  getUserByEmailAddress,
  getUsersWithinDistance,
} from "../controllers/Users.js";

const router = express.Router();

router.post("/create", createUser);
router.get("/getByEmail", getUserByEmailAddress);
router.get("/getByDistance", getUsersWithinDistance);

export default router;
