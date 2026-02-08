'use client';

import Link from 'next/link';

export default function HeritagePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      
      {/* 상단 네비게이션 (심플하게 홈으로 가는 버튼만 배치) */}
      <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
        <Link 
          href="/" 
          className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 font-medium"
        >
          ← 홈으로 돌아가기
        </Link>
      </nav>

      {/* 1. Hero Section (타이틀) */}
      <section className="relative h-[50vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-black to-slate-900">
        <h1 className="text-5xl md:text-7xl font-bold text-amber-500 mb-6 font-['Pacifico'] tracking-wide">
          Heritage
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl leading-relaxed">
          2011년부터 이어온 치유와 성장의 기록<br/>
          사람을 향한 진심, 그 깊이 있는 여정
        </p>
      </section>

      {/* 2. Philosophy Section (철학) */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-10">우리의 철학</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-amber-500 transition duration-300">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-bold text-white mb-3">진정성</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              한 사람 한 사람의 마음에<br/>깊이 공감하며 다가갑니다.
            </p>
          </div>
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-amber-500 transition duration-300">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold text-white mb-3">전문성</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              검증된 자격과 끊임없는 연구로<br/>최상의 상담을 제공합니다.
            </p>
          </div>
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-amber-500 transition duration-300">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-white mb-3">동행</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              당신이 홀로 서는 그날까지<br/>든든한 버팀목이 되겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 3. History Timeline (연혁) */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-16 text-center">걸어온 길</h2>
          
          <div className="space-y-12 border-l-2 border-slate-700 ml-4 md:ml-0 pl-8 md:pl-0">
            
            {/* 2026 ~ 현재 */}
            <div className="relative md:flex items-center group">
              {/* 왼쪽 연도 */}
              <div className="md:w-1/3 md:text-right md:pr-12 mb-2 md:mb-0">
                <span className="text-2xl font-bold text-amber-500">2026</span>
              </div>
              {/* 중앙 점 */}
              <div className="absolute left-[-37px] md:left-1/3 md:ml-[-5px] w-4 h-4 bg-slate-600 rounded-full border-4 border-slate-950 group-hover:bg-amber-500 transition"></div>
              {/* 오른쪽 내용 */}
              <div className="md:w-2/3 md:pl-12">
                <h3 className="text-lg font-bold text-white mb-1">Mind Study 플랫폼 확장</h3>
                <p className="text-slate-400 text-sm">프리미엄 심리 분석 및 전문가 교육 과정 런칭</p>
              </div>
            </div>

            {/* 2020 ~ 2025 */}
            <div className="relative md:flex items-center group">
              <div className="md:w-1/3 md:text-right md:pr-12 mb-2 md:mb-0">
                <span className="text-2xl font-bold text-slate-500 group-hover:text-slate-300 transition">2020 - 2025</span>
              </div>
              <div className="absolute left-[-37px] md:left-1/3 md:ml-[-5px] w-4 h-4 bg-slate-600 rounded-full border-4 border-slate-950 group-hover:bg-amber-500 transition"></div>
              <div className="md:w-2/3 md:pl-12">
                <h3 className="text-lg font-bold text-white mb-1">통합 심리 서비스 고도화</h3>
                <p className="text-slate-400 text-sm mb-1">· 정신건강심리상담바우처 제공기관 선정</p>
                <p className="text-slate-400 text-sm">· 기업 EAP 상담 제휴 확대</p>
              </div>
            </div>

            {/* 2015 ~ 2019 */}
            <div className="relative md:flex items-center group">
              <div className="md:w-1/3 md:text-right md:pr-12 mb-2 md:mb-0">
                <span className="text-2xl font-bold text-slate-500 group-hover:text-slate-300 transition">2015 - 2019</span>
              </div>
              <div className="absolute left-[-37px] md:left-1/3 md:ml-[-5px] w-4 h-4 bg-slate-600 rounded-full border-4 border-slate-950 group-hover:bg-amber-500 transition"></div>
              <div className="md:w-2/3 md:pl-12">
                <h3 className="text-lg font-bold text-white mb-1">전문성 강화 및 확장</h3>
                <p className="text-slate-400 text-sm mb-1">· 한국심리학회 전문기관 인증</p>
                <p className="text-slate-400 text-sm">· 청소년/가족 상담 프로그램 개발</p>
              </div>
            </div>

            {/* 2011 */}
            <div className="relative md:flex items-center group">
              <div className="md:w-1/3 md:text-right md:pr-12 mb-2 md:mb-0">
                <span className="text-2xl font-bold text-slate-500 group-hover:text-slate-300 transition">2011</span>
              </div>
              <div className="absolute left-[-37px] md:left-1/3 md:ml-[-5px] w-4 h-4 bg-slate-600 rounded-full border-4 border-slate-950 group-hover:bg-amber-500 transition"></div>
              <div className="md:w-2/3 md:pl-12">
                <h3 className="text-lg font-bold text-white mb-1">드림심리상담센터 개소</h3>
                <p className="text-slate-400 text-sm">대구광역시 수성구에서 첫 걸음 시작</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer (심플 버전) */}
      <footer className="py-10 text-center text-slate-500 text-sm border-t border-slate-800">
        &copy; 2011 Dream Counseling Center. All rights reserved.
      </footer>
    </div>
  );
}
