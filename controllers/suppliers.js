// Use prId and custOrgId to filter records in the PrLineItems table.
// Extract the suppliers column which contains comma-separated supplier IDs.
// From the filtered records, collect unique supplier IDs.
// Fetch UserName, and Name from the VendorUsers table where VendorOrganizationId matches the extracted unique supplier IDs and Role is "Admin".
// Return the result as a JSON response containing an array of objects with the fields supplierId, UserName, and Name.
import mongoose from "mongoose"
import { PrLineItems } from "../models/PrLineItems.js"
export const suppliersController = async(req,res) =>{
    
}