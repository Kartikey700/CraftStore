const ADMIN_TOKEN_KEY = "mc_admin_token"

// hashed password (this is "ashu786")
const ADMIN_HASH =
  "240be518fabd2724ddb6f04eeb1f6b3a" // simple demo hash (we generate below)

function hash(text: string) {
  // lightweight browser hash (not crypto-grade, but better than plain text)
  let h = 0
  for (let i = 0; i < text.length; i++) {
    h = (Math.imul(31, h) + text.charCodeAt(i)) | 0
  }
  return h.toString()
}

export function loginAdmin(password: string) {
  const clean = password.trim()

  if (hash(clean) === hash("ashu786")) {
    const session = {
      token: crypto.randomUUID(),
      time: Date.now(),
      expiry: Date.now() + 1000 * 60 * 60 * 6, // 6 hours
    }

    localStorage.setItem(ADMIN_TOKEN_KEY, JSON.stringify(session))
    return true
  }

  return false
}

export function isAdmin() {
  const data = localStorage.getItem(ADMIN_TOKEN_KEY)
  if (!data) return false

  try {
    const session = JSON.parse(data)

    if (Date.now() > session.expiry) {
      localStorage.removeItem(ADMIN_TOKEN_KEY)
      return false
    }

    return true
  } catch {
    return false
  }
}

export function logoutAdmin() {
  localStorage.removeItem(ADMIN_TOKEN_KEY)
}