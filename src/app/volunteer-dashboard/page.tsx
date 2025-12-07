"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  ChevronLeft,
  MapPin,
  MessageSquare,
  Phone,
  Clock,
  CheckCircle2,
  Flag
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Simple Badge component since we haven't created it yet
function SimpleBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}>
      {children}
    </span>
  )
}

export default function TaskDashboardPage() {
  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button & Title */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/volunteer">
              <ChevronLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-2xl font-semibold">Volunteer Dashboard</h1>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Tasks */}
          <div className="lg:col-span-2 space-y-6">
            {/* Section Title */}
            <h2 className="text-lg font-medium">Your Upcoming Tasks</h2>

            {/* Task Cards */}
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="aspect-video w-48 rounded-lg overflow-hidden relative">
                    <Image
                      src="/welcome-header.jpg"
                      alt="Reception desk support"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <SimpleBadge className="bg-primary/10 text-primary">Confirmed</SimpleBadge>
                </div>
                <h3 className="font-medium mb-2">Reception Desk Support</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>ARC Dublin Centre, 65 Eccles Street</span>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button size="sm">View Details</Button>
                  <Button size="sm" variant="outline">Reschedule</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="aspect-video w-48 rounded-lg overflow-hidden relative">
                    <Image
                      src="/arc-event.jpg"
                      alt="ARC fundraising event setup"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <SimpleBadge className="bg-yellow-100 text-yellow-800">Pending</SimpleBadge>
                </div>
                <h3 className="font-medium mb-2">Fundraising Event Setup</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>Phoenix Park, Dublin</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Saturday, 15th December 2024</span>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button size="sm">View Details</Button>
                  <Button size="sm" variant="outline">Reschedule</Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <div className="pt-6">
              <h2 className="text-lg font-medium mb-4">Contact Your Coordinator</h2>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-muted-foreground" />
                    <Button variant="outline" className="flex-1 justify-start">
                      Send a Message
                    </Button>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <Button variant="outline" className="flex-1 justify-start">
                      +353 1 234 5678
                    </Button>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Monday - Friday, 9 AM - 5 PM
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Profile & Activity */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card>
              <CardContent className="p-6 text-center">
                <div className="relative inline-block mb-4">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="bg-primary/10 text-primary text-2xl">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute bottom-0 right-0 h-6 w-6 bg-primary rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h2 className="text-lg font-medium mb-4">Welcome back, John!</h2>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Thank you for being a valued volunteer with ARC Cancer Support.
                  Your dedication and compassion make a real difference in the lives
                  of those affected by cancer. You have completed 45 volunteer hours
                  this year and helped support over 30 families.
                </p>
                <Button className="w-full">Edit Profile</Button>
              </CardContent>
            </Card>

            {/* Activity Section */}
            <div>
              <h2 className="text-lg font-medium mb-4">Your Activity</h2>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Tasks Completed</p>
                      <p className="text-2xl font-bold text-primary">24</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Flag className="h-5 w-5 text-primary" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Hours Volunteered</p>
                      <p className="text-2xl font-bold text-primary">45</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Links */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/volunteer-community">View Community</Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/volunteer-shout-out">Send a Shout-out</Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/volunteer-share-your-story">Share Your Story</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
