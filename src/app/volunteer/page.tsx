"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Heart,
  Users,
  Clock,
  Award,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  HandHeart,
  Home
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function VolunteerPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "Volunteering with ARC has been one of the most rewarding experiences of my life. Being able to support families going through cancer treatment and seeing the difference we make in their lives is incredibly fulfilling. The team here is like family.",
      author: "Mary K.",
      role: "Volunteer since 2019"
    },
    {
      quote: "I joined ARC as a volunteer after my own cancer journey. Now I help others who are facing similar challenges. It's therapeutic for me and I know I'm making a real difference in people's lives.",
      author: "John D.",
      role: "Volunteer since 2021"
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
      {/* Hero Banner - Full Width Image */}
      <section className="relative">
        <div className="aspect-[21/9] bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden">
          <Image
            src="/welcome-header.jpg"
            alt="ARC volunteer helping a visitor with information"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/40"></div>
          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <Button variant="secondary" className="rounded-full" asChild>
                <Link href="/volunteer/sign-up">Join Our Team</Link>
              </Button>
            </div>
          </div>
          {/* Angled overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-white transform -skew-y-2 origin-right translate-y-12"></div>
        </div>
      </section>

      {/* Value Props - 4 Icons */}
      <section className="py-16 mt-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">Why Volunteer With Us?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium">Make a Difference</h3>
              <p className="text-sm text-muted-foreground">Impact lives directly</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium">Join a Community</h3>
              <p className="text-sm text-muted-foreground">Meet like-minded people</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium">Flexible Hours</h3>
              <p className="text-sm text-muted-foreground">Work around your schedule</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium">Gain Experience</h3>
              <p className="text-sm text-muted-foreground">Develop new skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section with Avatar */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <CardContent className="space-y-6">
                <p className="text-muted-foreground italic leading-relaxed">
                  &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 flex-shrink-0">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonials[currentTestimonial].author.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonials[currentTestimonial].author}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="flex-shrink-0" asChild>
                    <Link href="/volunteer/sign-up">Become a Volunteer</Link>
                  </Button>
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

      {/* Info Grid - 2x3 Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">Volunteer Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Row 1 */}
            <Card className="p-6">
              <CardContent className="flex gap-4 p-0">
                <div className="flex-1 space-y-2">
                  <h3 className="font-medium">Reception & Administration</h3>
                  <p className="text-sm text-muted-foreground">Help welcome visitors and assist with day-to-day operations.</p>
                </div>
                <Button variant="outline" size="sm">Learn More</Button>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="flex gap-4 p-0">
                <div className="flex-1 space-y-2">
                  <h3 className="font-medium">Peer Support</h3>
                  <p className="text-sm text-muted-foreground">Share your experience to support others on their journey.</p>
                </div>
                <Button variant="outline" size="sm">Learn More</Button>
              </CardContent>
            </Card>
            {/* Row 2 */}
            <Card className="p-6">
              <CardContent className="flex gap-4 p-0">
                <div className="flex-1 space-y-2">
                  <h3 className="font-medium">Event Support</h3>
                  <p className="text-sm text-muted-foreground">Help organize and run fundraising events and activities.</p>
                </div>
                <Button variant="outline" size="sm">Learn More</Button>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="flex gap-4 p-0">
                <div className="flex-1 space-y-2">
                  <h3 className="font-medium">Driving Service</h3>
                  <p className="text-sm text-muted-foreground">Transport patients to and from treatment appointments.</p>
                </div>
                <Button variant="outline" size="sm">Learn More</Button>
              </CardContent>
            </Card>
            {/* Row 3 */}
            <Card className="p-6">
              <CardContent className="flex gap-4 p-0">
                <div className="flex-1 space-y-2">
                  <h3 className="font-medium">Fundraising</h3>
                  <p className="text-sm text-muted-foreground">Help raise vital funds to support our services.</p>
                </div>
                <Button variant="outline" size="sm">Learn More</Button>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="flex gap-4 p-0">
                <div className="flex-1 space-y-2">
                  <h3 className="font-medium">Community Outreach</h3>
                  <p className="text-sm text-muted-foreground">Spread awareness about ARC in your local community.</p>
                </div>
                <Button variant="outline" size="sm">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Steps - 1-4 */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">How to Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-medium mb-2">Apply Online</h3>
                <p className="text-sm text-muted-foreground">
                  Fill out our volunteer application form with your details and preferences.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-medium mb-2">Meet Our Team</h3>
                <p className="text-sm text-muted-foreground">
                  Have an informal chat with our volunteer coordinator about opportunities.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-medium mb-2">Training</h3>
                <p className="text-sm text-muted-foreground">
                  Complete our comprehensive training program to prepare for your role.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-medium mb-2">Start Volunteering</h3>
                <p className="text-sm text-muted-foreground">
                  Begin making a difference in the lives of those affected by cancer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats - 3 Icon Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-8">
              <CardContent className="space-y-4 p-0">
                <TrendingUp className="h-12 w-12 mx-auto text-primary" />
                <h3 className="font-medium">500+ Volunteers</h3>
                <p className="text-sm text-muted-foreground">
                  Active volunteers supporting our mission across Ireland, giving their time and expertise.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8">
              <CardContent className="space-y-4 p-0">
                <HandHeart className="h-12 w-12 mx-auto text-primary" />
                <h3 className="font-medium">10,000+ Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Hours of volunteer service provided each year to those affected by cancer.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8">
              <CardContent className="space-y-4 p-0">
                <Home className="h-12 w-12 mx-auto text-primary" />
                <h3 className="font-medium">5 Locations</h3>
                <p className="text-sm text-muted-foreground">
                  Support centres across Ireland providing accessible services to communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Make a Difference?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join our team of dedicated volunteers and help support those affected by cancer.
            No experience necessary – just a caring heart and a willingness to help.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/volunteer/sign-up">Apply Now</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-white/90" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
