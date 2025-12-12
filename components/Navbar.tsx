"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle
} from "@/components/ui/resizable-navbar";

const links = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/approach", label: "Approach" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <ResizableNavbar>
      <NavBody>
        <div className="flex w-full items-center justify-between">
          <Link
            href="/"
            className="relative z-20 flex items-center gap-3 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.22em] text-foreground"
          >
            <Image
              src="/logo.png"
              alt="Pixxelorbit logo"
              width={40}
              height={40}
              className="h-5 w-5 shrink-0 object-contain"
              priority
            />
            <span>PIXXELORBIT</span>
          </Link>

          <NavItems
            items={links.map((item) => ({ name: item.label, link: item.href }))}
            className="text-sm"
          />

          <div className="hidden items-center gap-3 md:flex">
            <div className="hidden text-xs text-muted-foreground sm:block">
              <span className="font-medium text-foreground">Available from January</span>
            </div>
            <Link href="/contact" className="hidden sm:inline-flex">
              <Button className="bg-accent/80 text-accent-foreground shadow-none hover:bg-accent/90">
                Book intro call
              </Button>
            </Link>
          </div>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <Link
            href="/"
            className="flex items-center gap-3 py-1 text-[0.7rem] font-semibold tracking-[0.22em] text-foreground"
          >
            <Image
              src="/logo.png"
              alt="Pixxelorbit logo"
              width={36}
              height={36}
              className="h-7 w-7 shrink-0 object-contain"
            />
            <span>PIXXELORBIT</span>
          </Link>
          <button
            type="button"
            className="rounded-full p-1.5 text-foreground"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          >
            <MobileNavToggle
              isOpen={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
            />
          </button>
        </MobileNavHeader>

        <MobileNavMenu isOpen={mobileOpen} onClose={closeMobile}>
          <nav className="flex w-full flex-col gap-3 text-sm text-foreground">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-full rounded-full px-3 py-2 text-left text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={closeMobile}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2">
              <Link href="/#contact" onClick={closeMobile}>
                <Button className="w-full justify-center">
                  Book intro call
                </Button>
              </Link>
            </div>
          </nav>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
}
