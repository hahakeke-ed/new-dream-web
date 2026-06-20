"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "../app/data/site";

export default function SiteHeader() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleMenuClick = (menuId: string, href: string) => {
    if (menuId === "home") {
      window.location.href = "/";
      return;
    }

    if (activeTooltip === menuId) {
      setActiveTooltip(null);
      return;
    }

    setActiveTooltip(menuId);

    if (href.startsWith("/#")) {
      const target = document.querySelector(href.replace("/", ""));
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4" onClick={() => setOpen(false)}>
            <img src="/new_logo (2).png" alt="드림심리상담센터 로고" className="h-12 w-auto object-contain" />
            <div className="hidden flex-col sm:flex">
              <h1 className="text-2xl font-bold leading-tight text-amber-400">드림심리상담센터</h1>
              <p className="text-sm font-medium text-slate-400">전문심리상담기관</p>
            </div>
          </Link>

          <nav className="relative hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                <button
                  type="button"
                  onClick={() => handleMenuClick(item.id, item.href)}
                  className={`cursor-pointer whitespace-nowrap transition-colors hover:text-amber-400 ${
                    item.id === "home" ? "font-medium text-slate-100" : "text-slate-300"
                  }`}
                >
                  {item.label}
                </button>
              </div>
            ))}

            <div className="relative">
              <Link
                href="/board"
                className="flex cursor-pointer items-center whitespace-nowrap font-medium text-slate-300 transition-colors hover:text-amber-400"
              >
                소식 및 칼럼
              </Link>
            </div>

            {activeTooltip && (
              <div className="absolute left-0 right-0 top-full z-50 mt-3">
                <div className="w-full rounded-2xl border border-slate-500/50 bg-slate-600/80 p-6 text-white shadow-2xl backdrop-blur-sm">
                  <p className="text-sm leading-relaxed">
                    {navItems.find((item) => item.id === activeTooltip)?.description}
                  </p>
                </div>
              </div>
            )}
          </nav>

          <button
            type="button"
            aria-label="메뉴 열기"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-600 text-slate-100 md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        {open && (
          <div className="mt-4 border-t border-slate-700 pt-4 md:hidden">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    handleMenuClick(item.id, item.href);
                  }}
                  className="rounded-lg px-3 py-3 text-left text-sm font-bold text-slate-300 hover:bg-slate-800 hover:text-amber-400"
                >
                  {item.label}
                </button>
              ))}
              <Link
                href="/board"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-bold text-slate-300 hover:bg-slate-800 hover:text-amber-400"
              >
                소식 및 칼럼
              </Link>
            </nav>
          </div>
        )}
      </div>

      {activeTooltip && <div className="fixed inset-0 z-40" onClick={() => setActiveTooltip(null)} />}
    </header>
  );
}
