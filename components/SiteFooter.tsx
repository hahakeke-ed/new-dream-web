import Link from "next/link";
import { site } from "../app/data/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-gray-900 px-4 py-12 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <div className="mb-6 flex items-center justify-center gap-4">
          <img src="/new_logo (2).png" alt="드림심리상담센터 로고" className="h-10 w-auto object-contain" />
          <div className="flex flex-col text-left">
            <h3 className="text-2xl font-bold leading-tight text-amber-400">{site.name}</h3>
            <p className="text-sm font-medium text-slate-400">{site.tagline}</p>
          </div>
        </div>
        <p className="mb-8 text-slate-400">전문적이고 따뜻한 심리상담으로 당신의 마음을 돌봅니다.</p>
        <div className="mb-8 flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/#services" className="text-slate-400 hover:text-amber-400">
            상담 서비스
          </Link>
          <Link href="/#voucher" className="text-slate-400 hover:text-amber-400">
            정신건강심리상담바우처
          </Link>
          <Link href="/board" className="text-slate-400 hover:text-amber-400">
            소식 및 칼럼
          </Link>
          <Link href="/#contact" className="text-slate-400 hover:text-amber-400">
            오시는 길
          </Link>
        </div>
        <div className="border-t border-slate-800 pt-8">
          <p className="text-slate-500">&copy; 2011 {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
