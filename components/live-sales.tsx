"use client"

import { useEffect, useState } from "react"

const names = ["Alex", "Steve", "NoobMaster", "ProGamer", "Herobrine"]

export default function LiveSales() {
  const [text, setText] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      const name = names[Math.floor(Math.random() * names.length)]
      const item = ["VIP", "Elite", "Legend"][Math.floor(Math.random() * 3)]

      setText(`${name} just bought ${item} ⚡`)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-4 left-4 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-xl text-sm text-white border border-white/10 animate-pulse">
      📊 {text}
    </div>
  )
}