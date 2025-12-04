"use client"

import Link from "next/link"
import { Search, User, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">ARC</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-md relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="search"
              className="pl-10 rounded-full border-gray-300"
            />
          </div>

          {/* Navigation Dropdowns */}
          <nav className="hidden lg:flex items-center gap-2">
            <Button variant="outline" className="rounded-full">
              <span>About</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="outline" className="rounded-full">
              <span>Services</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="outline" className="rounded-full">
              <span>Get Involved</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="outline" className="rounded-full">
              <span>Resources</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </nav>

          {/* Language Toggle & User */}
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="text-xs">
              EN
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
