"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site } from "../app/data/site";
import SmsButton from "./SmsButton";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/new_logo (2).png" alt="드림심리상담센터" className="h-11 w-auto object-contain" />
          <div className="hidden min-w-0 flex-col sm:flex">
            <span className="text-base font-bold tracking-normal text-[#14314a]">{site.name}</span>
            <span className="text-xs font-medium text-[#6b7c83]">{site.tagline}</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href === "/board" && pathname.startsWith("/board"));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition ${
                  active ? "text-[#1f6f8b]" : "text-slate-700 hover:text-[#1f6f8b]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`tel:${site.phone}`}
            className="inline-flex h-10 items-center justify-center rounded-lg border border-[#cddde2] px-4 text-sm font-bold text-[#14314a] transition hover:border-[#1f6f8b] hover:text-[#1f6f8b]"
          >
            전화 예약
          </a>
          <SmsButton className="h-10 px-4 py-0 text-sm">문자 예약</SmsButton>
        </div>

        <button
          type="button"
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-[#14314a] md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <nav className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-bold text-slate-700 hover:bg-[#edf6f4] hover:text-[#1f6f8b]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <a
              href={`tel:${site.phone}`}
              className="inline-flex h-11 items-center justify-center rounded-lg border border-[#cddde2] text-sm font-bold text-[#14314a]"
            >
              전화 예약
            </a>
            <SmsButton className="h-11 px-3 py-0 text-sm">문자 예약</SmsButton>
          </div>
        </div>
      )}
    </header>
  );
}
