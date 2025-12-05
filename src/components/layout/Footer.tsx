import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin, Clock } from "lucide-react"

// X (Twitter) icon component
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo & About */}
          <div className="space-y-4">
            <Image
              src="/ARC.png"
              alt="ARC Cancer Support Centres"
              width={140}
              height={70}
              className="h-16 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              ARC Cancer Support provides free support services to anyone affected by cancer,
              as well as their families, friends, and carers.
            </p>
            <div className="flex gap-3 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <XIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Our Location */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Location</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">ARC Cancer Support Centre</p>
                  <p>65 Eccles Street</p>
                  <p>Dublin 7, D07 KW9H</p>
                  <p>Ireland</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p>Monday - Friday</p>
                  <p>9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Get In Touch */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get In Touch</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+353 1 234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@arccancersupport.ie</span>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground pt-2">
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 4: Ways To Help */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Ways To Help</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/donate" className="hover:text-primary transition-colors">Donate</Link></li>
              <li><Link href="/volunteer" className="hover:text-primary transition-colors">Become a Volunteer</Link></li>
              <li><Link href="/volunteer-dashboard" className="hover:text-primary transition-colors">Volunteer Dashboard</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Fundraise for Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Corporate Partnerships</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Leave a Legacy</Link></li>
            </ul>
          </div>
        </div>

        {/* Charity Registration */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>Registered Charity Number: 20028428 | CHY Number: 10857 | Company Number: 505230</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} ARC Cancer Support. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
