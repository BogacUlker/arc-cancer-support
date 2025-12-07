"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Heart,
  Users,
  BookOpen,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "ARC Cancer Support has been a lifeline for our family. The volunteers are compassionate, understanding, and always there when we need someone to talk to. Their support services helped us navigate through the most difficult time of our lives.",
      author: "Sarah M.",
      role: "Family Member"
    },
    {
      quote: "The community here is incredible. Everyone understands what you're going through, and the programs they offer gave me hope and strength during my treatment journey.",
      author: "Michael O.",
      role: "Cancer Survivor"
    }
  ]

  const helpCards = [
    {
      icon: Heart,
      title: "Support Services",
      description: "Access our range of free support services including counselling, therapy sessions, and emotional support for patients and families.",
      href: "/services"
    },
    {
      icon: Users,
      title: "Join Our Community",
      description: "Connect with others who understand your journey. Our support groups and community events provide a safe space for sharing and healing.",
      href: "/volunteer-community"
    },
    {
      icon: BookOpen,
      title: "Resources & Information",
      description: "Find comprehensive cancer information, practical guides, and educational materials to help you navigate your journey.",
      href: "/resources"
    },
    {
      icon: MapPin,
      title: "Visit Our Centre",
      description: "Located in Dublin, our welcoming centre offers a peaceful environment with access to all our services and support programs.",
      href: "/contact"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              ARC Cancer Support provides free support services to anyone affected by cancer,
              as well as their families, friends, and carers. We believe no one should face
              cancer alone. Our dedicated team of professionals and volunteers are here to
              support you through every step of your journey.
            </p>
            <div className="flex gap-4">
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/donate">Donate</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/volunteer">Become a Volunteer</Link>
              </Button>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg overflow-hidden">
              <Image
                src="/christmas-family.jpg"
                alt="Family celebrating together during the holiday season"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* How Can We Help Section - Enhanced Cards with Descriptions */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">How Can We Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCards.map((card, index) => {
              const IconComponent = card.icon
              return (
                <Link key={index} href={card.href}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardContent className="pt-6 pb-6 space-y-3">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">{card.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
          {/* CTA Button below cards */}
          <div className="flex justify-center mt-8">
            <Button size="lg" className="px-8" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Content - 3 Column Image Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">Latest News & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image
                  src="/martin-landscape.jpg"
                  alt="Support group discussion at ARC"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-4 space-y-2">
                <h3 className="font-semibold">Cancer Support Workshop</h3>
                <p className="text-sm text-muted-foreground">Join our weekly support groups and connect with others on similar journeys.</p>
                <Button variant="outline" size="sm" className="w-full">
                  Read More
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image
                  src="/family-support.jpg"
                  alt="Family enjoying quality time together"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-4 space-y-2">
                <h3 className="font-semibold">Family Support Services</h3>
                <p className="text-sm text-muted-foreground">Resources and guidance for families navigating the cancer journey together.</p>
                <Button variant="outline" size="sm" className="w-full">
                  Read More
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image
                  src="/volunteer-group.jpg"
                  alt="ARC volunteers at community event"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-4 space-y-2">
                <h3 className="font-semibold">Community Fundraiser</h3>
                <p className="text-sm text-muted-foreground">Our volunteers raised funds at the annual community walk event.</p>
                <Button variant="outline" size="sm" className="w-full">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">What People Say</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground italic leading-relaxed">
                  &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonials[currentTestimonial].author.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="font-medium">{testimonials[currentTestimonial].author}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Carousel Navigation */}
            <div className="flex justify-center gap-4 mt-6">
              <Button variant="outline" size="icon" onClick={prevTestimonial}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextTestimonial}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-4">Stay Connected</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for updates on events, services, and ways to get involved in supporting those affected by cancer.
          </p>
          <div className="max-w-md mx-auto mb-8">
            <div className="flex gap-2">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/donate">Donate</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/volunteer">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
