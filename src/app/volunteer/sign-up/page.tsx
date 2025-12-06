"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function VolunteerSignUpPage() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1)
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]
  const years = Array.from({ length: 80 }, (_, i) => new Date().getFullYear() - i)

  const availabilityOptions = [
    "Monday Morning",
    "Monday Afternoon",
    "Tuesday Morning",
    "Tuesday Afternoon",
    "Wednesday Morning",
    "Wednesday Afternoon",
    "Thursday Morning",
    "Thursday Afternoon",
    "Friday Morning",
    "Friday Afternoon"
  ]

  const interestAreas = [
    "Reception & Administration",
    "Peer Support",
    "Event Support",
    "Driving Service",
    "Fundraising",
    "Community Outreach",
    "Marketing & Communications",
    "IT Support",
    "Counselling Support",
    "Complementary Therapies"
  ]

  return (
    <div className="w-full">
      {/* Back Button & Title */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/volunteer">
              <ChevronLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-semibold">Volunteer Application</h1>
            <p className="text-muted-foreground">
              Fill out the form below to apply to become a volunteer. We&apos;ll be in touch within 5 working days.
            </p>
          </div>
        </div>

        {/* Purple Form Container */}
        <div className="bg-primary/10 rounded-lg p-8">
          <form className="space-y-8">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  placeholder="Enter your first name"
                  className="bg-white"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  placeholder="Enter your last name"
                  className="bg-white"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+353 1 234 5678"
                  className="bg-white"
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                placeholder="Enter your full address"
                className="bg-white"
              />
            </div>

            {/* Current Occupation */}
            <div className="space-y-2">
              <Label htmlFor="occupation">Current Occupation</Label>
              <Input
                id="occupation"
                placeholder="e.g. Teacher, Nurse, Student, Retired"
                className="bg-white"
              />
            </div>

            {/* Age Range */}
            <div className="space-y-2">
              <Label>Age Range</Label>
              <Select>
                <SelectTrigger className="bg-white max-w-xs">
                  <SelectValue placeholder="Select your age range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="prefer-not">Prefer not to say</SelectItem>
                  <SelectItem value="18-25">18-25</SelectItem>
                  <SelectItem value="26-35">26-35</SelectItem>
                  <SelectItem value="36-45">36-45</SelectItem>
                  <SelectItem value="46-55">46-55</SelectItem>
                  <SelectItem value="56-65">56-65</SelectItem>
                  <SelectItem value="65+">65+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Date of Birth */}
            <div className="space-y-2">
              <Label>Date of Birth</Label>
              <div className="flex gap-4 flex-wrap">
                <Select>
                  <SelectTrigger className="bg-white w-24">
                    <SelectValue placeholder="Day" />
                  </SelectTrigger>
                  <SelectContent>
                    {days.map((day) => (
                      <SelectItem key={day} value={day.toString()}>
                        {day}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="bg-white w-32">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((month, index) => (
                      <SelectItem key={month} value={(index + 1).toString()}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="bg-white w-28">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Availability Checkboxes - 5x2 Grid */}
            <div className="space-y-4">
              <Label>Availability</Label>
              <div className="grid grid-cols-2 gap-3">
                {availabilityOptions.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox
                      id={option.replace(/\s/g, "-").toLowerCase()}
                      className="border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <Label
                      htmlFor={option.replace(/\s/g, "-").toLowerCase()}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Interest Areas Dropdown */}
            <div className="space-y-2">
              <Label>Areas of Interest</Label>
              <Select>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Select your area of interest" />
                </SelectTrigger>
                <SelectContent>
                  {interestAreas.map((area) => (
                    <SelectItem key={area} value={area.toLowerCase().replace(/\s/g, "-")}>
                      {area}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Why Volunteer Textarea */}
            <div className="space-y-2">
              <Label htmlFor="motivation">
                What motivates you to volunteer with ARC Cancer Support?
              </Label>
              <Textarea
                id="motivation"
                placeholder="Tell us about your motivation to volunteer, any relevant experience, and what you hope to gain from the experience..."
                className="bg-white min-h-[150px]"
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                className="border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary mt-1"
              />
              <Label htmlFor="terms" className="text-sm font-normal cursor-pointer">
                I agree to the terms and conditions and understand that my application will be processed
                in accordance with ARC&apos;s privacy policy. I consent to a Garda vetting check if required
                for my volunteer role.
              </Label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button type="submit" size="lg" className="w-full md:w-auto px-12">
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
