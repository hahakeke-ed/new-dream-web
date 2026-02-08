'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import SmsButton from '../components/SmsButton';
import { SHOW_MIND_SERVICE } from './lib/siteFlags';
import { posts } from './lib/posts'; // NEW 배지 로직용 (기존 파일 활용)

export default function Home() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // 새 게시물 확인 로직 (오늘부터 7일 이내)
  const hasNewPost = posts.some(post => {
    const postDate = new Date(post.date);
    const today = new Date();
    const diffTime = today.getTime() - postDate.getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays >= 0 && diffDays <= 7;
  });

  // 1. 메뉴 구성 변경 (요청하신 3가지 핵심 메뉴)
  const menuItems = [
    {
      id: 'premium-analysis',
      name: '프리미엄 개인 심리 분석',
      href: '/premium-analysis',
      description: '심층적인 개인 심리 분석을 통해 나를 더 깊이 이해하는 프리미엄 서비스입니다.'
    },
    {
      id: 'expert-education',
      name: '전문가 교육',
      href: '/expert-education',
      description: '상담 심리 전문가를 위한 체계적인 교육 및 수퍼비전 프로그램입니다.'
    }
  ];

  const handleMenuClick = (menuId: string, href: string) => {
    if (activeTooltip === menuId) {
      setActiveTooltip(null);
    } else {
      setActiveTooltip(menuId);
    }
  };

  return (
    // 폰트 변수 적용 (layout.tsx 설정 필요)
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 font-[family-name:var(--font-noto-sans)]">
      
      {/* Header */}
      <header className="bg-slate-900 shadow-lg border-b border-slate-700 relative">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            
            {/* 2. 로고 영역 (클릭 시 홈으로 이동) */}
            <Link href="/" className="flex items-center">
              {/* public 폴더에 new_logo.png 파일이 있어야 보입니다 */}
              <img 
                src="/new_logo.png" 
                alt="드림심리상담센터" 
                className="h-12 w-auto object-contain" 
              />
            </Link>
            
            {/* 3. 네비게이션 영역 */}
            <nav className="hidden md:flex items-center space-x-10 relative" ref={navRef}>
              {menuItems.map((item) => (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => handleMenuClick(item.id, item.href)}
                    className="text-slate-200 hover:text-amber-400 transition-colors cursor-pointer whitespace-nowrap text-lg font-medium tracking-wide"
                  >
                    {item.name}
                  </button>
                </div>
              ))}

              {/* 센터소식 및 칼럼 버튼 (NEW 배지 포함) */}
              <div className="relative">
                <Link 
                  href="/board" 
                  className="text-slate-200 hover:text-amber-400 transition-colors cursor-pointer whitespace-nowrap text-lg font-medium tracking-wide flex items-center"
                >
                  센터소식 및 칼럼
                  {hasNewPost && (
                    <span className="absolute -top-3 -right-2 flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex items-center justify-center rounded-full h-4 w-4 bg-red-500 text-[8px] text-white font-bold">
                        N
                      </span>
                    </span>
                  )}
                </Link>
              </div>

              {/* 툴팁 (설명창) */}
              {activeTooltip && (
                <div className="absolute top-full left-0 right-0 mt-4 z-50">
                  <div className="bg-slate-800 text-white p-6 rounded-xl shadow-2xl border border-slate-600 w-80">
                    <p className="text-sm leading-relaxed text-slate-300">
                      {menuItems.find(item => item.id === activeTooltip)?.description}
                    </p>
                  </div>
                </div>
              )}
            </nav>
          </div>
        </div>

        {/* 툴팁 닫기용 배경 */}
        {activeTooltip && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setActiveTooltip(null)}
          ></div>
        )}
      </header>

      {/* Hero Section (메인 배너) */}
      <section 
        className="relative py-32 px-4 text-white min-h-[60vh] flex items-center"
        style={{
          // 배경 이미지를 좀 더 고급스러운 어두운 톤으로 변경
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('https://readdy.ai/api/search-image?query=luxury%20psychology%20counseling%20center%20interior%20dark%20modern&width=1200&height=600&seq=main-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
            마음을 디자인하는<br/>프리미엄 공간
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-300 font-light">
            깊이 있는 분석과 전문적인 교육으로<br />
            당신의 성장을 함께합니다
          </p>
        </div>
      </section>

      {/* 기존 하단 섹션들 유지 (Professional Features 등) */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">검증된 전문가와 함께 합니다</h2>
            <p className="text-lg text-slate-400">한국심리학회 전문가 자격을 보유한 상담사가 전문적인 서비스를 제공합니다</p>
          </div>
          
          {/* ... (기존의 아이콘 및 설명 섹션들은 그대로 둡니다. 필요시 삭제하거나 수정 가능합니다) ... */}
           <div className="grid md:grid-cols-3 gap-8 mb-16">
             <div className="bg-slate-700/50 p-8 rounded-2xl border border-slate-600">
               <h3 className="text-xl font-bold text-slate-100 mb-2">심리상담 전문가</h3>
               <p className="text-slate-400">최상위 자격 보유</p>
             </div>
             <div className="bg-slate-700/50 p-8 rounded-2xl border border-slate-600">
               <h3 className="text-xl font-bold text-slate-100 mb-2">비밀 보장</h3>
               <p className="text-slate-400">철저한 개인정보 보호</p>
             </div>
             <div className="bg-slate-700/50 p-8 rounded-2xl border border-slate-600">
               <h3 className="text-xl font-bold text-slate-100 mb-2">맞춤형 프로그램</h3>
               <p className="text-slate-400">개인별 최적화된 솔루션</p>
             </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto text-center">
            <p className="text-slate-500 text-sm">&copy; 2026 Dream Counseling Center. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
