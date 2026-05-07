import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema(
  {
    items: {
      type: Array,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "pending", // pending → paid → shipped → completed
    },
    user: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
)

// prevent overwrite in dev mode
const Order =
  mongoose.models.Order || mongoose.model("Order", OrderSchema)

export default Order