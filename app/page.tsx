import Link from "next/link";
import SectionHeading from "../components/SectionHeading";
import SmsButton from "../components/SmsButton";
import { credentials, processSteps, promises, services, site } from "./data/site";
import { getBoardPosts } from "./lib/googleBoard";

const accentClass: Record<string, string> = {
  blue: "border-[#c8e2ed] bg-[#f2f8fb]",
  rose: "border-[#ead3cf] bg-[#fff6f3]",
  green: "border-[#cfe4d7] bg-[#f2faf5]",
  amber: "border-[#eadfbe] bg-[#fffaf0]",
};

export default async function Home() {
  const posts = (await getBoardPosts()).slice(0, 3);

  return (
    <>
      <section
        className="relative flex min-h-[76vh] items-center overflow-hidden bg-white px-4 py-20 md:px-6"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.88) 45%, rgba(255,255,255,0.42) 100%), url('${site.heroImage}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-[1fr_0.72fr] md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1f6f8b]">Private Counseling Center</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-normal text-[#14314a] md:text-6xl">
              조용하고 안전한 공간에서
              <br />
              마음을 살피는 전문상담
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
              드림심리상담센터는 예약제로 운영되는 전문심리상담기관입니다. 비밀보장 원칙과
              독립된 상담 공간을 바탕으로 개인, 부부, 가족, 아동·청소년 상담을 진행합니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <SmsButton className="h-12">문자 예약 문의</SmsButton>
              <a
                href={site.kakaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-[#cddde2] bg-white px-6 font-bold text-[#14314a] shadow-sm transition hover:border-[#1f6f8b] hover:text-[#1f6f8b]"
              >
                카카오채널 문의
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur-md">
            <p className="text-sm font-bold text-[#1f6f8b]">상담 예약</p>
            <dl className="mt-5 grid gap-4 text-sm">
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
                <dt className="font-bold text-[#14314a]">전화</dt>
                <dd className="text-right text-slate-700">{site.phone}</dd>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
                <dt className="font-bold text-[#14314a]">위치</dt>
                <dd className="text-right text-slate-700">범어역 11번 출구 인근</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="font-bold text-[#14314a]">운영</dt>
                <dd className="text-right text-slate-700">사전 예약제</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-4 py-8 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {promises.map((item) => (
            <div key={item.title} className="rounded-lg border border-slate-200 bg-[#fbfdfc] p-5">
              <h2 className="font-bold text-[#14314a]">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Counseling Services"
            title="상담 서비스"
            description="하위 페이지는 유지하면서 전체 톤을 밝고 차분하게 정리했습니다."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className={`rounded-lg border p-6 transition hover:-translate-y-1 hover:shadow-lg ${accentClass[service.accent]}`}
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1f6f8b]">{service.eyebrow}</p>
                <h3 className="mt-3 text-2xl font-bold text-[#14314a]">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-700">{service.summary}</p>
                <ul className="mt-5 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-slate-700">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1f6f8b]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="bg-white px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.86fr_1fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1f6f8b]">Professional Standard</p>
            <h2 className="mt-4 text-3xl font-bold tracking-normal text-[#14314a] md:text-4xl">
              전문성과 프라이버시를 함께 지키는 상담
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              내부 공간 사진을 크게 노출하지 않아도, 내담자가 기대하는 것은 더 명확히 전달할 수 있습니다.
              자격, 예약제, 독립 공간, 비밀보장 원칙을 사이트의 중심 메시지로 배치했습니다.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {credentials.map((credential) => (
              <div key={credential} className="rounded-lg border border-slate-200 bg-[#f7faf8] p-5">
                <p className="text-sm font-bold leading-6 text-[#14314a]">{credential}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="voucher" className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-lg border border-[#d4e6ee] bg-[#f2f8fb] p-6 md:grid-cols-[0.92fr_1fr] md:p-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1f6f8b]">Voucher Program</p>
            <h2 className="mt-4 text-3xl font-bold tracking-normal text-[#14314a]">정신건강심리상담바우처</h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              드림심리상담센터는 정신건강심리상담바우처 서비스 제공기관입니다. 우울, 불안,
              정서적 어려움을 겪는 분들이 전문 상담을 이용할 수 있도록 안내합니다.
            </p>
            <p className="mt-4 rounded-lg border border-[#bdd8e1] bg-white p-4 text-sm font-bold leading-6 text-[#14314a]">
              동 행정복지센터, 정신건강복지센터, 청소년상담복지센터, 병의원 등을 통해 신청할 수 있습니다.
            </p>
          </div>
          <div className="rounded-lg border border-white bg-white p-4 shadow-sm">
            <img src="/voucher.png" alt="정신건강심리상담바우처 안내" className="h-full w-full rounded-lg object-cover" />
          </div>
        </div>
      </section>

      <section id="process" className="bg-white px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Process"
            title="이용 절차"
            description="상담은 빠른 접수보다 충분한 확인과 안전한 관계 설정을 우선합니다."
          />
          <div className="grid gap-5 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-lg border border-slate-200 bg-[#fbfdfc] p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#1f6f8b] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold text-[#14314a]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1f6f8b]">Notice & Column</p>
              <h2 className="mt-3 text-3xl font-bold tracking-normal text-[#14314a]">소식 및 칼럼</h2>
            </div>
            <Link href="/board" className="text-sm font-bold text-[#1f6f8b] hover:text-[#14314a]">
              전체 보기
            </Link>
          </div>

          {posts.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.id} href={`/board/${post.id}`} className="rounded-lg border border-slate-200 bg-white p-6 transition hover:shadow-lg">
                  <p className="text-sm font-bold text-[#1f6f8b]">{post.category || "소식"}</p>
                  <h3 className="mt-3 text-xl font-bold leading-7 text-[#14314a]">{post.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{post.summary}</p>
                  <p className="mt-5 text-xs text-slate-500">{post.date}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
              게시판은 Google Sheets 연결 후 표시됩니다.
            </div>
          )}
        </div>
      </section>

      <section id="contact" className="bg-[#102435] px-4 py-16 text-white md:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_0.8fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8cc3d1]">Contact</p>
            <h2 className="mt-4 text-3xl font-bold tracking-normal md:text-4xl">상담 예약 및 오시는 길</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">{site.address}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${site.phone}`}
                className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 font-bold text-[#102435] transition hover:bg-[#e9f5f6]"
              >
                전화 예약 {site.phone}
              </a>
              <a
                href={site.naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-white/30 px-6 font-bold text-white transition hover:border-white"
              >
                네이버 지도 보기
              </a>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/10 p-6">
            <h3 className="text-xl font-bold">프라이빗 상담 공간</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              센터 내부 이미지는 크게 노출하지 않고, 방문자가 안심할 수 있는 운영 원칙을 중심으로 안내합니다.
              상담실, 대기 공간, 놀이 공간은 사전 예약된 방문자에게 조용히 제공됩니다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
