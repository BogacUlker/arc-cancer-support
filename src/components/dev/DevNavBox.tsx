"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, ChevronLeft, Layout } from "lucide-react"

const pages = [
  { name: "Home", path: "/" },
  { name: "Volunteer", path: "/volunteer" },
  { name: "Volunteer Sign Up", path: "/volunteer/sign-up" },
  { name: "Volunteer Community", path: "/volunteer-community" },
  { name: "Volunteer Dashboard", path: "/volunteer-dashboard" },
  { name: "Share Your Story", path: "/volunteer-share-your-story" },
  { name: "Volunteer Shout Out", path: "/volunteer-shout-out" },
]

export function DevNavBox() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 left-4 z-[9999]">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition-colors text-sm font-medium"
      >
        <Layout className="h-4 w-4" />
        {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </button>

      {/* Navigation Panel */}
      {isOpen && (
        <div className="absolute bottom-12 left-0 bg-gray-900 text-white rounded-lg shadow-xl p-3 min-w-[200px]">
          <div className="text-xs text-gray-400 uppercase tracking-wide mb-2 px-2">
            Dev Navigation
          </div>
          <nav className="flex flex-col gap-1">
            {pages.map((page) => (
              <Link
                key={page.path}
                href={page.path}
                className="px-3 py-2 text-sm rounded-md hover:bg-gray-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {page.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}
