import { Instagram, Youtube, Mail, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Footer() {
  return (
    <footer className="bg-gradient-hero border-t border-border/20 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="varsity-font text-xl text-primary mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div>
                <div className="font-semibold text-primary">Convener:</div>
                <div className="text-muted-foreground">Ishan Thakkar - 76220 82220</div>
              </div>
              <div>
                <div className="font-semibold text-primary">Dy. Convener:</div>
                <div className="text-muted-foreground">Ved Mungra - 94294 57368</div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="varsity-font text-xl text-primary mb-4">Address</h3>
            <div className="text-muted-foreground">
              <p>Dhirubhai Ambani Institute of Information and Communication Technology</p>
              <p>Near Indroda Circle, Gandhinagar - 382007</p>
              <p>Gujarat, India</p>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="varsity-font text-xl text-primary mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gradient-sports rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-sports rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-sports rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <Mail className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-sports rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <Globe className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-border/20">
          <p className="text-muted-foreground text-sm">
            © 2025 CONCOURS'25. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}