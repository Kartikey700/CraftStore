"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function PlayerInput() {
  const [name, setName] = useState("")
  const [open, setOpen] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("mc_username")
    if (stored) {
      setName(stored)
      setSaved(true)
    }
  }, [])

  const save = () => {
    if (!name) return
    localStorage.setItem("mc_username", name)
    setSaved(true)
    setOpen(false)
  }

  return (
    <div className="fixed top-4 right-40 z-50">

      {/* MINIMIZED STATE */}
      {!open && saved && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={() => setOpen(true)}
          className="cursor-pointer px-3 py-1.5 rounded-full 
                     bg-white/10 backdrop-blur-md border border-white/10
                     text-white text-xs flex items-center gap-2 shadow-lg"
        >
          👤 <span className="text-white/80">{name}</span>
        </motion.div>
      )}

      {/* NOT SET OR EDIT MODE */}
      <AnimatePresence>
        {(!saved || open) && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-white/10 backdrop-blur-xl border border-white/10 
                       rounded-xl p-2 flex items-center gap-2 shadow-xl"
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Minecraft name"
              className="bg-transparent outline-none text-white text-xs w-28"
            />

            <button
              onClick={save}
              className="text-xs px-2 py-1 rounded-md 
                         bg-linear-to-r from-blue-500 to-purple-500 text-white"
            >
              Save
            </button>

            {saved && (
              <button
                onClick={() => setOpen(false)}
                className="text-xs text-white/60"
              >
                ✕
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}