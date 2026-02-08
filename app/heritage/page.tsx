'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeritagePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const milestones = [
    {
      phase: "Phase 1. The Pioneer",
      period: "2011 – 2015",
      title: "개업 상담자의 길을 개척하다",
      items: [
        "2011: 드림심리상담센터 설립",
        "2012: 한국심리학회 상담심리사 1급 자격 취득",
        "사유의 시작: '광고 없는 상담실' 원칙 수립",
        "임상의 깊이: 기업 상담 및 공공기관 심리 지원 프로젝트 수행"
      ]
    },
    {
      phase: "Phase 2. The Master",
      period: "2017 – ",
      title: "전문가들의 스승으로 서다",
      items: [
        "자격의 정점: 한국심리학회 상담심리사 1급 주수련감독자격 획득",
        "전문가 양성: 수퍼비전(Supervision) 개시",
        "Gatekeeper: 심리 상담의 질적 표준 제시 및 예비 전문가 지도"
      ]
    },
    {
      phase: "Phase 3. The Private Studio",
      period: "2018 – Present",
      title: "리더를 위한 성찰의 공간을 완성하다",
      items: [
        "공간의 진화: 대구 수성구 범어동 프라이빗 스튜디오 확장",
        "Private Insight: 사회적 리더 및 VIP를 위한 심층 성찰 세션",
        "15 Years of Trust: 100% 소개 기반의 프리미엄 네트워크 구축"
      ]
    }
  ];

  // 아이콘 컴포넌트들 (설치 없이 작동하도록 직접 구현)
  const IconChevronRight = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>
  );
  const IconMenu = ({ size }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
  );
  const IconX = ({ size }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  );
  const IconShield = ({ size }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
  );
  const IconAward = ({ size }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
  );
  const IconBookOpen = ({ size }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
  );
  const IconMapPin = ({ className, size }: { className?: string, size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
  );
  const IconCalendar = ({ className, size }: { className?: string, size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
  );
  const IconUserCheck = ({ className, size }: { className?: string, size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
  );

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#2C3E50] font-sans selection:bg-[#D4AF37] selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-serif tracking-widest text-[#1A252F]">HERITAGE</div>
          
          <div className="hidden md:flex space-x-12 text-sm font-medium tracking-tighter uppercase">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">About</a>
            <a href="#responsibility" className="hover:text-[#D4AF37] transition-colors">Responsibility</a>
            <a href="#milestones" className="hover:text-[#D4AF37] transition-colors">Milestones</a>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <IconX size={24} /> : <IconMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1A252F]">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A252F]/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <p className="text-[#D4AF37] tracking-[0.3em] uppercase text-sm mb-6 animate-fade-in">15 Years of Silence, 15 Years of Trust</p>
          <h1 className="text-4xl md:text-7xl font-serif text-white mb-8 leading-tight">
            설명할 필요가 없는 가치,<br/>
            경험에서 이어지는 무언의 추천
          </h1>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-8"></div>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed font-light text-lg">
            2011년부터 이어져 온 침묵의 약속. <br/>
            화려한 홍보 대신 내담자의 삶이 변하는 과정만으로 실력을 증명합니다.
          </p>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
          <IconChevronRight className="rotate-90" />
        </div>
      </header>

      {/* Heritage Story */}
      <section id="about" className="py-24 md:py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-1/3">
              <h2 className="text-3xl font-serif text-[#1A252F] sticky top-32">
                🏛️ Heritage:<br/>
                15년의 신뢰
              </h2>
            </div>
            <div className="w-full md:w-2/3 text-lg leading-relaxed font-light text-[#505e6b] space-y-8">
              <p>
                오직 경험에서 경험으로. 2011년, 개업 상담기관이라는 낯선 길을 묵묵히 걸어온 지 어느덧 15년이 되었습니다. 우리는 대중을 향한 광고 대신 사유와 성찰의 깊이에 투자했습니다.
              </p>
              <p>
                화려한 홍보 없이 오직 내담자의 삶이 변하는 과정만으로 실력을 증명해 온 시간입니다. 사회적 리더들이 자신의 소중한 지인에게만 조심스럽게 건네는 이름, 그것이 바로 드림이 지켜온 헤리티지입니다.
              </p>
              <div className="pt-6 border-t border-gray-200">
                <p className="italic text-[#D4AF37] font-serif">
                  "우리는 광고하지 않습니다. 오직 결과로 말합니다."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsibility Section */}
      <section id="responsibility" className="bg-white py-24 px-6 shadow-sm">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80" 
              alt="Professional Studio Interior" 
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div>
            <div className="flex items-center space-x-3 text-[#D4AF37] mb-4">
              <IconShield size={20} />
              <span className="uppercase tracking-widest text-xs font-bold">Responsibility</span>
            </div>
            <h2 className="text-4xl font-serif mb-8 text-[#1A252F]">책임의 Heritage</h2>
            <p className="text-lg leading-relaxed font-light text-[#505e6b] mb-10">
              단순한 상담을 넘어 전문가를 가르치는 <span className="text-[#1A252F] font-medium underline decoration-[#D4AF37] underline-offset-4">1급 수련감독자</span>로서, 상담 전문가 양성을 위한 수퍼비전(Supervision)에 매진합니다. 
            </p>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#F9F8F6] rounded-full text-[#1A252F]">
                  <IconAward size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A252F]">Gatekeeper의 사명</h4>
                  <p className="text-sm text-gray-500">엄격한 질적 관리와 전문가 양성을 통해 상담 생태계의 가치를 지킵니다.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#F9F8F6] rounded-full text-[#1A252F]">
                  <IconBookOpen size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A252F]">성찰의 가치 확산</h4>
                  <p className="text-sm text-gray-500">우리가 지향하는 성찰의 가치가 사회 전반에 깊게 뿌리내리도록 돕습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section id="milestones" className="py-24 md:py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif text-[#1A252F] mb-4 underline decoration-[#D4AF37] decoration-1 underline-offset-8">Major Milestones</h2>
            <p className="text-gray-400 tracking-widest uppercase text-xs">신뢰의 궤적</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group">
                <div className="text-[#D4AF37] text-sm font-bold mb-2 tracking-widest">{m.phase}</div>
                <div className="text-gray-400 text-xs mb-4">{m.period}</div>
                <h3 className="text-xl font-serif text-[#1A252F] mb-6 min-h-[3rem] group-hover:text-[#D4AF37] transition-colors">{m.title}</h3>
                <ul className="space-y-4">
                  {m.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3 text-sm text-gray-500 font-light leading-snug">
                      <div className="mt-1.5 w-1 h-1 bg-[#D4AF37] rounded-full shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Studio Info */}
      <section className="bg-[#1A252F] text-white py-24 px-6 overflow-hidden relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
                리더를 위한<br/>
                프라이빗 스튜디오
              </h2>
              <p className="text-white/60 font-light leading-relaxed mb-8">
                대구 수성구 범어동에 위치한 드림 헤리티지는 철저한 예약제와 동선 관리를 통해 완벽한 프라이버시를 보장합니다. 사회적 리더 및 VIP를 위한 심층 성찰 세션을 위해 설계된 최적의 공간입니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 border border-white/20 rounded-full text-xs tracking-widest uppercase font-medium">100% 소개 기반</span>
                <span className="px-4 py-2 border border-white/20 rounded-full text-xs tracking-widest uppercase font-medium">프라이빗 세션</span>
                <span className="px-4 py-2 border border-white/20 rounded-full text-xs tracking-widest uppercase font-medium">무광고 원칙</span>
              </div>
            </div>
            <div className="w-full md:w-1/3 aspect-square bg-[#D4AF37]/10 rounded-full flex items-center justify-center border border-[#D4AF37]/30">
              <div className="text-center">
                <div className="text-5xl font-serif text-[#D4AF37]">15</div>
                <div className="text-[10px] tracking-[0.4em] uppercase opacity-50">Years of Trust</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 blur-[100px] -mr-48 -mt-48 rounded-full"></div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-[#F9F8F6] pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-3xl font-serif text-[#1A252F] mb-8">성찰의 시작은<br/>조용한 공간에서부터.</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <IconMapPin className="text-[#D4AF37]" size={20} />
                  <span className="text-gray-600 font-light">대구광역시 수성구 범어동 (Private Studio)</span>
                </div>
                <div className="flex items-center space-x-4">
                  <IconCalendar className="text-[#D4AF37]" size={20} />
                  <span className="text-gray-600 font-light">100% 사전 예약제 운영</span>
                </div>
                <div className="flex items-center space-x-4">
                  <IconUserCheck className="text-[#D4AF37]" size={20} />
                  <span className="text-gray-600 font-light">기존 내담자의 추천을 우선합니다.</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="font-serif text-xl mb-6">Reservation Inquiry</h4>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                드림 헤리티지의 성찰 세션은 깊이 있는 임상을 위해 한정된 인원으로만 운영됩니다. <br/>
                상담 문의는 아래 연락처로 성함과 함께 남겨주시면 확인 후 연락드리겠습니다.
              </p>
              <a href="tel:053-759-1282" className="block w-full py-4 bg-[#1A252F] text-white text-center rounded-xl font-medium hover:bg-[#2C3E50] transition-colors tracking-widest">
                CONTACT INQUIRY
              </a>
            </div>
          </div>

          <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 tracking-widest uppercase">
            <p>© 2026 DREAM HERITAGE. ALL RIGHTS RESERVED.</p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <span>Counseling Master</span>
              <span>15 Years Milestone</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
