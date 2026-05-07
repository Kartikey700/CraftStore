import { connectDB } from "@/lib/db"
import Admin from "@/models/Admin"

async function run() {
  await connectDB()

  await Admin.create({
    username: "admin",
    password: "ashu786",
  })

  console.log("Admin created")
  process.exit()
}

run()