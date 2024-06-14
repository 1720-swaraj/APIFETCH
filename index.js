//Problem Statement
// You are required to build a Node.js application with an Express.js API endpoint that fetches specific data from a relational database. The application should meet the following requirements:

// Create a GET API Endpoint:

// The endpoint should be /api/getVendorUsers and it should accept two query parameters: prId and custOrgId.
// Database Schema:
// Assume there are two tables in the database:
// PrLineItems with columns suppliers, custOrgId, and purchaseRequestId.
// VendorUsers with columns VendorOrganizationId, UserName, Name, and Role.
// Operation Requirements:
// Use prId and custOrgId to filter records in the PrLineItems table.
// Extract the suppliers column which contains comma-separated supplier IDs.
// From the filtered records, collect unique supplier IDs.
// Fetch UserName, and Name from the VendorUsers table where VendorOrganizationId matches the extracted unique supplier IDs and Role is "Admin".
// Return the result as a JSON response containing an array of objects with the fields supplierId, UserName, and Name.

import mongoose from "mongoose";
import express, { json } from "express";
import "dotenv/config";
import { dbConnection } from "./dbConnection.js";
import { vendoreRoute } from "./routes/vendorsRoute.js";

const app = express();
//middlewares
app.use(express.json());

const port = process.env.PORT;
dbConnection().catch((error) => {
  console.error(error);
});

app.use("/api",vendoreRoute)


app.listen(process.env.PORT, () => {
  console.log(`listning to port ${port}`);
});
