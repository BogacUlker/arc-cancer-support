"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  MessageCircle,
  Trophy,
  Star,
  Heart,
  Clock,
  Target,
  Sparkles,
  GraduationCap,
  BookOpen,
  Video
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
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

  const achievements = [
    {
      icon: Heart,
      title: "First Steps",
      description: "Complete your first volunteer shift",
      earned: true
    },
    {
      icon: Clock,
      title: "10 Hours",
      description: "Volunteer for 10 hours",
      earned: true
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Participate in a team event",
      earned: true
    },
    {
      icon: Target,
      title: "50 Hours",
      description: "Volunteer for 50 hours",
      earned: false
    },
    {
      icon: Star,
      title: "Mentor",
      description: "Help train a new volunteer",
      earned: false
    },
    {
      icon: Trophy,
      title: "100 Hours",
      description: "Volunteer for 100 hours",
      earned: false
    }
  ]

  const shoutouts = [
    {
      from: "Mary K.",
      to: "John D.",
      message: "Thank you for always being there to help with the reception desk. Your positive attitude brightens everyone's day!",
      date: "2 days ago"
    },
    {
      from: "Sarah M.",
      to: "Emma R.",
      message: "Your dedication to the support group is incredible. The families you help are so grateful for your compassion.",
      date: "1 week ago"
    },
    {
      from: "Michael B.",
      to: "David M.",
      message: "Outstanding work at the fundraising event! Your energy and enthusiasm helped us exceed our goals.",
      date: "2 weeks ago"
    }
  ]

  const trainingModules = [
    {
      icon: BookOpen,
      title: "Volunteer Orientation",
      description: "Introduction to ARC's mission and values",
      status: "completed"
    },
    {
      icon: Heart,
      title: "Empathetic Communication",
      description: "Learn to support with compassion",
      status: "completed"
    },
    {
      icon: Video,
      title: "Peer Support Training",
      description: "Advanced techniques for peer support",
      status: "available"
    },
    {
      icon: GraduationCap,
      title: "Leadership Development",
      description: "Skills for volunteer mentors",
      status: "locked"
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
        <div className="aspect-[21/9] bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden">
          <Image
            src="/volunteer-group.jpg"
            alt="ARC volunteers at a community event wearing branded vests"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/30"></div>
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

      {/* Your Achievements Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-2">Your Achievements</h2>
          <p className="text-muted-foreground text-center mb-8">Earn badges as you contribute to the ARC community</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card key={index} className={`text-center p-4 ${!achievement.earned ? 'opacity-50' : ''}`}>
                  <CardContent className="p-0 space-y-2">
                    <div className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center ${achievement.earned ? 'bg-primary/20' : 'bg-gray-200'}`}>
                      <IconComponent className={`h-7 w-7 ${achievement.earned ? 'text-primary' : 'text-gray-400'}`} />
                    </div>
                    <h3 className="font-medium text-sm">{achievement.title}</h3>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    {achievement.earned && (
                      <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
                        <Sparkles className="h-3 w-3" /> Earned
                      </span>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Shout-outs from the Community */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-semibold">Shout-outs from the ARC Community</h2>
              <p className="text-muted-foreground">Recognition from fellow volunteers</p>
            </div>
            <Button asChild>
              <Link href="/volunteer-shout-out">Send a Shout-out</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shoutouts.map((shoutout, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{shoutout.from}</span>
                    <span>→</span>
                    <span className="font-medium text-primary">{shoutout.to}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    &ldquo;{shoutout.message}&rdquo;
                  </p>
                  <p className="text-xs text-muted-foreground">{shoutout.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Helpful Training Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-2">Helpful Training</h2>
          <p className="text-muted-foreground text-center mb-8">Develop your skills and knowledge with our training modules</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {trainingModules.map((module, index) => {
              const IconComponent = module.icon
              return (
                <Card key={index} className={`p-6 ${module.status === 'locked' ? 'opacity-60' : ''}`}>
                  <CardContent className="p-0 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium">{module.title}</h3>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
                    {module.status === 'completed' && (
                      <span className="inline-flex items-center gap-1 text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
                        Completed
                      </span>
                    )}
                    {module.status === 'available' && (
                      <Button size="sm" variant="outline">Start Module</Button>
                    )}
                    {module.status === 'locked' && (
                      <span className="inline-flex items-center gap-1 text-xs text-gray-500 font-medium">
                        Complete previous modules first
                      </span>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Community & Recognition Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">Community & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Volunteer of the Month
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="bg-primary/10 text-primary text-xl">SK</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-lg">Sarah K.</p>
                    <p className="text-sm text-muted-foreground">Peer Support Volunteer</p>
                    <p className="text-xs text-muted-foreground mt-1">December 2024</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Recognized for exceptional dedication to supporting families and going above and beyond in peer support sessions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  Community Milestones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Total Volunteer Hours This Month</span>
                    <span className="font-bold text-primary">1,250</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Shout-outs Sent</span>
                    <span className="font-bold text-primary">48</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Stories Shared</span>
                    <span className="font-bold text-primary">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">New Volunteers This Month</span>
                    <span className="font-bold text-primary">8</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Story Carousel */}
      <section className="py-16">
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
      <section className="bg-gray-50 py-16">
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
