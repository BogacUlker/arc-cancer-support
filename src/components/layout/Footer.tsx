import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail } from "lucide-react"

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
          {/* Column 1: Logo & Contact */}
          <div className="space-y-4">
            <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">ARC</span>
            </div>
            <p className="text-sm text-muted-foreground">
              ARC Cancer Support provides free support services to anyone affected by cancer,
              as well as their families, friends, and carers throughout Ireland.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+353 1 234 5678</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@arccancersupport.ie</span>
              </div>
            </div>
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

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/volunteer" className="hover:text-primary transition-colors">Volunteer</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Donate</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
            <div className="flex gap-3 pt-4">
              <Facebook className="h-5 w-5 text-muted-foreground" />
              <Instagram className="h-5 w-5 text-muted-foreground" />
              <Linkedin className="h-5 w-5 text-muted-foreground" />
              <XIcon className="h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          {/* Column 4: Location Map */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Find Us</h3>
            <p className="text-sm text-muted-foreground">
              ARC Cancer Support Centre<br />
              65 Eccles Street<br />
              Dublin 7, D07 KW9H<br />
              Ireland
            </p>
            {/* Map Placeholder */}
            <div className="w-full h-40 bg-gray-100 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-100">
                {/* Simplified map visualization */}
                <div className="absolute inset-4">
                  <div className="w-full h-full border border-gray-300 rounded">
                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-l-2 border-t-2 border-yellow-400 transform rotate-12"></div>
                    <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-green-100/50 rounded"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
