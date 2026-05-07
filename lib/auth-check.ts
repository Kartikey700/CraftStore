import { verifyToken } from "@/lib/auth"
import { cookies } from "next/headers"

export async function getAdmin() {
  const token = (await cookies()).get("admin_token")?.value
  if (!token) return null

  try {
    return verifyToken(token)
  } catch {
    return null
  }
}