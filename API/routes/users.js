import express from "express";

import { createUser, getUserByEmailAddress } from "../controllers/Users.js";

const router = express.Router();

router.post("/create", createUser);
router.get("/getByEmail", getUserByEmailAddress);

export default router;
