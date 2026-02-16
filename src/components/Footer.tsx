
export function Footer() {
  return (
    <footer className="bg-background-950 py-16 border-t border-border-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-display text-foreground mb-6">APEX</h3>
            <p className="text-foreground-500 text-sm">
              Luxury Omakase & Aquarium Experience.<br />
              Defined by depth.
            </p>
          </div>
          
          <div>
            <h4 className="text-foreground font-medium mb-4">Visit</h4>
            <address className="text-foreground-500 text-sm not-italic space-y-2">
              <p>100 Deep Blue Way</p>
              <p>Marina District, CA 90210</p>
              <p>Valet Available</p>
            </address>
          </div>

          <div>
            <h4 className="text-foreground font-medium mb-4">Hours</h4>
            <div className="text-foreground-500 text-sm space-y-2">
              <p>Tue - Sun: 5:00 PM - 11:00 PM</p>
              <p>Mon: Closed for Tank Maintenance</p>
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-medium mb-4">Contact</h4>
            <div className="text-foreground-500 text-sm space-y-2">
              <p>reservations@apex-omakase.com</p>
              <p>(555) 123-4567</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-foreground-600">
          <p>© 2024 Apex Omakase. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground-500 transition-colors">Instagram</a>
            <a href="#" className="hover:text-foreground-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground-500 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
