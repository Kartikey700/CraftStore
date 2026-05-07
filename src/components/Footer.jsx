// CONFIGURATION: Update this Discord link with your actual Discord server invite
const DISCORD_LINK = "https://discord.gg/your-server-here"

const footerLinks = {
  store: [
    { label: "All Products", href: "#products" },
    { label: "Ranks", href: "#categories" },
    { label: "Crate Keys", href: "#categories" },
    { label: "Equipment", href: "#categories" },
  ],
  support: [
    { label: "FAQ", href: "#faq" },
    { label: "Contact Us", href: "#" },
    { label: "Discord", href: DISCORD_LINK },
    { label: "Support Ticket", href: "#" },
  ],
  legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#home" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="6" x2="10" y1="12" y2="12"/>
                  <line x1="8" x2="8" y1="10" y2="14"/>
                  <line x1="15" x2="15.01" y1="13" y2="13"/>
                  <line x1="18" x2="18.01" y1="11" y2="11"/>
                  <rect width="20" height="12" x="2" y="6" rx="2"/>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Craft<span className="text-primary">Store</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Premium Minecraft server items with instant delivery. Trusted by thousands of players worldwide.
            </p>
          </div>

          {/* Store Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Store
            </h3>
            <ul className="space-y-3">
              {footerLinks.store.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} CraftStore. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Not affiliated with Mojang Studios or Microsoft.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
