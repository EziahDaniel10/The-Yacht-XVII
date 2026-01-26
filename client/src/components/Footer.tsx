import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#0A192F] text-white pt-16 md:pt-20 pb-10">
      <div className="container-wide grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-24 mb-16">
        <div className="col-span-1 sm:col-span-2 md:col-span-1">
          <Link href="/">
            <span className="text-3xl font-serif font-bold tracking-widest text-primary block mb-6">
              XVII
            </span>
          </Link>
          <p className="text-white/60 font-light leading-relaxed max-w-sm">
            Experience the pinnacle of maritime luxury. Yacht XVII offers bespoke charters tailored to your desires.
          </p>
        </div>

        <div className="sm:col-span-1">
          <h4 className="font-serif text-lg mb-6 text-primary">Navigation</h4>
          <ul className="space-y-4">
            <li><Link href="/about" className="text-white/60 hover:text-white transition-colors">Our Story</Link></li>
            <li><Link href="/yacht" className="text-white/60 hover:text-white transition-colors">The Vessel</Link></li>
            <li><Link href="/charters" className="text-white/60 hover:text-white transition-colors">Experiences</Link></li>
            <li><Link href="/faq" className="text-white/60 hover:text-white transition-colors">FAQ</Link></li>
            <li><Link href="/booking" className="text-white/60 hover:text-white transition-colors">Book Now</Link></li>
          </ul>
        </div>

        <div className="sm:col-span-1">
          <h4 className="font-serif text-lg mb-6 text-primary">Contact</h4>
          <ul className="space-y-4 text-white/60">
            <li><a href="mailto:concierge@yachtxvii.com" className="hover:text-white transition-colors text-sm break-all">concierge@yachtxvii.com</a></li>
            <li><a href="tel:+12024518809" className="hover:text-white transition-colors">202-451-8809</a></li>
            <li>The Wharf Washington DC</li>
          </ul>
        </div>

        <div className="col-span-1 sm:col-span-2 md:col-span-1">
          <h4 className="font-serif text-lg mb-6 text-primary">Newsletter</h4>
          <p className="text-white/60 mb-4 font-light text-sm">Subscribe for exclusive offers and seasonal updates.</p>
          <div className="flex border-b border-white/20 pb-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border-none text-white placeholder:text-white/30 focus:outline-none w-full text-sm"
            />
            <button className="text-primary hover:text-white uppercase text-xs tracking-widest font-bold">Join</button>
          </div>
        </div>
      </div>

      <div className="container-wide border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/40 uppercase tracking-wider text-center gap-4">
        <p>&copy; {new Date().getFullYear()} Yacht XVII. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
