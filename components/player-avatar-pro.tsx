"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function PlayerAvatarPro() {
  const [name, setName] = useState("")
  const [edit, setEdit] = useState(false)
  const [input, setInput] = useState("")
  const [online, setOnline] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem("mc_username")
    if (stored) {
      setName(stored)
      setInput(stored)
    }

    // fake online status pulse
    const interval = setInterval(() => {
      setOnline((p) => !p)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const save = () => {
    if (!input) return
    localStorage.setItem("mc_username", input)
    setName(input)
    setEdit(false)
  }

  const avatar = name
    ? `https://mc-heads.net/avatar/${name}/100`
    : "https://mc-heads.net/avatar/Steve/100"

  // fake rank system (you can connect DB later)
  const getRank = (n: string) => {
    if (n.toLowerCase().includes("vip")) return "VIP"
    if (n.toLowerCase().includes("pro")) return "ELITE"
    if (n.toLowerCase().includes("god")) return "LEGEND"
    return "PLAYER"
  }

  const rank = getRank(name)

  const rankColor =
    rank === "VIP"
      ? "from-blue-400 to-cyan-400"
      : rank === "ELITE"
      ? "from-purple-400 to-pink-400"
      : rank === "LEGEND"
      ? "from-yellow-400 to-orange-400"
      : "from-gray-400 to-gray-500"

  return (
    <div className="fixed top-4 left-4 z-50">

      {/* MAIN PILL */}
      <AnimatePresence>
        {!edit && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setEdit(true)}
            className="flex items-center gap-3 px-3 py-2 rounded-full 
                       bg-white/10 backdrop-blur-xl border border-white/10
                       shadow-lg cursor-pointer"
          >

            {/* AVATAR WRAPPER (fake 3D effect) */}
            <div className="relative w-8 h-8">
              <motion.img
                src={avatar}
                className="w-8 h-8 rounded-sm"
                animate={{ rotateY: [0, 10, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              {/* ONLINE DOT */}
              <span
                className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full 
                ${online ? "bg-green-400" : "bg-gray-500"}
                border border-black`}
              />
            </div>

            {/* NAME + RANK */}
            <div className="flex flex-col leading-tight">
              <span className="text-white text-xs font-semibold">
                {name || "Set Username"}
              </span>

              <span
                className={`text-[10px] font-bold bg-linear-to-r ${rankColor} 
                text-transparent bg-clip-text`}
              >
                {rank}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* EDIT MODE */}
      <AnimatePresence>
        {edit && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 px-3 py-2 rounded-xl 
                       bg-black/40 backdrop-blur-xl border border-white/10"
          >
            <img
              src={avatar}
              className="w-8 h-8 rounded-sm"
            />

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Minecraft name"
              className="bg-transparent text-white text-xs outline-none w-24"
            />

            <button
              onClick={save}
              className="text-xs px-2 py-1 rounded-md 
                         bg-linear-to-r from-blue-500 to-purple-600"
            >
              Save
            </button>

            <button
              onClick={() => setEdit(false)}
              className="text-xs text-white/60"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}