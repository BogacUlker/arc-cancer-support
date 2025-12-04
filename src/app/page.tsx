"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Heart,
  Info,
  FileText,
  Home as HomeIcon,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// X icon component
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "ARC Cancer Support has been a lifeline for our family. The volunteers are compassionate, understanding, and always there when we needed someone to talk to. Their support services helped us navigate through the most difficult time of our lives.",
      author: "Sarah M.",
      role: "Family Member"
    },
    {
      quote: "The community here is incredible. Everyone understands what you're going through, and the programs they offer gave me hope and strength during my treatment journey.",
      author: "Michael O.",
      role: "Cancer Survivor"
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
              <Button className="bg-primary hover:bg-primary/90">
                Get Support
              </Button>
              <Button variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-green-50 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-lg">Hero Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section - 4 Icon Cards */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">How Can We Help?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6 pb-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Support Services</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6 pb-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Info className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">About Cancer</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6 pb-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Resources</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6 pb-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <HomeIcon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Visit Us</p>
              </CardContent>
            </Card>
          </div>
          {/* CTA Button below cards */}
          <div className="flex justify-center mt-8">
            <Button size="lg" className="px-8">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Content - 3 Column Image Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">Latest News & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Image {item}</span>
                </div>
                <CardContent className="pt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
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
          <h2 className="text-2xl font-semibold text-center mb-8">Stay Connected</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">Subscribe to Newsletter</Button>
            <Button size="lg" variant="outline">Donate Now</Button>
            <Button size="lg" variant="outline">Become a Volunteer</Button>
          </div>
        </div>
      </section>

      {/* 3-Column Info Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: About Text */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">About ARC</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                ARC Cancer Support was established to provide free, professional support to anyone
                affected by cancer. Our holistic approach addresses the emotional, psychological,
                and practical needs of patients and their families. We offer a wide range of
                services including counselling, support groups, complementary therapies, and
                practical assistance.
              </p>
            </div>

            {/* Column 2: Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Our Services</Link></li>
                <li><Link href="/volunteer" className="text-muted-foreground hover:text-primary">Volunteer</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Events</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
              </ul>
              {/* Social Icons */}
              <div className="flex gap-3 pt-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <XIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Column 3: Newsletter */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Newsletter</h3>
              <p className="text-sm text-muted-foreground">
                Subscribe to our newsletter for updates on events, services, and ways to get involved.
              </p>
              <div className="flex gap-2">
                <Input placeholder="Your email" className="flex-1" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
