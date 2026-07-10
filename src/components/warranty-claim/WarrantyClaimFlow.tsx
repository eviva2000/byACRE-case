"use client";

import Image from "next/image";
import { useState } from "react";

interface ModelCard {
  name: string;
  description: string;
  badge: string;
  accentClass: string;
  imageSrc?: string;
  imageAlt?: string;
}

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

const fieldClass =
  "mt-2 h-12 w-full rounded-[6px] border border-border bg-white px-4 text-base text-granite outline-none placeholder:font-normal placeholder:text-slate/70 focus:border-byacre-red focus:ring-2 focus:ring-byacre-red/15";

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

function SelectedModelThumb({ model }: { model: ModelCard }) {
  return (
    <div className="relative h-12 w-12">
      {model.imageSrc ? (
        <Image
          src={model.imageSrc}
          alt={model.imageAlt ?? model.name}
          fill
          sizes="48px"
          className="object-contain"
        />
      ) : (
        <RollatorIllustration accentClass={model.accentClass} />
      )}
    </div>
  );
}

export function WarrantyClaimFlow() {
  const [selectedModel, setSelectedModel] = useState<ModelCard | null>(null);
  const selectedModelIndex = selectedModel
    ? models.findIndex((model) => model.name === selectedModel.name)
    : -1;
  const previewOrderClass =
    previewOrderClasses[selectedModelIndex] ?? "order-[8]";

  return (
    <>
      <section id="models" className="mx-auto max-w-[88rem] px-5 py-14 sm:px-0 sm:py-20 lg:py-28">
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
                  onClick={() => setSelectedModel(model)}
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
                  onClick={() => setSelectedModel(model)}
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
              className={`col-span-full max-h-[2400px] overflow-hidden animate-[claim-preview-enter_900ms_ease-in-out_both] motion-reduce:animate-none lg:order-[8] lg:mt-[3.75rem] ${previewOrderClass}`}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="bg-byacre-light-blue px-5 py-16 sm:px-8 sm:py-20">
                <div className="mx-auto max-w-3xl bg-white p-6 shadow-[0_24px_70px_rgba(63,64,64,0.08)] sm:p-9">
                  <div className="flex flex-col gap-4 bg-byacre-light-blue p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-white">
                        <SelectedModelThumb model={selectedModel} />
                      </div>
                      <div>
                        <p className="text-[0.625rem] font-black uppercase tracking-[0.2em] text-slate sm:text-xs">
                          Selected model
                        </p>
                        <p className="mt-1 text-base font-extrabold text-granite sm:text-lg">
                          {selectedModel.name}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedModel(null)}
                      className="font-montserrat min-h-11 rounded-[0.625rem] border border-border bg-white px-4 text-sm font-extrabold uppercase text-granite transition hover:border-byacre-red hover:text-byacre-red focus:outline-none focus:ring-4 focus:ring-byacre-red/15"
                    >
                      Change model
                    </button>
                  </div>

                  <div className="mt-9">
                    <h2 className="text-3xl font-bold leading-tight text-granite">
                      Warranty claim details
                    </h2>
                    <p className="mt-3 text-base leading-7 text-slate">
                      After choosing a model, customers will add their order
                      details, issue description, photos, and contact
                      information.
                    </p>
                  </div>

                  <form className="mt-8" aria-label="Static warranty claim form preview">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block text-sm font-extrabold text-granite">
                        Your name
                        <input className={fieldClass} type="text" placeholder="Jane Andersen" readOnly />
                      </label>
                      <label className="block text-sm font-extrabold text-granite">
                        Your email
                        <input className={fieldClass} type="email" placeholder="jane@example.com" readOnly />
                      </label>
                    </div>

                    <label className="mt-5 block text-sm font-extrabold text-granite">
                      Serial number
                      <input className={fieldClass} type="text" placeholder="e.g. BA-2024-000000" readOnly />
                    </label>
                    <p className="mt-3 text-sm leading-6 text-slate">
                      You can find the serial number on the rollator frame under
                      the right rear wheel. It is written on a white sticker
                      with a small QR code beside it.
                    </p>

                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      <label className="block text-sm font-extrabold text-granite">
                        Where did you purchase your product?
                        <input className={fieldClass} type="text" placeholder="Store or online retailer" readOnly />
                      </label>
                      <label className="block text-sm font-extrabold text-granite">
                        Date of purchase
                        <input className={fieldClass} type="text" placeholder="dd/mm/yyyy" readOnly />
                      </label>
                    </div>

                    <label className="mt-5 block text-sm font-extrabold text-granite">
                      Describe the issue
                      <textarea
                        className="mt-2 min-h-36 w-full resize-none rounded-[6px] border border-border bg-white px-4 py-3 text-base text-granite outline-none placeholder:font-normal placeholder:text-slate/70 focus:border-byacre-red focus:ring-2 focus:ring-byacre-red/15"
                        placeholder="Tell us what happened and what you noticed."
                        readOnly
                      />
                    </label>

                    <div className="mt-5">
                      <p className="text-sm font-extrabold text-granite">Add photos</p>
                      <div className="mt-2 flex min-h-32 flex-col items-center justify-center rounded-[6px] border border-dashed border-border bg-white px-5 text-center">
                        <p className="text-base font-bold text-granite">
                          Drag photos here or browse to upload
                        </p>
                        <p className="mt-2 text-sm text-slate">
                          PNG or JPG, up to 10MB each
                        </p>
                      </div>
                    </div>

                    <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-slate">
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 rounded border-border text-byacre-red focus:ring-byacre-red"
                        readOnly
                      />
                      <span>
                        I confirm that the information is correct and agree
                        that byACRE may contact me about this claim.
                      </span>
                    </label>

                    <button
                      type="button"
                      className="font-montserrat mt-7 inline-flex items-center justify-center rounded-2xl border-0 bg-byacre-black px-10 py-4 text-base font-semibold uppercase leading-[1.7] text-white transition-[color] hover:text-byacre-red focus:outline-none focus:ring-4 focus:ring-byacre-red/20 sm:w-auto"
                    >
                      Submit warranty claim
                    </button>
                  </form>
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
