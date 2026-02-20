'use client';

import React, { useState, useEffect } from 'react';

// SmsButton 컴포넌트 임시 구현 (미리보기 에러 방지용)
const SmsButton = ({ className, children, body }) => (
  <button className={className} onClick={() => alert(`[예약 문의 전송 시뮬레이션]\n${body}`)}>
    {children}
  </button>
);

export default function PrivateInsightPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 아이콘 직접 구현 (lucide-react 에러 방지용)
  const IconArrowLeft = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
  );
  const IconZap = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
  );
  const IconTrendingUp = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
  );
  const IconShield = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
  );

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#2C3E50] font-sans selection:bg-[#D4AF37] selection:text-white">
      
      {/* Navigation Bar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="/" className="flex items-center space-x-3 group">
            <IconArrowLeft className={`w-5 h-5 transition-colors duration-500 ${isScrolled ? 'text-[#1A252F]' : 'text-white/70 group-hover:text-white'}`} />
            <span className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-500 ${isScrolled ? 'text-[#1A252F]' : 'text-white/70 group-hover:text-white'}`}>Back to Main</span>
          </a>
          <div className="flex flex-col items-end">
            <h1 className={`text-lg font-serif tracking-[0.2em] uppercase ${isScrolled ? 'text-[#1A252F]' : 'text-white'}`}>Mind Study</h1>
            <p className={`text-[9px] uppercase tracking-[0.3em] mt-1 ${isScrolled ? 'text-[#D4AF37]' : 'text-[#D4AF37]'}`}>Private Insight</p>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Deep Navy overlay with background image */}
        <div className="absolute inset-0 bg-[#1A252F]">
          <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A252F]/90"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 mt-16">
          <h2 className="text-[#D4AF37] text-sm font-medium tracking-[0.4em] mb-8 animate-fade-in uppercase">Premium Counseling for Leaders</h2>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-10 text-white tracking-tight">
            복잡한 삶의 현상, <br /> 
            이면의 심리적 기제를 성찰하다
          </h1>
          
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-10"></div>
          
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto font-light">
            성찰 능력이 뛰어난 리더에게는 장황한 위로보다 정교한 질문이 필요합니다. <br/>
            단 한 번의 대화로 본질에 닿는 예리한 통찰을 경험하십시오.
          </p>
        </div>
      </section>

      {/* Intro & Principles Section with Image */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1 rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80" 
                alt="Private Insight Studio" 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-block px-4 py-1.5 border border-[#D4AF37]/40 rounded-full text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">
                Core Principles
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#1A252F] leading-tight">
                당신의 궤적을 이해하는 <br/>
                <span className="italic text-[#D4AF37]">단 하나의 공간</span>
              </h2>
              <p className="text-[#505e6b] font-light leading-relaxed text-lg">
                최고의 자리에 오르기까지 견뎌온 무게를 이해합니다. 이곳은 외부의 시선에서 완전히 벗어나, 온전히 당신의 내면과 마주할 수 있도록 설계된 심리적 안전지대(Safe Haven)입니다.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Principle 1 */}
            <div className="bg-white p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 border border-gray-100 group">
              <div className="w-14 h-14 bg-[#F9F8F6] rounded-full flex items-center justify-center mb-8 group-hover:bg-[#1A252F] transition-colors duration-500">
                <IconZap className="text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-serif mb-3 text-[#1A252F]">밀도 높은 성찰</h3>
              <p className="text-[10px] text-[#D4AF37] font-bold tracking-[0.2em] mb-6 uppercase">Density over Duration</p>
              <p className="text-[#505e6b] leading-relaxed font-light text-sm md:text-base">
                긴 시간이 필요 없을 수 있습니다. 높은 지적 역량을 가진 당신에게 필요한 것은 
                전문가의 냉철한 따뜻함에서 시작되는, 본질을 관통하는 짧고 강력한 통찰입니다.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="bg-white p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 border border-gray-100 group">
              <div className="w-14 h-14 bg-[#F9F8F6] rounded-full flex items-center justify-center mb-8 group-hover:bg-[#1A252F] transition-colors duration-500">
                <IconTrendingUp className="text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-serif mb-3 text-[#1A252F]">심리적 경영</h3>
              <p className="text-[10px] text-[#D4AF37] font-bold tracking-[0.2em] mb-6 uppercase">Mental Stewardship</p>
              <p className="text-[#505e6b] leading-relaxed font-light text-sm md:text-base">
                심리상담은 일시적인 치유가 아니라 지속적인 자기 경영입니다. 
                정기적인 follow-up 세션을 통해 당신의 심리적 자산을 지키고 관리하는 
                최상의 컨디션을 유지합니다.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="bg-white p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 border border-gray-100 group">
              <div className="w-14 h-14 bg-[#F9F8F6] rounded-full flex items-center justify-center mb-8 group-hover:bg-[#1A252F] transition-colors duration-500">
                <IconShield className="text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-serif mb-3 text-[#1A252F]">완벽한 프라이버시</h3>
              <p className="text-[10px] text-[#D4AF37] font-bold tracking-[0.2em] mb-6 uppercase">Absolute Privacy</p>
              <p className="text-[#505e6b] leading-relaxed font-light text-sm md:text-base">
                이 공간은 당신을 온전히 존중합니다. 철저한 예약제와 정교한 동선 설계를 통해 
                다른 내담자와 마주치지 않는 극도의 편안함과 비밀을 보장합니다.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Process Section - Light Theme Timeline */}
      <section className="py-32 px-6 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="mb-24 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-[#1A252F] mb-4">The Insight Process</h2>
            <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mb-6"></div>
            <p className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">예약 및 진행 절차</p>
          </div>
          
          <div className="relative pl-6 md:pl-12">
            {/* Vertical Line */}
            <div className="absolute left-[47px] md:left-[71px] top-4 bottom-4 w-[1px] bg-gray-200"></div>
            
            <div className="space-y-24">
              {/* Step 01 */}
              <div className="relative pl-24 md:pl-32 group">
                <div className="absolute left-0 top-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-[#D4AF37] transition-all duration-500 z-10 shadow-sm">
                  <span className="font-serif text-2xl md:text-3xl text-gray-300 group-hover:text-[#D4AF37] transition-colors">01</span>
                </div>
                <div className="pt-3 md:pt-5">
                  <h4 className="text-2xl font-serif mb-4 text-[#1A252F]">문의 및 예약</h4>
                  <p className="text-[#505e6b] text-lg leading-relaxed font-light">
                    문의를 남겨주시면 첫 연락부터 철저하게 비밀이 보장된 상태로 안내가 진행됩니다. 기존 내담자의 추천을 우선합니다.
                  </p>
                </div>
              </div>
              
              {/* Step 02 */}
              <div className="relative pl-24 md:pl-32 group">
                <div className="absolute left-0 top-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-[#D4AF37] transition-all duration-500 z-10 shadow-sm">
                  <span className="font-serif text-2xl md:text-3xl text-gray-300 group-hover:text-[#D4AF37] transition-colors">02</span>
                </div>
                <div className="pt-3 md:pt-5">
                  <h4 className="text-2xl font-serif mb-4 text-[#1A252F]">심층 성찰 세션 (Insight Session)</h4>
                  <p className="text-[#505e6b] text-lg leading-relaxed font-light">
                    50분의 밀도 높은 대화를 통해 현재 현상 아래에 숨겨진 심리적 기제를 구조화하고, 리더 스스로 본질적인 답을 도출하도록 조력합니다.
                  </p>
                </div>
              </div>
              
              {/* Step 03 */}
              <div className="relative pl-24 md:pl-32 group">
                <div className="absolute left-0 top-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-[#D4AF37] transition-all duration-500 z-10 shadow-sm">
                  <span className="font-serif text-2xl md:text-3xl text-gray-300 group-hover:text-[#D4AF37] transition-colors">03</span>
                </div>
                <div className="pt-3 md:pt-5">
                  <h4 className="text-2xl font-serif mb-4 text-[#1A252F]">후속 관리 (Follow-up)</h4>
                  <p className="text-[#505e6b] text-lg leading-relaxed font-light">
                    격월 혹은 분기별 세션을 통해 삶의 궤적을 점검하고, 리더로서 지녀야 할 심리적 자산을 지속적이고 안정적으로 관리합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-[#1A252F] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 blur-[100px] rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 blur-[100px] rounded-full -ml-20 -mb-20"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-serif text-white mb-10">성찰의 시작은<br/>조용한 공간에서부터.</h2>
          
          <SmsButton 
            className="px-12 py-5 bg-[#D4AF37] hover:bg-[#b5952f] text-white rounded-none font-medium transition-all duration-300 tracking-[0.2em] uppercase shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
            body="안녕하세요. Private Insight 성찰 세션 문의드립니다. [성함/희망시간]"
          >
            예약 문의하기
          </SmsButton>
          
          <p className="mt-14 text-white/50 text-xs tracking-[0.2em] uppercase font-light">대구 수성구 범어동 | 100% 프라이빗 예약제</p>
          <p className="text-xs text-center text-white/30 mt-4 font-light tracking-wide">
            PC에서는 번호와 내용이 복사됩니다. 휴대폰에서 전송해 주세요.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 text-center bg-[#F9F8F6]">
        <p className="text-gray-400 text-[10px] tracking-[0.2em] uppercase font-bold">
          © 2011 Dream Counseling Center. Certified by KPA.
        </p>
      </footer>
    </div>
  );
}
