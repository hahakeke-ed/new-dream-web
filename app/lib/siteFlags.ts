// lib/siteFlags.ts
// 특정 기능을 켜고 끄는 스위치입니다. (넷틀리파이 환경변수로 제어 가능)
export const SHOW_MIND_SERVICE =
  (process.env.NEXT_PUBLIC_SHOW_MIND_SERVICE ?? 'false') === 'true';
