// VendorUsers with columns VendorOrganizationId, UserName, Name, and Role.

import mongoose from "mongoose";

const vendorUsers = mongoose.Schema({
  VendorOrganizationId: {
    type: mongoose.SchemaTypes.ObjectId,
    unique: true,
  },
  UserName: {
    type: String,
    required: true,
    unique: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Role: {
    type: String,
    required: true,
  },
});

export const VendorUsers = mongoose.model("vendor_users", vendorUsers);
