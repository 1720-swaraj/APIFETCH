import mongoose from "mongoose";
import { VendorUsers } from "../models/VendorUsers.js";
// VendorUsers with columns VendorOrganizationId, UserName, Name, and Role.

//post username data
export const createUsersController = async (req, res) => {
  const { UserName, Name, Role } = req.body;
  try {
    console.log(UserName, Name, Role);
    await VendorUsers.create({ UserName, Name, Role });
    return res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(404).json({ message: "No user" });
    console.log(error);
  }
};
// get username and name by id
export const getUserNameAndNameController = async (req, res) => {
  try {
    const vendoreId = req.body;
    const userNameAndName = await VendorUsers.findById(vendoreId);
    console.log(userNameAndName.UserName, userNameAndName.Name);
    return res.status(200).json({ message: "succes" });
  } catch (error) {
    return res.status(404).json({ message: "no user found" });
  }
};

//get all data

export const getAllUserDataController = async (req, res) => {
  try {
    const allData = await VendorUsers.find({});
    return res.status(200).json(allData);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};
