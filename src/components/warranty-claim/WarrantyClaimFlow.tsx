"use client";

import Image from "next/image";
import { useState } from "react";
import { WarrantyClaimForm } from "@/components/warranty-claim/WarrantyClaimForm";
import { scrollToModelsSection } from "@/lib/scroll-to-models";
import type { ModelCard } from "@/types/warranty-claim";

interface InfoCard {
  eyebrow: string;
  title: string;
  body: string;
}

const models: ModelCard[] = [
  {
    name: "Carbon Ultralight",
    description: "Lightweight everyday rollator with a clean carbon frame.",
    badge: "Lifetime frame warranty",
    accentClass: "bg-royal-blue",
    imageSrc:
      "https://pub-0302b8f55d6b457a81f751a269bf533c.r2.dev/users/cmpd0qeka00013pqp9ifxshj7/carbon_ultralight-royal_blue-01.png",
    imageAlt: "Carbon Ultralight rollator in royal blue",
  },
  {
    name: "Carbon Overland",
    description: "Built for outdoor paths and uneven ground.",
    badge: "Lifetime frame warranty",
    accentClass: "bg-defender-green",
    imageSrc:
      "https://pub-0302b8f55d6b457a81f751a269bf533c.r2.dev/users/cmpd0qeka00013pqp9ifxshj7/CO.png",
    imageAlt: "Carbon Overland rollator",
  },
  {
    name: "Nordic Pioneer",
    description: "Reliable support for daily movement.",
    badge: "Standard warranty",
    accentClass: "bg-oyster-white",
    imageSrc:
      "https://pub-0302b8f55d6b457a81f751a269bf533c.r2.dev/users/cmpd0qeka00013pqp9ifxshj7/NP.png",
    imageAlt: "Nordic Pioneer rollator",
  },
  {
    name: "Scandinavian Butler",
    description: "Elegant indoor support for home and hospitality spaces.",
    badge: "Lifetime frame warranty",
    accentClass: "bg-champagne-gold",
    imageSrc:
      "https://pub-0302b8f55d6b457a81f751a269bf533c.r2.dev/users/cmpd0qeka00013pqp9ifxshj7/SB.png",
    imageAlt: "Scandinavian Butler rollator",
  },
];

const nextSteps: InfoCard[] = [
  {
    eyebrow: "Review",
    title: "Your claim is checked",
    body: "The support team reviews the model, warranty context, and photos you provide.",
  },
  {
    eyebrow: "Guidance",
    title: "You receive next steps",
    body: "byACRE follows up with repair, replacement, or troubleshooting guidance for your rollator.",
  },
  {
    eyebrow: "Movement",
    title: "You get moving again",
    body: "The process is designed to keep the support experience clear, calm, and practical.",
  },
];

const modelOrderClasses = [
  "order-[0]",
  "order-[2]",
  "order-[4]",
  "order-[6]",
] as const;

const previewOrderClasses = [
  "order-[1]",
  "order-[3]",
  "order-[5]",
  "order-[7]",
] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.24em] text-byacre-red">
      {children}
    </p>
  );
}

function RollatorIllustration({ accentClass }: { accentClass: string }) {
  return (
    <div className="relative mx-auto h-32 w-44" aria-hidden="true">
      <div className="absolute bottom-5 left-6 h-9 w-9 rounded-full border-[5px] border-granite/75 bg-white" />
      <div className="absolute bottom-5 right-7 h-11 w-11 rounded-full border-[5px] border-granite/75 bg-white" />
      <div className="absolute bottom-[3.25rem] left-[3.25rem] h-1 w-24 rotate-[-17deg] rounded-full bg-granite/55" />
      <div className="absolute bottom-[3.75rem] left-16 h-1 w-20 rotate-[22deg] rounded-full bg-granite/55" />
      <div className={`absolute bottom-14 left-14 h-20 w-4 rotate-[-10deg] rounded-full ${accentClass}`} />
      <div className="absolute bottom-[4.75rem] right-10 h-[4.75rem] w-1 rotate-[-8deg] rounded-full bg-granite/50" />
      <div className="absolute top-6 right-9 h-7 w-11 rounded-tl-[18px] border-l-[5px] border-t-[5px] border-granite/65" />
      <div className="absolute top-11 right-[4.5rem] h-2 w-20 rounded-full bg-granite/70" />
      <div className="absolute top-5 left-[4.25rem] h-8 w-10 rounded-tl-[16px] border-l-[5px] border-t-[5px] border-granite/60" />
    </div>
  );
}

export function WarrantyClaimFlow() {
  const [selectedModel, setSelectedModel] = useState<ModelCard | null>(models[0]);
  const selectedModelIndex = selectedModel
    ? models.findIndex((model) => model.name === selectedModel.name)
    : -1;
  const previewOrderClass =
    previewOrderClasses[selectedModelIndex] ?? "order-[8]";

  const selectModel = (model: ModelCard) => {
    setSelectedModel(model);

    if (window.matchMedia("(min-width: 1024px)").matches) {
      window.requestAnimationFrame(() => {
        document.getElementById("claim-preview")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  };

  return (
    <>
      <section id="models" className="mx-auto max-w-[88rem] scroll-mt-40 px-5 py-14 sm:px-0 sm:py-20 lg:py-28">
        <SectionLabel>Choose your rollator</SectionLabel>
        <div className="mt-4 max-w-3xl">
          <h2 className="text-3xl font-bold leading-tight tracking-[0.05em] text-granite sm:text-4xl">
            Which model do you need help with?
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate">
            Select your model so the claim can be routed with the right product
            context.
          </p>
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {models.map((model, index) => {
            const isSelected = selectedModel?.name === model.name;

            return (
              <article
                key={model.name}
                className={`flex h-full flex-col overflow-hidden border border-border bg-white transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(63,64,64,0.09)] ${
                  modelOrderClasses[index] ?? "order-[0]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => selectModel(model)}
                  className="block w-full text-left focus:outline-none focus:ring-4 focus:ring-byacre-red/15"
                  aria-pressed={isSelected}
                >
                  <span className="flex h-56 items-center justify-center bg-byacre-light-blue px-5 py-7">
                    {model.imageSrc ? (
                      <span className="relative h-48 w-full">
                        <Image
                          src={model.imageSrc}
                          alt={model.imageAlt ?? model.name}
                          fill
                          sizes="(min-width: 1024px) 240px, (min-width: 640px) 45vw, 90vw"
                          className="object-contain"
                        />
                      </span>
                    ) : (
                      <RollatorIllustration accentClass={model.accentClass} />
                    )}
                  </span>
                </button>
                <div className="flex min-h-[16rem] flex-1 flex-col p-6">
                  <p className="w-fit rounded-[5px] bg-byacre-light-blue px-3 py-1 text-xs font-bold text-slate">
                    {model.badge}
                  </p>
                  <h3 className="mt-4 text-xl font-extrabold text-granite">
                    {model.name}
                  </h3>
                  <p className="mt-3 flex-1 text-base leading-7 text-slate">
                    {model.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => selectModel(model)}
                  className={`font-montserrat flex min-h-16 w-full items-center justify-center border-0 bg-byacre-black px-6 py-5 text-base font-semibold uppercase tracking-[0.02em] transition-colors hover:text-byacre-red focus:outline-none focus:ring-4 focus:ring-inset focus:ring-byacre-red/40 ${
                    isSelected ? "text-byacre-red" : "text-white"
                  }`}
                  aria-pressed={isSelected}
                >
                  {isSelected ? "Selected" : "Select model"}
                </button>
              </article>
            );
          })}
          {selectedModel ? (
            <div
              key={selectedModel.name}
              id="claim-preview"
              className={`col-span-full max-h-[2400px] scroll-mt-40 overflow-hidden animate-[claim-preview-enter_900ms_ease-in-out_both] motion-reduce:animate-none lg:order-[8] lg:mt-[3.75rem] lg:animate-none ${previewOrderClass}`}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="bg-byacre-light-blue px-5 py-16 sm:px-8 sm:py-20">
                  <div className="mx-auto max-w-3xl bg-white p-6 shadow-[0_24px_70px_rgba(63,64,64,0.08)] sm:p-9">
                    <WarrantyClaimForm
                      selectedModel={selectedModel}
                      onChangeModel={scrollToModelsSection}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
        <SectionLabel>After submission</SectionLabel>
        <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[0.05em] text-granite sm:text-4xl">
          What happens next
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {nextSteps.map((step) => (
            <article key={step.title} className="border-l-4 border-byacre-red bg-white py-2 pl-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-slate">
                {step.eyebrow}
              </p>
              <h3 className="mt-3 text-xl font-bold text-granite">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate">{step.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
