"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function PlayerAvatarPill() {
  const [name, setName] = useState("")
  const [edit, setEdit] = useState(false)
  const [input, setInput] = useState("")

  useEffect(() => {
    const stored = localStorage.getItem("mc_username")
    if (stored) {
      setName(stored)
      setInput(stored)
    }
  }, [])

  const save = () => {
    if (!input) return
    localStorage.setItem("mc_username", input)
    setName(input)
    setEdit(false)
  }

  const avatarUrl = name
    ? `https://mc-heads.net/avatar/${name}`
    : "https://mc-heads.net/avatar/Steve"

  return (
    <div className="fixed top-4 left-4 z-50">

      {/* MAIN PILL */}
      <AnimatePresence>
        {!edit && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            onClick={() => setEdit(true)}
            className="flex items-center gap-2 px-3 py-2 rounded-full 
                       bg-white/10 backdrop-blur-md border border-white/10
                       shadow-lg cursor-pointer hover:bg-white/15 transition"
          >

            {/* AVATAR */}
            <img
              src={avatarUrl}
              className="w-6 h-6 rounded-sm"
              alt="avatar"
            />

            {/* NAME */}
            <span className="text-white text-xs font-medium">
              {name || "Set Username"}
            </span>
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
            className="flex items-center gap-2 px-2 py-2 rounded-xl 
                       bg-black/40 backdrop-blur-xl border border-white/10"
          >

            <img
              src={avatarUrl}
              className="w-6 h-6 rounded-sm"
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