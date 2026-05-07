import mongoose from "mongoose"
import path from "path"

// ❌ REMOVE @/
// import { connectDB } from "@/lib/db"
// import Admin from "@/models/Admin"

// ✅ USE RELATIVE IMPORTS
import { connectDB } from "../lib/db"
import Admin from "../models/Admin"

async function run() {
  await connectDB()

  await Admin.deleteMany({})

  await Admin.create({
    username: "admin",
    password: "ashu786",
  })

  console.log("✅ Admin reset done")
  process.exit()
}

run()