"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  MessageCircle,
  Trophy,
  Star
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function VolunteerCommunityPage() {
  const [currentStory, setCurrentStory] = useState(0)

  const featuredStories = [
    {
      quote: "Being part of the ARC volunteer community has given me more than I could have ever imagined. The friendships I've made and the purpose I've found in helping others has transformed my life. Every day, I'm grateful for the opportunity to make a difference.",
      author: "Emma R.",
      role: "Volunteer since 2018"
    },
    {
      quote: "After my own cancer journey, I wanted to give back. The community here welcomed me with open arms and gave me the support I needed to support others. It's a beautiful cycle of care and compassion.",
      author: "David M.",
      role: "Peer Support Volunteer"
    }
  ]

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % featuredStories.length)
  }

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + featuredStories.length) % featuredStories.length)
  }

  return (
    <div className="w-full">
      {/* Back Button & Title */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/volunteer-dashboard">
              <ChevronLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-2xl font-semibold">Volunteer Community</h1>
        </div>
      </div>

      {/* Hero Banner - Large Angled Image */}
      <section className="relative">
        <div className="aspect-[21/9] bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/50 text-xl">Community Hero Banner</span>
          </div>
          {/* Angled overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-white transform -skew-y-2 origin-right translate-y-12"></div>
        </div>
      </section>

      {/* Feature Icons - 5 Icons */}
      <section className="py-16 mt-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">Community Features</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium text-sm">Recognition</h3>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium text-sm">Connect</h3>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium text-sm">Discuss</h3>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium text-sm">Achievements</h3>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium text-sm">Rewards</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Member Cards - 2 Volunteer Profiles */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">Featured Volunteers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="p-0 space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Sarah has been volunteering with ARC for over 5 years. She specializes in peer support
                  and has helped dozens of families navigate their cancer journey. Her compassion and
                  dedication make her an invaluable part of our team.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary">SK</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Sarah K.</p>
                    <p className="text-sm text-muted-foreground">Peer Support Volunteer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0 space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Michael joined our volunteer team after his own experience with cancer. He now runs
                  our weekly support groups and has become a mentor to new volunteers. His insight
                  and empathy are truly inspiring.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary">MB</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Michael B.</p>
                    <p className="text-sm text-muted-foreground">Support Group Leader</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h2 className="text-lg font-medium text-center mb-4">Find a Volunteer</h2>
            <Input
              placeholder="Search by name..."
              className="text-center"
            />
          </div>
        </div>
      </section>

      {/* Featured Story Carousel */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">Volunteer Stories</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <CardContent className="space-y-6 p-0">
                <p className="text-muted-foreground italic leading-relaxed text-center">
                  &ldquo;{featuredStories[currentStory].quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {featuredStories[currentStory].author.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{featuredStories[currentStory].author}</p>
                      <p className="text-sm text-muted-foreground">{featuredStories[currentStory].role}</p>
                    </div>
                  </div>
                  <Button variant="outline" asChild>
                    <Link href="/volunteer-share-your-story">Share Your Story</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            {/* Carousel Navigation */}
            <div className="flex justify-center gap-4 mt-6">
              <Button variant="outline" size="icon" onClick={prevStory}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextStory}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/volunteer-shout-out">Send a Shout-out</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/volunteer-share-your-story">Share Your Story</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
