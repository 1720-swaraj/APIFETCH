import express from "express";
import {
  createUsersController,
  getAllUserDataController,
  getUserNameAndNameController,
} from "../controllers/vendors.js";

export const vendoreRoute = express.Router();

vendoreRoute.route("/postUserData").post(createUsersController);
vendoreRoute.route("/getUserNameAndName").get(getUserNameAndNameController);
vendoreRoute.route("/getAllUserData").get(getAllUserDataController);
