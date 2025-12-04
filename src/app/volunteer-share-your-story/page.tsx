"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ChevronLeft, Upload, Cloud } from "lucide-react"
import Link from "next/link"

export default function ShareStoryPage() {
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
          <h1 className="text-2xl font-semibold">Share My Story</h1>
        </div>
      </div>

      {/* Form Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <CardContent className="p-0 space-y-6">
              {/* Section Heading */}
              <div className="text-center mb-8">
                <h2 className="text-xl font-semibold mb-2">Share Your Volunteer Journey</h2>
                <p className="text-muted-foreground">
                  Your story can inspire others to join our community and make a difference.
                  Share your experience as a volunteer with ARC Cancer Support.
                </p>
              </div>

              {/* Story Textarea */}
              <div className="space-y-2">
                <Label>Your Story</Label>
                <Textarea
                  placeholder="Tell us about your volunteer journey with ARC. What inspired you to volunteer? What experiences have been most meaningful? How has volunteering impacted your life?"
                  className="min-h-[250px]"
                />
              </div>

              {/* File Upload Zone */}
              <div className="space-y-2">
                <Label>Upload a Photo (Optional)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Cloud className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Drag and drop your photo here, or click to browse
                      </p>
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        Choose File
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Supported formats: JPG, PNG, GIF (max 5MB)
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full md:w-auto">
                Submit Story
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
