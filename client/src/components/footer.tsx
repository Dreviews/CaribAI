import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="py-12 bg-[var(--dark-card)] border-t border-[var(--dark-border)]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-green)] animate-pulse-slow"></div>
                <div className="relative w-full h-full rounded-lg bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-green)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--dark-bg)]" fill="currentColor" viewBox="0 0 24 24">
                    {/* Robot head */}
                    <rect x="6" y="4" width="12" height="8" rx="2" />
                    {/* Robot eyes */}
                    <circle cx="9" cy="7" r="1" />
                    <circle cx="15" cy="7" r="1" />
                    {/* Robot mouth */}
                    <rect x="10" y="9" width="4" height="1" rx="0.5" />
                    {/* Robot body */}
                    <rect x="8" y="12" width="8" height="6" rx="1" />
                    {/* Robot arms */}
                    <rect x="5" y="13" width="2" height="4" rx="1" />
                    <rect x="17" y="13" width="2" height="4" rx="1" />
                    {/* Robot legs */}
                    <rect x="9" y="18" width="2" height="4" rx="1" />
                    <rect x="13" y="18" width="2" height="4" rx="1" />
                    {/* Robot antenna */}
                    <circle cx="12" cy="2" r="1" />
                    <line x1="12" y1="3" x2="12" y2="4" strokeWidth="1" stroke="currentColor" />
                  </svg>
                </div>
              </div>
              <span className="text-xl font-bold gradient-text">CaribAI</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering Caribbean businesses with AI-driven e-commerce solutions and digital transformation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[var(--neon-blue)] transition-colors">Website Development</a></li>
              <li><a href="#" className="hover:text-[var(--neon-blue)] transition-colors">AI Sales Agents</a></li>
              <li><a href="#" className="hover:text-[var(--neon-blue)] transition-colors">E-commerce Automation</a></li>
              <li><a href="#" className="hover:text-[var(--neon-blue)] transition-colors">Digital Marketing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[var(--neon-blue)] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[var(--neon-blue)] transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-[var(--neon-blue)] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[var(--neon-blue)] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[var(--neon-blue)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--neon-blue)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--neon-blue)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.197.232.225.435.166.671-.061.24-.191.771-.217.878-.034.14-.112.171-.26.103-1.453-.402-2.364-1.662-2.364-2.675 0-2.15 1.564-4.133 4.508-4.133 2.363 0 4.204 1.686 4.204 3.94 0 2.35-1.481 4.242-3.539 4.242-.69 0-1.342-.359-1.564-.789l-.426 1.623c-.154.595-.571 1.34-.851 1.794C9.672 23.812 10.833 24.029 12.017 24.029c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--neon-blue)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-[var(--dark-border)]" />
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; 2024 CaribAI. All rights reserved. Proudly serving the Caribbean business community.</p>
        </div>
      </div>
    </footer>
  );
}
