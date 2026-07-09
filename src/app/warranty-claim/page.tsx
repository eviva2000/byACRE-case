import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WarrantyClaimFlow } from "@/components/warranty-claim/WarrantyClaimFlow";

export const metadata: Metadata = {
  title: "Warranty Claim | byACRE",
  description: "A product-led byACRE warranty claim experience for rollator owners.",
};

const heroModel = {
  name: "Carbon Ultralight",
  imageSrc:
    "https://pub-0302b8f55d6b457a81f751a269bf533c.r2.dev/users/cmpd0qeka00013pqp9ifxshj7/carbon_ultralight-royal_blue-01.png",
  imageAlt: "Carbon Ultralight rollator in royal blue",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.24em] text-byacre-red">
      {children}
    </p>
  );
}

export default function WarrantyClaimPage() {
  return (
    <main className="min-h-screen bg-bg text-granite">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-[color-mix(in_oklab,var(--background)_90%,transparent)] backdrop-blur-md">
        <div className="mx-auto flex max-w-[88rem] items-center justify-between px-5 py-7 sm:px-0">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="byACRE"
              width={102}
              height={40}
              className="h-8 w-auto"
              priority
            />
            <span className="align-middle text-base font-medium text-slate">
              Support
            </span>
          </Link>
          <nav aria-label="Warranty support navigation" className="hidden items-center gap-9 text-lg font-semibold sm:flex">
            <a href="#models" className="text-granite transition hover:text-byacre-red focus:text-byacre-red focus:outline-none">
              Choose model
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-[88rem] gap-12 px-5 pb-16 pt-24 sm:px-0 md:grid-cols-[1fr_0.9fr] md:items-center md:pb-20 md:pt-32 lg:gap-20">
        <div>
          <SectionLabel>Warranty support</SectionLabel>
          <h1 className="mt-5 max-w-2xl text-4xl font-extrabold [--tw-leading:var(--leading-tight)] [line-height:var(--tw-leading,var(--text-5xl--line-height))] tracking-normal text-granite sm:text-[58px]">
            Let us get your rollator moving smoothly again.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate">
            Choose your byACRE rollator model and we will guide you through a
            clear warranty claim.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#models"
              className="inline-flex min-h-12 items-center justify-center rounded-[0.625rem] bg-byacre-red px-7 text-base font-bold text-white transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-byacre-red/20"
            >
              Start with your model
            </a>
            <a
              href="#help"
              className="inline-flex min-h-12 items-center justify-center rounded-[0.625rem] px-2 text-base font-bold text-granite transition hover:text-byacre-red focus:outline-none focus:ring-4 focus:ring-byacre-red/15"
            >
              Need general support?
            </a>
          </div>
        </div>
        <div className="rounded-[20px] bg-byacre-light-blue px-6 py-10">
          <div className="relative h-72 w-full sm:h-88">
            <Image
              src={heroModel.imageSrc}
              alt={heroModel.imageAlt ?? heroModel.name}
              fill
              priority
              sizes="(min-width: 768px) 42vw, 90vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <WarrantyClaimFlow />

      <section className="px-5 py-14 sm:px-8">
        <div className="mx-auto flex max-w-[88rem] flex-col gap-5 rounded-[32px] bg-byacre-light-blue p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div>
            <h2 className="text-2xl font-extrabold text-granite">
              Need help with Dorica Seat?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate">
              This warranty claim flow is currently designed for byACRE
              rollators. For Dorica Seat support, contact byACRE support or start
              a general support request.
            </p>
          </div>
          <a
            href="#help"
            className="inline-flex min-h-12 items-center justify-center rounded-[0.625rem] border border-granite/50 bg-white px-6 text-base font-extrabold text-granite transition hover:border-byacre-red hover:text-byacre-red focus:outline-none focus:ring-4 focus:ring-byacre-red/15"
          >
            Contact support
          </a>
        </div>
      </section>

      <footer id="help" className="border-t border-border px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-base leading-7 text-slate sm:flex-row sm:items-center sm:justify-between">
          <p>
            A clear warranty claim helps byACRE support your rollator with the
            right product context from the start.
          </p>
          <p className="font-bold text-granite">Support: support@byacre.com</p>
        </div>
      </footer>
    </main>
  );
}
