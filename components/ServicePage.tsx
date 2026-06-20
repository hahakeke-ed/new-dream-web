import Link from "next/link";
import { serviceDetails, services, site } from "../app/data/site";
import SmsButton from "./SmsButton";

type ServiceSlug = keyof typeof serviceDetails;

const accentClass: Record<string, string> = {
  blue: "border-[#c8e2ed] bg-[#f2f8fb] text-[#1f6f8b]",
  rose: "border-[#ead3cf] bg-[#fff6f3] text-[#9a5b4a]",
  green: "border-[#cfe4d7] bg-[#f2faf5] text-[#357653]",
  amber: "border-[#eadfbe] bg-[#fffaf0] text-[#87651d]",
};

export default function ServicePage({ slug }: { slug: ServiceSlug }) {
  const detail = serviceDetails[slug];
  const service = services.find((item) => item.slug === slug);
  const accent = service ? accentClass[service.accent] : accentClass.blue;

  return (
    <>
      <section className="bg-[#f7faf8] px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Link href="/#services" className="text-sm font-bold text-[#1f6f8b] hover:text-[#14314a]">
            상담 서비스로 돌아가기
          </Link>
          <div className="mt-8 grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1f6f8b]">
                {service?.eyebrow ?? "Counseling"}
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-normal text-[#14314a] md:text-5xl">{detail.title}</h1>
              <p className="mt-5 max-w-3xl text-xl leading-8 text-slate-700">{detail.subtitle}</p>
            </div>
            <div className={`rounded-lg border p-6 ${accent}`}>
              <p className="text-sm font-bold">예약제 상담</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                상담 유형과 가능한 시간을 먼저 확인한 뒤 예약을 확정합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1fr]">
          <aside className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-[#14314a]">상담 안내</h2>
            <div className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              <p>전화: {site.phone}</p>
              <p>운영: 사전 예약제</p>
              <p>원칙: 비밀보장과 독립된 상담 공간</p>
            </div>
            <div className="mt-6 grid gap-2">
              <SmsButton className="w-full">문자 예약</SmsButton>
              <a
                href={site.kakaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-[#cddde2] text-sm font-bold text-[#14314a] transition hover:border-[#1f6f8b] hover:text-[#1f6f8b]"
              >
                카카오 문의
              </a>
            </div>
          </aside>

          <div>
            <p className="text-lg leading-9 text-slate-700">{detail.intro}</p>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {detail.sections.map((section) => (
                <div key={section.title} className="rounded-lg border border-slate-200 bg-white p-6">
                  <h2 className="text-xl font-bold text-[#14314a]">{section.title}</h2>
                  <ul className="mt-5 space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1f6f8b]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
