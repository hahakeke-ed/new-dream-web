'use client';

import React, { useState } from 'react';

type SmsButtonProps = {
  children: React.ReactNode;
  body?: string;
  className?: string;
  phone?: string;
};

// 원장님의 상담 문의 전화번호입니다.
const PHONE_DEFAULT = '01075691282';

export default function SmsButton({
  children,
  body = '',
  className = '',
  phone = PHONE_DEFAULT,
}: SmsButtonProps) {
  const [copied, setCopied] = useState(false);
  const finalBody = encodeURIComponent(body);

  const handleClick = async () => {
    // 1. 모바일 기기인지 확인 (아이폰/안드로이드)
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    
    // 아이폰은 구분자를 '&', 안드로이드는 '?'를 씁니다.
    const isiOS = /iPad|iPhone|iPod/i.test(navigator.userAgent);
    const sep = isiOS ? '&' : '?';
    const scheme = `sms:${phone}${sep}body=${finalBody}`;

    // 2. 모바일이면 바로 문자 앱 실행
    if (isMobile) {
      window.location.href = scheme;
      return;
    }

    // 3. 데스크톱이면 클립보드에 복사
    try {
      await navigator.clipboard.writeText(`${phone}\n${decodeURIComponent(finalBody)}`);
      setCopied(true);
      // 2.5초 뒤에 '복사됨' 메시지를 원상복구
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // 복사가 안 되는 특이한 브라우저 환경이면 그냥 문자 앱 시도
      window.location.href = scheme;
    }
  };

  // 통일된 주황색(Amber) 스타일 버튼
  const base =
    'inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold shadow-md border transition ' +
    'bg-amber-600 text-white border-amber-600 hover:bg-amber-500 hover:border-amber-500 ' +
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 cursor-pointer';

  return (
    <button type="button" onClick={handleClick} className={`${base} ${className}`}>
      {copied ? '번호 복사 완료!' : children}
    </button>
  );
}
