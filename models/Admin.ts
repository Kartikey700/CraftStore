import mongoose from "mongoose"

const AdminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

// IMPORTANT: force correct model export
const Admin =
  mongoose.models.Admin || mongoose.model("Admin", AdminSchema)

export default Admin