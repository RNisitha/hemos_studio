import { brand, navLinks, socialLinks } from "../data/content";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="display text-2xl tracking-[0.14em]">{brand.name}</p>
          <p className="mt-4 max-w-sm text-sm text-muted">{brand.tagline}</p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-muted">Navigate</p>
          <ul className="mt-4 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-muted">Social</p>
          <ul className="mt-4 space-y-3 text-sm">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer" className="hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/8 px-5 py-6 text-xs text-muted sm:flex-row sm:justify-between lg:px-8">
        <p>&copy; {new Date().getFullYear()} HEMOS Studio. All rights reserved.</p>
        <p>{brand.tagline}</p>
      </div>
    </footer>
  );
}
