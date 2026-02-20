'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SmsButton from '../../components/SmsButton'; // 진짜 문자 전송 컴포넌트로 연결!

export default function ProfessionalTrackPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SVG 아이콘 직접 구현
  const IconArrowLeft = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
  );
  const IconBookOpen = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
  );
  const IconEye = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
  );
  const IconQuote = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
  );

  return (
    <div className="min-h-screen bg-[#0F1115] text-[#E5E5E5] font-sans selection:bg-[#C5A880] selection:text-[#0F1115]">
      
      {/* Navigation Bar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0F1115]/95 backdrop-blur-md py-4 shadow-md border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <IconArrowLeft className="w-5 h-5 text-gray-500 group-hover:text-[#C5A880] transition-colors duration-500" />
            <span className="text-xs font-light text-gray-400 group-hover:text-[#C5A880] transition-colors duration-500 uppercase tracking-[0.2em]">Back to Main</span>
          </Link>
          <div className="flex flex-col items-end">
            <h1 className="text-lg font-serif tracking-[0.2em] uppercase text-gray-200">Professional Track</h1>
            <p className="text-[9px] uppercase tracking-[0.3em] mt-1 text-[#C5A880]">Master Class</p>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Deep Charcoal overlay with scholarly background image */}
        <div className="absolute inset-0 bg-[#0F1115]">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-luminosity"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-[#0F1115]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 mt-20">
          <div className="inline-block mb-8">
            <IconBookOpen className="w-8 h-8 mx-auto text-[#C5A880] opacity-80" />
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.2] mb-8 text-white tracking-tight">
            Professional Track
          </h1>
          
          <p className="text-xl md:text-2xl text-[#C5A880] font-serif italic tracking-wide mb-12">
            "상담사의 성장을 완성하는 마스터 클래스"
          </p>
          
          <div className="w-12 h-[1px] bg-gray-600 mx-auto mb-12"></div>
          
          <p className="text-lg text-gray-400 leading-[2.2] font-light max-w-3xl mx-auto text-justify md:text-center">
            드림심리상담센터의 Professional Track은 일반 상담과는 궤를 달리합니다. <br className="hidden md:block"/>
            15년간 축적된 방대한 임상 사례와 국가 청소년상담사 자격 연수 강사의 전문성을 바탕으로, <br className="hidden md:block"/>
            현장의 상담사들이 마주하는 한계를 돌파하고 심리 전문가로서의 본질적인 성장을 돕습니다.
          </p>
        </div>
      </section>

      {/* Section 1: Clinical Supervision */}
      <section className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1 space-y-10">
              <div className="flex items-center space-x-4">
                <span className="text-5xl font-serif text-white/10 font-bold">01</span>
                <h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight">
                  개인상담 수퍼비전
                  <span className="block text-sm font-sans tracking-[0.3em] text-[#C5A880] mt-3 uppercase">Clinical Supervision</span>
                </h2>
              </div>
              
              <div className="relative">
                <IconQuote className="absolute -top-6 -left-4 text-white/5 w-16 h-16" />
                <p className="relative z-10 text-2xl font-serif text-gray-200 leading-[1.6] italic pl-6 border-l-2 border-[#C5A880]">
                  "사례의 이면을 꿰뚫는 15년의 통찰, <br/>
                  상담사의 '눈'을 넓히다"
                </p>
              </div>

              <p className="text-gray-400 leading-[2.2] font-light text-lg">
                단순한 개입 전략의 조언을 넘어, 사례의 핵심을 관통하는 정교한 사례 개념화를 지원합니다. 2011년부터 이어진 수많은 임상 사례 데이터와 국가 청소년상담사 연수 강사로서의 노하우를 공유하여, 상담사가 내담자와 함께 길을 잃지 않도록 명확한 이정표를 제시합니다.
              </p>
            </div>
            
            {/* Image Content */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-[#C5A880] translate-x-4 translate-y-4 rounded-[2rem] opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" 
                alt="Clinical Supervision" 
                className="relative z-10 w-full h-[550px] object-cover rounded-[2rem] grayscale-[30%] contrast-125"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Personal Analysis */}
      <section className="py-32 px-6 bg-[#15181E] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Image Content */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#C5A880] -translate-x-4 translate-y-4 rounded-[2rem] opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80" 
                alt="Personal Analysis" 
                className="relative z-10 w-full h-[550px] object-cover rounded-[2rem] grayscale-[50%] contrast-125 brightness-90"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-10">
              <div className="flex items-center space-x-4">
                <span className="text-5xl font-serif text-white/10 font-bold">02</span>
                <h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight leading-tight">
                  임상 장면의 상담전문가 위한 <br/>개인분석
                  <span className="block text-sm font-sans tracking-[0.3em] text-[#C5A880] mt-3 uppercase">Personal Analysis</span>
                </h2>
              </div>
              
              <div className="relative">
                <IconQuote className="absolute -top-6 -left-4 text-white/5 w-16 h-16" />
                <p className="relative z-10 text-2xl font-serif text-gray-200 leading-[1.6] italic pl-6 border-l-2 border-[#C5A880]">
                  "가장 예리한 치료적 도구인 <br/>
                  '심리사 자신'을 돌보고 다듬는 시간"
                </p>
              </div>

              <p className="text-gray-400 leading-[2.2] font-light text-lg">
                상담 현장에서 상담사의 내면은 내담자를 치유하는 가장 강력한 도구입니다. 임상 장면에서 필연적으로 마주하는 역전이와 심리적 소진을 깊이 있게 탐색하고, 상담자 자신의 무의식적 역동을 이해함으로써 더 단단하고 유연한 전문가로 거듭나게 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 bg-[#0F1115] border-t border-white/5 relative">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A880]/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <IconEye className="w-10 h-10 mx-auto text-[#C5A880] mb-8 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-12 leading-tight">
            전문가로서의 본질적 성장을 <br/>
            시작하십시오.
          </h2>
          
          <SmsButton 
            className="px-14 py-5 bg-transparent border border-[#C5A880] hover:bg-[#C5A880] text-[#C5A880] hover:text-[#0F1115] rounded-none font-medium transition-all duration-500 tracking-[0.2em] uppercase"
            body="안녕하세요. Professional Track(수퍼비전/개인분석) 문의드립니다. [성함/소속/희망분야]"
          >
            트랙 참가 문의하기
          </SmsButton>
          
          <p className="mt-14 text-gray-500 text-xs tracking-[0.2em] uppercase font-light">
            대구 수성구 범어동 | 철저한 비밀 보장 및 예약제 운영
          </p>
          <p className="text-xs text-center text-gray-600 mt-4 font-light tracking-wide">
            PC에서는 번호와 내용이 복사됩니다. 휴대폰에서 전송해 주세요.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center bg-[#0F1115]">
        <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase font-light">
          © 2011 Dream Counseling Center. Certified by KPA.
        </p>
      </footer>
    </div>
  );
}
