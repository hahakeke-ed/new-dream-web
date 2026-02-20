'use client';

import React from 'react';
import Link from 'next/link';

export default function PrivateInsightPage() {
  // 아이콘 직접 구현 (lucide-react 에러 방지용)
  const IconArrowLeft = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
  );
  const IconZap = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
  );
  const IconTrendingUp = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
  );
  const IconShield = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
  );

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-slate-200 font-sans selection:bg-amber-500/30">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0f1a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <IconArrowLeft className="w-4 h-4 text-slate-500 group-hover:text-amber-500 transition-colors" />
            <span className="text-sm font-medium text-slate-500 group-hover:text-amber-500 transition-colors uppercase tracking-widest">Back to Main</span>
          </Link>
          <div className="flex flex-col items-end">
            <h1 className="text-lg font-['Pacifico'] text-amber-500">Mind Study</h1>
            <p className="text-[9px] uppercase tracking-[0.2em] text-slate-500">Private Insight Session</p>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-44 pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-amber-500 text-sm font-bold tracking-[0.4em] mb-8 animate-fade-in uppercase">Premium Counseling for Leaders</h2>
          
          <h1 className="text-4xl md:text-6xl font-black leading-[2] mb-12 text-white tracking-tight">
            복잡한 삶의 현상, <br /> 
            이면의 심리적 기제를 성찰하다
          </h1>
          
          <div className="w-24 h-[2px] bg-amber-500 mx-auto mb-12"></div>
          
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
            성찰 능력이 뛰어난 리더에게는 장황한 위로보다 정교한 질문이 필요합니다. <br/>
            단 한 번의 대화로 본질에 닿는 예리한 통찰을 경험하십시오.
          </p>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0f1a] to-[#0d1421] px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Principle 1 */}
            <div className="group p-10 rounded-[2.5rem] bg-white/[0.07] backdrop-blur-xl border border-white/10 hover:border-amber-500/40 hover:bg-white/[0.1] transition-all duration-500 shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <IconZap className="text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">밀도 높은 성찰</h3>
              <p className="text-[10px] text-amber-500 font-bold tracking-[0.2em] mb-6 uppercase">Density over Duration</p>
              <p className="text-slate-300 leading-relaxed font-light">
                긴 시간이 필요 없을 수 있습니다. 높은 지적 역량을 가진 당신에게 필요한 것은 
                전문가의 냉철한 따뜻함에서 시작되는, 본질을 관통하는 짧고 강력한 통찰입니다.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="group p-10 rounded-[2.5rem] bg-white/[0.07] backdrop-blur-xl border border-white/10 hover:border-amber-500/40 hover:bg-white/[0.1] transition-all duration-500 shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <IconTrendingUp className="text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">심리적 경영</h3>
              <p className="text-[10px] text-amber-500 font-bold tracking-[0.2em] mb-6 uppercase">Mental Stewardship</p>
              <p className="text-slate-300 leading-relaxed font-light">
                심리상담은 일시적인 치유가 아니라 지속적인 자기 경영입니다. 
                정기적인 follow-up 세션을 통해 당신의 심리적 자산을 지키고 관리하는 
                최상의 컨디션을 유지합니다.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="group p-10 rounded-[2.5rem] bg-white/[0.07] backdrop-blur-xl border border-white/10 hover:border-amber-500/40 hover:bg-white/[0.1] transition-all duration-500 shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <IconShield className="text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">완벽한 프라이버시</h3>
              <p className="text-[10px] text-amber-500 font-bold tracking-[0.2em] mb-6 uppercase">Absolute Privacy</p>
              <p className="text-slate-300 leading-relaxed font-light">
                이 공간은 당신을 온전히 존중합니다. 철저한 예약제와 정교한 동선 설계를 통해 
                다른 내담자와 마주치지 않는 극도의 편안함과 비밀을 보장합니다.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-24 text-white tracking-tight uppercase">The Insight Process</h2>
          <div className="space-y-20">
            <div className="flex gap-10 items-start">
              <span className="text-5xl font-black text-amber-500/10">01</span>
              <div className="pt-2">
                <h4 className="text-2xl font-bold mb-4 text-white">문의</h4>
                <p className="text-slate-400 text-lg leading-relaxed">문의를 남겨주시면 첫 연락부터 비밀은 보장됩니다.</p>
              </div>
            </div>
            
            <div className="flex gap-10 items-start">
              <span className="text-5xl font-black text-amber-500/10">02</span>
              <div className="pt-2">
                <h4 className="text-2xl font-bold mb-4 text-white">심층 성찰 세션 (Insight Session)</h4>
                <p className="text-slate-400 text-lg leading-relaxed">50분의 밀도 높은 대화를 통해 현재 현상 아래에 숨겨진 심리적 기제를 구조화하고 본질적인 답을 도출합니다.</p>
              </div>
            </div>
            
            <div className="flex gap-10 items-start">
              <span className="text-5xl font-black text-amber-500/10">03</span>
              <div className="pt-2">
                <h4 className="text-2xl font-bold mb-4 text-white">후속 관리 (Follow-up)</h4>
                <p className="text-slate-400 text-lg leading-relaxed">격월 혹은 분기별 세션을 통해 삶의 궤적을 점검하고 리더로서의 심리적 자산을 지속적으로 관리합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 border-t border-white/5 bg-[#0d1421]/50">
        <div className="max-w-3xl mx-auto text-center">
          <button className="px-16 py-6 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-bold transition-all shadow-[0_20px_50px_rgba(217,119,6,0.3)] text-xl tracking-widest active:scale-95">
            문의하기
          </button>
          <p className="mt-12 text-slate-500 text-sm tracking-[0.1em]">대구 수성구 범어동 | 100% 프라이빗 예약제</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-slate-600 text-[10px] tracking-[0.2em] uppercase">
        <p>© 2011 Dream Counseling Center. Certified by KPA.</p>
      </footer>
    </div>
  );
}
