"use client"

import { useEffect } from "react"

type ToastProps = {
  message: string
  show: boolean
  onClose: () => void
}

export default function Toast({ message, show, onClose }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose()
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  if (!show) return null

  return (
    <div className="
      fixed bottom-6 left-1/2 -translate-x-1/2
      z-50
      bg-zinc-950 border border-red-600
      text-white px-4 py-3 rounded-xl
      shadow-lg animate-bounce
      flex items-center gap-2
    ">
      <span className="text-red-500">🎉</span>
      <span className="text-sm font-medium">{message}</span>
    </div>
  )
}