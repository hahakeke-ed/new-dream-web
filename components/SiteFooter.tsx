import Link from "next/link";
import { navItems, site } from "../app/data/site";
import SmsButton from "./SmsButton";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-[#102435] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:px-6">
        <div>
          <img src="/new_logo (2).png" alt="드림심리상담센터" className="h-12 w-auto bg-white object-contain" />
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            예약제로 운영되는 전문심리상담기관입니다. 조용하고 독립된 상담 공간에서 내담자의
            사생활과 상담의 안전성을 중요하게 다룹니다.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-white">바로가기</h2>
          <nav className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-bold text-white">예약 문의</h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
            <p>전화: {site.phone}</p>
            <p>{site.address}</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={site.kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-[#f7d34b] px-4 text-sm font-bold text-[#241f11] transition hover:bg-[#ffd957]"
            >
              카카오 문의
            </a>
            <SmsButton className="h-10 px-4 py-0 text-sm">문자 예약</SmsButton>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400">
        © 2011 {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
