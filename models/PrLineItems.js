// PrLineItems with columns suppliers, custOrgId, and purchaseRequestId.

import mongoose from "mongoose";

const prLineItems = mongoose.Schema({
  custOrgId: {
    type: mongoose.SchemaTypes.ObjectId,
    unique: true,
  },
  purchaseRequestId: {
    type: mongoose.SchemaTypes.ObjectId,
    unique: true,
  },
  suppliers: {
    type: mongoose.SchemaType.ObjectId,
  },
});

export const PrLineItems = mongoose.model("pr_line_items", prLineItems);
