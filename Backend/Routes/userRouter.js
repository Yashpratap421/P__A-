import express from "express";
import {UserLogin}  from "../Controllers/userController.js"; 

const router = express.Router();

router.post('/login', UserLogin);

export default router; 