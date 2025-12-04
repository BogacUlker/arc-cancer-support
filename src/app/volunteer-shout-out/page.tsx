"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function ShoutOutPage() {
  const volunteers = [
    "Sarah K.",
    "Michael B.",
    "Emma R.",
    "David M.",
    "John D.",
    "Mary K.",
    "Patricia O.",
    "James L.",
    "Catherine W.",
    "Thomas H."
  ]

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

              {/* Volunteer Name Search/Dropdown */}
              <div className="space-y-2">
                <Label>Select Volunteer</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Search volunteer name" />
                  </SelectTrigger>
                  <SelectContent>
                    {volunteers.map((volunteer) => (
                      <SelectItem
                        key={volunteer}
                        value={volunteer.toLowerCase().replace(/\s/g, "-")}
                      >
                        {volunteer}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
              <Button type="submit" className="w-full md:w-auto">
                Send Shout-out
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
