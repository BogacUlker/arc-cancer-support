"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ChevronLeft, Search, X } from "lucide-react"
import Link from "next/link"

export default function ShoutOutPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedVolunteer, setSelectedVolunteer] = useState<string | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Alphabetically sorted volunteers
  const volunteers = [
    "Catherine W.",
    "David M.",
    "Emma R.",
    "James L.",
    "John D.",
    "Mary K.",
    "Michael B.",
    "Patricia O.",
    "Sarah K.",
    "Thomas H."
  ]

  const filteredVolunteers = useMemo(() => {
    if (!searchQuery.trim()) return volunteers
    return volunteers.filter(volunteer =>
      volunteer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  const handleSelectVolunteer = (volunteer: string) => {
    setSelectedVolunteer(volunteer)
    setSearchQuery("")
    setIsDropdownOpen(false)
  }

  const handleClearSelection = () => {
    setSelectedVolunteer(null)
    setSearchQuery("")
  }

  return (
    <div className="w-full">
      {/* Back Button & Title */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/volunteer-community">
              <ChevronLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-2xl font-semibold">Send a Shout-out</h1>
        </div>
      </div>

      {/* Form Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <CardContent className="p-0 space-y-6">
              {/* Section Heading */}
              <div className="text-center mb-8">
                <h2 className="text-xl font-semibold mb-2">Recognize a Fellow Volunteer</h2>
                <p className="text-muted-foreground">
                  Send a shout-out to a volunteer who has made a difference. Your message
                  will be shared with them and may be featured in our community highlights.
                </p>
              </div>

              {/* Volunteer Name Search Input */}
              <div className="space-y-2">
                <Label>Select Volunteer</Label>
                <div className="relative">
                  {selectedVolunteer ? (
                    <div className="flex items-center justify-between border rounded-md px-3 py-2 bg-primary/5">
                      <span className="font-medium text-primary">{selectedVolunteer}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={handleClearSelection}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <>
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Type to search volunteers..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value)
                          setIsDropdownOpen(true)
                        }}
                        onFocus={() => setIsDropdownOpen(true)}
                        onBlur={() => {
                          // Delay closing to allow click on dropdown item
                          setTimeout(() => setIsDropdownOpen(false), 200)
                        }}
                      />

                      {/* Dropdown Results */}
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
                          {filteredVolunteers.length > 0 ? (
                            filteredVolunteers.map((volunteer) => (
                              <button
                                key={volunteer}
                                type="button"
                                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors text-sm"
                                onMouseDown={(e) => {
                                  e.preventDefault()
                                  handleSelectVolunteer(volunteer)
                                }}
                              >
                                {volunteer}
                              </button>
                            ))
                          ) : (
                            <div className="px-4 py-3 text-sm text-muted-foreground">
                              No volunteers found matching &ldquo;{searchQuery}&rdquo;
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  Start typing a name to search (sorted alphabetically)
                </p>
              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <Label>Your Message</Label>
                <Textarea
                  placeholder="Write your shout-out message here. Tell them why they're amazing and how they've made a difference..."
                  className="min-h-[200px]"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full md:w-auto"
                disabled={!selectedVolunteer}
              >
                Send Shout-out
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
