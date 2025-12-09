"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, User, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface DropdownItem {
  label: string
  href: string
}

interface NavDropdownProps {
  label: string
  items: DropdownItem[]
}

function NavDropdown({ label, items }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Button
        variant="outline"
        className="rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{label}</span>
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 pt-2 min-w-[180px] z-50">
          <div className="bg-white border rounded-lg shadow-lg py-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

const navigationItems = {
  about: [
    { label: "Our Story", href: "/about/our-story" },
    { label: "Contact Us", href: "/contact" },
  ],
  services: [
    { label: "Support Services", href: "/services" },
    { label: "Counselling", href: "/services/counselling" },
    { label: "Programs", href: "/services/programs" },
  ],
  getInvolved: [
    { label: "Donate", href: "/donate" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Volunteer Dashboard", href: "/volunteer-dashboard" },
  ],
  resources: [
    { label: "Cancer Information", href: "/resources/cancer-info" },
    { label: "FAQs", href: "/resources/faqs" },
    { label: "News & Events", href: "/resources/news" },
  ],
}

export function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/ARC.png"
              alt="ARC Cancer Support Centres"
              width={120}
              height={60}
              className="h-14 w-auto"
              priority
            />
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
            <NavDropdown label="About" items={navigationItems.about} />
            <NavDropdown label="Services" items={navigationItems.services} />
            <NavDropdown label="Get Involved" items={navigationItems.getInvolved} />
            <NavDropdown label="Resources" items={navigationItems.resources} />
          </nav>

          {/* Donate CTA & User */}
          <div className="flex items-center gap-3">
            <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/donate">Donate</Link>
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
