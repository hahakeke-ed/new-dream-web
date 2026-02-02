'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import SmsButton from '../components/SmsButton';
import { SHOW_MIND_SERVICE } from './lib/siteFlags';
import { posts } from './lib/posts';

export default function Home() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const hasNewPost = posts.some(post => {
    const postDate = new Date(post.date);
    const today = new Date();
    const diffTime = today.getTime() - postDate.getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays >= 0 && diffDays <= 7;
  });

  const menuItems = [
    { id: 'home', name: '홈', href: '/' },
    { id: 'counseling', name: '심리상담', href: '/counseling' },
    { id: 'supervisor', name: '수퍼비전/교육', href: '/supervisor' }, // 수련감독자 권위 강조 메뉴
    { id: 'national-support', name: '바우처 안내', href: '/national-support' },
    { id: 'location', name: '오시는 길', href: '#location' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-slate-200 font-sans">
      {/* 1. Header: 더 정갈하고 고급스러운 디자인 */}
      <header className="fixed top-0 w-full z-50 bg-[#0a0f1a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="flex flex-col">
              <h1 className="text-xl font-['Pacifico'] text-amber-500 tracking-wider">Mind Study</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Master's Private Studio</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-tight">
            {menuItems.map((item) => (
              <Link key={item.id} href={item.href} className="hover:text-amber-500 transition-colors">
                {item.name}
              </Link>
            ))}
            <Link href="/board" className="relative text-amber-500 font-bold">
              소식/칼럼
              {hasNewPost && <span className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>}
            </Link>
          </nav>
        </div>
      </header>

      {/* 2. Hero Section: 기존 배경 유지하되 카피 강화 */}
      <section 
        className="relative h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 15, 26, 0.6), rgba(10, 15, 26, 0.9)), url('https://readdy.ai/api/search-image?query=Professional%20psychology%20counseling%20center%20interior%20with%20comfortable%20seating%20area%2C%20warm%20lighting%20with%20soft%20neutral%20tones%2C%20therapy%20office%20with%20calming%20ambiance%20for%20mental%20health%20services%2C%20modern%20design%20with%20comfortable%20chairs%20and%20plants%2C%20peaceful%20atmosphere%20with%20warm%20natural%20lighting&width=1200&height=600&seq=main-hero-v26&orientation=landscape')`,
          backgroundSize: 'cover', backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl px-6 text-center z-10">
          <h2 className="text-amber-500 text-lg font-medium tracking-[0.3em] mb-4 animate-fade-in">EXPERT'S EXPERT</h2>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            단순한 위로를 넘어 <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">삶의 구조를 성찰하다</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
            한국심리학회 상담심리사 1급 수련감독자 주재.<br/>
            격조 높은 프라이빗 공간에서 당신의 내면을 객관화하십시오.
          </p>
          
          {/* 듀얼 트랙 선택 버튼 (UX 분리) */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/individual" className="px-10 py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-bold transition-all shadow-xl shadow-amber-900/20">
              프리미엄 개인 상담
            </Link>
            <Link href="/national-support" className="px-10 py-4 bg-slate-800/80 hover:bg-slate-700 text-white rounded-full font-bold transition-all backdrop-blur-md border border-white/10">
              정부지원 바우처 안내
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Authority Section: 수련감독자 권위 강조 */}
      <section className="py-24 bg-white text-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-[12px] font-bold text-amber-600 tracking-[0.3em] mb-4 uppercase">The Supervisor</h3>
            <h2 className="text-4xl font-bold mb-6 leading-tight">상담심리사들의 스승,<br/>수련감독자가 직접 상담합니다</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              드림심리상담센터는 가장 엄격한 자격검증 기준을 통과한 한국심리학회 1급 전문가 및 수련감독자가 운영합니다. 
              검증되지 않은 상담이 아닌, 학술적 깊이와 10년 이상의 임상 경력이 담보된 수준 높은 서비스를 경험하십시오.
            </p>
            <ul className="space-y-4 font-medium text-slate-800">
              <li className="flex items-center"><i className="ri-checkbox-circle-fill mr-3 text-amber-600 text-xl"></i> 한국심리학회 상담심리사 1급 수련감독자</li>
              <li className="flex items-center"><i className="ri-checkbox-circle-fill mr-3 text-amber-600 text-xl"></i> 보건복지부 정신건강임상심리사 1급</li>
              <li className="flex items-center"><i className="ri-checkbox-circle-fill mr-3 text-amber-600 text-xl"></i> 10년 이상 무광고, 소개 기반의 높은 신뢰도</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/lounge.jpeg" alt="센터 라운지" className="rounded-2xl shadow-2xl h-64 w-full object-cover mt-8" />
            <img src="/counseling_room.jpeg" alt="상담실" className="rounded-2xl shadow-2xl h-64 w-full object-cover" />
          </div>
        </div>
      </section>

      {/* 4. Service Section: 카드형 디자인으로 가독성 향상 */}
      <section className="py-24 bg-[#0d1421]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Focused Programs</h2>
            <div className="w-12 h-1 bg-amber-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* 프리미엄 상담 카드 */}
            <div className="bg-slate-900/50 p-10 rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all group">
              <i className="ri-user-follow-line text-4xl text-amber-500 mb-6 block"></i>
              <h3 className="text-xl font-bold mb-4 group-hover:text-amber-500 transition-colors">심층 성찰 상담</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">원장 직접 진행. 사회경제적 안정기 속에서 마주하는 실존적 고민과 성찰을 위한 프리미엄 프로그램입니다.</p>
              <Link href="/individual" className="text-xs font-bold uppercase tracking-widest text-amber-500 flex items-center">
                Explore More <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>

            {/* 바우처 카드 */}
            <div className="bg-slate-900/50 p-10 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group">
              <i className="ri-government-line text-4xl text-blue-400 mb-6 block"></i>
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">마음투자 바우처</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">정부 지원 사업 공식 수행. 전문 자격을 갖춘 상담진이 정서적 어려움의 해소를 돕습니다.</p>
              <Link href="/national-support" className="text-xs font-bold uppercase tracking-widest text-blue-400 flex items-center">
                Apply Support <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>

            {/* 수퍼비전 카드 */}
            <div className="bg-slate-900/50 p-10 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-all group">
              <i className="ri-book-read-line text-4xl text-emerald-400 mb-6 block"></i>
              <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">전문가 수퍼비전</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">2급 상담사 및 수련생을 위한 1급 마스터의 교육 수퍼비전 및 사례 분석 세션을 제공합니다.</p>
              <Link href="/supervisor" className="text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center">
                Education <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact & Privacy 강조 */}
      <section id="location" className="py-24 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">Private & Silent</h2>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-12 border border-white/5 inline-block w-full max-w-4xl text-left">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-amber-500">당신만을 위한 고요한 공간</h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  대구 수성구 범어동 핵심지에 위치한 프라이빗 스튜디오입니다. <br/>
                  철저한 예약제와 동선 관리를 통해 타인과 마주치지 않는 완벽한 프라이버시를 보장합니다.
                </p>
                <div className="space-y-4 mb-8 text-sm">
                  <p className="flex items-center"><i className="ri-map-pin-line mr-3"></i> 대구 수성구 동대구로 346, 범어서한포레스트</p>
                  <p className="flex items-center"><i className="ri-parking-box-line mr-3"></i> 오피스텔 내 전용 주차 가능</p>
                </div>
                <SmsButton body="성함/연락처/희망상담 내용을 남겨주시면 원장이 직접 연락드립니다.">
                  프라이빗 상담 문의
                </SmsButton>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl h-80">
                <img src="/entry.jpeg" alt="센터 입구" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-slate-600 text-xs">
        <p>© 2011 드림심리상담센터. All rights reserved.</p>
        <p className="mt-2 tracking-[0.2em]">KOREAN PSYCHOLOGICAL ASSOCIATION CERTIFIED</p>
      </footer>
    </div>
  );
}
