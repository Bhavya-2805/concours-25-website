import { Instagram, Youtube, Mail, Globe } from "lucide-react";

const metalSilverStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, #5e6062 0%, #a0a2a4 25%, #d4d6d8 48%, #f0f2f4 55%, #c0c2c4 68%, #7a7c7e 85%, #4c4e50 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.7))',
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0e0204] to-[#060102] border-t border-[#8c8e90]/30 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className=" text-xl mb-4 tracking-wide" style={metalSilverStyle}>Contact Information</h3>
            <div className="space-y-3">
              <div>
                <div className="font-semibold text-[#8c8e90]">Convener:</div>
                <div className="text-gray-300">Neeti Gunsai - 63557 70669</div>
              </div>
              <div>
                <div className="font-semibold text-[#8c8e90]">Dy. Convener:</div>
                <div className="text-gray-300">Kush Patel - 87801 32145</div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl mb-4 tracking-wide" style={metalSilverStyle}>Address</h3>
            <div className="text-gray-300 space-y-1">
              <p>Dhirubhai Ambani Institute of Information and Communication Technology</p>
              <p>Near Indroda Circle, Gandhinagar - 382007</p>
              <p>Gujarat, India</p>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl mb-4 tracking-wide" style={metalSilverStyle}>Follow Us</h3>
            <div className="flex space-x-4">
              {/* Instagram — Crimson */}
              <a
                href="https://www.instagram.com/sportsatdaiict?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 border border-[#918d8c]/35 rounded-full flex items-center justify-center hover:scale-110 hover:border-white hover:shadow-[0_0_16px_rgba(132,12,21,0.7)] transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #840c15, #6d0c13)' }}
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              {/* YouTube — Metallic Silver */}
              <a
                href="http://www.youtube.com/@sportsda-iict1510"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 border border-[#a0a2a4]/45 rounded-full flex items-center justify-center hover:scale-110 hover:border-white hover:shadow-[0_0_16px_rgba(140,142,144,0.65)] transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #5e6062, #9a9c9e, #c4c6c8)' }}
              >
                <Youtube className="w-5 h-5 text-[#0a0203]" />
              </a>
              {/* Email — Crimson */}
              <a
                href="mailto:concoursdaiict@gmail.com"
                aria-label="Email"
                className="w-10 h-10 border border-[#918d8c]/35 rounded-full flex items-center justify-center hover:scale-110 hover:border-white hover:shadow-[0_0_16px_rgba(132,12,21,0.7)] transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #840c15, #6d0c13)' }}
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
              {/* Back to top — Metallic Silver */}
              <a
                href="#"
                aria-label="Back to top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-10 h-10 border border-[#a0a2a4]/45 rounded-full flex items-center justify-center hover:scale-110 hover:border-white hover:shadow-[0_0_16px_rgba(140,142,144,0.65)] transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #5e6062, #9a9c9e, #c4c6c8)' }}
              >
                <Globe className="w-5 h-5 text-[#0a0203]" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-[#8c8e90]/25">
          <p className="text-[#8c8e90]/85 text-sm">
            © CONCOURS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}