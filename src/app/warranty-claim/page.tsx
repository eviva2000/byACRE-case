import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollToModelsLink } from "@/components/warranty-claim/ScrollToModelsLink";
import { WarrantyClaimFlow } from "@/components/warranty-claim/WarrantyClaimFlow";

export const metadata: Metadata = {
  title: "Warranty Claim | byACRE",
  description: "A product-led byACRE warranty claim experience for rollator owners.",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.24em] text-byacre-red">
      {children}
    </p>
  );
}

const headerControlClass =
  "inline-flex items-center gap-3 whitespace-nowrap font-semibold uppercase leading-none text-byacre-black transition-colors hover:text-byacre-red focus:text-byacre-red focus:outline-none focus:ring-4 focus:ring-byacre-red/15";

function HeaderChevron() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 18 11"
      className="h-3 w-5 shrink-0"
      fill="none"
    >
      <path
        d="m1.5 1.5 7.5 7 7.5-7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

function DenmarkFlag() {
  return (
    <span
      aria-hidden="true"
      className="relative h-7 w-7 shrink-0 overflow-hidden rounded-[5px] bg-[#c8102e]"
    >
      <span className="absolute inset-x-0 top-[11px] h-[5px] bg-white" />
      <span className="absolute inset-y-0 left-[8px] w-[5px] bg-white" />
    </span>
  );
}

function CartIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 30"
      className="h-8 w-8 shrink-0"
      fill="none"
    >
      <path
        d="M2 3h4l2.7 15.2h16.8l3.2-11.1H7.2M11.2 24.8a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0Zm15.1 0a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 18"
      className="h-[18px] w-6"
      fill="none"
    >
      <path
        d="M1 1h22M1 9h22M1 17h22"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function HeaderNavigation() {
  return (
    <nav
      aria-label="Main navigation"
      className="font-montserrat hidden items-center gap-4 text-base xl:flex 2xl:gap-9 2xl:text-xl"
    >
      <button type="button" className={headerControlClass}>
        Forside
      </button>
      <span aria-hidden="true" className="h-11 w-px shrink-0 bg-byacre-black/80" />
      <button type="button" className={headerControlClass}>
        ROLLATORER
        <HeaderChevron />
      </button>
      <button type="button" className={headerControlClass}>
        SHOP
        <HeaderChevron />
      </button>
      <button type="button" className={headerControlClass}>
        DORICA
        <HeaderChevron />
      </button>
      <button type="button" className={headerControlClass}>
        HISTORIER
        <HeaderChevron />
      </button>
      <span aria-hidden="true" className="h-11 w-px shrink-0 bg-byacre-black/80" />
      <button type="button" className={headerControlClass}>
        Om os
      </button>
      <button type="button" className={headerControlClass}>
        Hjælp
        <HeaderChevron />
      </button>
      <span aria-hidden="true" className="h-11 w-px shrink-0 bg-byacre-black/80" />
      <button type="button" className={headerControlClass}>
        <DenmarkFlag />
        Dk
        <HeaderChevron />
      </button>
      <span aria-hidden="true" className="h-11 w-px shrink-0 bg-byacre-black/80" />
      <button type="button" className={`${headerControlClass} font-bold`}>
        <CartIcon />
        Kurv
      </button>
    </nav>
  );
}

export default function WarrantyClaimPage() {
  return (
    <main className="min-h-screen bg-bg text-granite">
      <header className="sticky top-0 z-50 border-b border-byacre-black/60 bg-white/95 backdrop-blur-md">
        <div className="flex h-[92px] items-center justify-between px-5 sm:px-8 xl:h-[132px] 2xl:px-14">
          <Link href="/" aria-label="byACRE home" className="shrink-0">
            <Image
              src="/logo.svg"
              alt="byACRE"
              width={178}
              height={70}
              className="h-12 w-auto sm:h-14 xl:h-[4.25rem]"
              priority
            />
          </Link>
          <HeaderNavigation />
          <button
            type="button"
            className="font-montserrat inline-flex items-center gap-3 text-sm font-bold uppercase text-byacre-black focus:outline-none focus:ring-4 focus:ring-byacre-red/15 xl:hidden"
            aria-label="Open main navigation"
          >
            Menu
            <MenuIcon />
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-[88rem] px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
        <div className="max-w-6xl text-left">
          <SectionLabel>Warranty support</SectionLabel>
          <h1 className="mt-5 max-w-6xl text-4xl font-bold [--tw-leading:var(--leading-tight)] [line-height:var(--tw-leading,var(--text-5xl--line-height))] tracking-[0.05em] text-granite sm:text-[58px]">
            Let us get your <span className="lg:whitespace-nowrap">rollator moving smoothly again.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate">
            Choose your byACRE rollator model and we will guide you through a
            clear warranty claim.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ScrollToModelsLink
              className="font-montserrat inline-flex items-center justify-center rounded-2xl border-0 bg-byacre-black px-10 py-4 text-center text-base font-semibold uppercase leading-[1.7] text-white transition-[color] hover:text-byacre-red focus:outline-none focus:ring-4 focus:ring-byacre-red/20"
            >
              Start with your model
            </ScrollToModelsLink>
            <a
              href="#help"
              className="font-montserrat inline-flex min-h-12 items-center justify-center rounded-[0.625rem] px-2 text-center text-base font-bold uppercase text-granite transition hover:text-byacre-red focus:outline-none focus:ring-4 focus:ring-byacre-red/15"
            >
              Need general support?
            </a>
          </div>
        </div>
      </section>

      <WarrantyClaimFlow />

      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
        <div className="mx-auto flex max-w-[88rem] flex-col gap-5 bg-byacre-light-blue p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
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
            className="font-montserrat inline-flex min-h-12 items-center justify-center rounded-[0.625rem] border border-granite/50 bg-white px-6 text-base font-extrabold uppercase text-granite transition hover:border-byacre-red hover:text-byacre-red focus:outline-none focus:ring-4 focus:ring-byacre-red/15"
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
