"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { ChangeEvent, SubmitEvent } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitWarrantyClaim } from "@/lib/warranty-claim/submit";
import type {
  ClaimAttachment,
  IssueCategory,
  ModelCard,
  WarrantyClaimFormData,
} from "@/types/warranty-claim";

interface WarrantyClaimFormProps {
  selectedModel: ModelCard;
  onChangeModel: () => void;
}

type FormStatus = "idle" | "submitting" | "success" | "error";
type ClaimField =
  | "fullName"
  | "email"
  | "purchaseLocation"
  | "issueCategory"
  | "issueDescription"
  | "consent";
type TextField =
  | "fullName"
  | "email"
  | "phone"
  | "orderNumber"
  | "purchaseLocation"
  | "purchaseDate"
  | "serialNumber"
  | "issueStartedAt"
  | "issueDescription";
type FieldErrors = Partial<Record<ClaimField, string>>;

const MAX_FILE_COUNT = 5;
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const allowedMimeTypes = new Set([
  "application/pdf",
  "image/heic",
  "image/heif",
  "image/jpeg",
  "image/png",
]);
const fieldClass =
  "mt-2 h-12 w-full rounded-[6px] border border-border bg-white px-4 text-base font-normal text-granite outline-none placeholder:font-normal placeholder:text-slate/70 focus:border-byacre-red focus:ring-2 focus:ring-byacre-red/15";
const errorFieldClass = "border-byacre-red";
const fieldIds: Record<ClaimField, string> = {
  fullName: "claim-full-name",
  email: "claim-email",
  purchaseLocation: "claim-purchase-location",
  issueCategory: "claim-issue-category",
  issueDescription: "claim-issue-description",
  consent: "claim-consent",
};

const issueCategories: Array<{ label: string; value: IssueCategory }> = [
  { label: "Brake issue", value: "brake" },
  { label: "Wheel issue", value: "wheel" },
  { label: "Frame issue", value: "frame" },
  { label: "Seat or textile issue", value: "seat_or_textile" },
  { label: "Handle issue", value: "handle" },
  { label: "Shipping damage", value: "shipping_damage" },
  { label: "Other", value: "other" },
];

const purchaseLocations = [
  { label: "United States (US)", value: "United States" },
  { label: "United Kingdom (UK)", value: "United Kingdom" },
  { label: "France (FR)", value: "France" },
  { label: "Germany (DE)", value: "Germany" },
  { label: "Netherlands (NL)", value: "Netherlands" },
  { label: "Italy (IT)", value: "Italy" },
  { label: "Denmark (DK)", value: "Denmark" },
  { label: "日本語 (JP)", value: "Japan" },
];

function createInitialForm(model: ModelCard): WarrantyClaimFormData {
  return {
    selectedModel: model.name,
    fullName: "",
    email: "",
    phone: "",
    orderNumber: "",
    purchaseLocation: "",
    purchaseDate: "",
    serialNumber: "",
    issueCategory: "",
    issueStartedAt: "",
    issueDescription: "",
    attachments: [],
    consent: false,
  };
}

function validateForm(data: WarrantyClaimFormData): FieldErrors {
  const nextErrors: FieldErrors = {};

  if (!data.fullName.trim()) nextErrors.fullName = "Please enter your name.";
  if (!data.email.trim()) {
    nextErrors.email = "Please enter your email address.";
  } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
    nextErrors.email = "Please enter a valid email address.";
  }
  if (!data.purchaseLocation.trim()) {
    nextErrors.purchaseLocation = "Please choose where you purchased your rollator.";
  }
  if (!data.issueCategory) {
    nextErrors.issueCategory = "Please choose what kind of issue you are experiencing.";
  }
  if (data.issueDescription.trim().length < 20) {
    nextErrors.issueDescription =
      "Please describe the issue in at least 20 characters.";
  }
  if (!data.consent) {
    nextErrors.consent = "Please confirm that the information is correct.";
  }

  return nextErrors;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <p id={id} className="mt-2 text-sm font-semibold text-byacre-red" role="alert">
      {message}
    </p>
  );
}

function RequiredMark() {
  return (
    <span className="ml-1 text-byacre-red" aria-hidden="true">
      *
    </span>
  );
}

function formatFileSize(size: number) {
  if (size < 1024 * 1024) return `${Math.max(1, Math.round(size / 1024))} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function isAllowedFile(file: File) {
  return (
    allowedMimeTypes.has(file.type) ||
    /\.(jpe?g|png|heic|pdf)$/i.test(file.name)
  );
}

export function WarrantyClaimForm({
  selectedModel,
  onChangeModel,
}: WarrantyClaimFormProps) {
  const [formData, setFormData] = useState(() => createInitialForm(selectedModel));
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [submitError, setSubmitError] = useState("");
  const [submissionId, setSubmissionId] = useState("");
  const [estimatedResponse, setEstimatedResponse] = useState("");
  const [uploadError, setUploadError] = useState("");
  const statusRef = useRef<HTMLDivElement>(null);
  const requiredFieldsFilled =
    formData.fullName.trim().length > 0 &&
    formData.email.trim().length > 0 &&
    formData.purchaseLocation.trim().length > 0 &&
    Boolean(formData.issueCategory) &&
    formData.issueDescription.trim().length > 0 &&
    formData.consent;

  const clearError = (field: ClaimField) => {
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const updateTextField = (field: TextField, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    if (field in fieldIds) clearError(field as ClaimField);
  };

  const focusFirstError = (nextErrors: FieldErrors) => {
    const firstField = Object.keys(nextErrors)[0] as ClaimField | undefined;
    if (!firstField) return;
    window.requestAnimationFrame(() => {
      document.getElementById(fieldIds[firstField])?.focus();
    });
  };

  const focusStatus = () => {
    window.requestAnimationFrame(() => {
      const statusElement = statusRef.current;
      if (!statusElement) return;
      statusElement.focus({ preventScroll: true });
      statusElement.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    const nextErrors = validateForm(formData);
    setErrors(nextErrors);
    setSubmitError("");
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      focusFirstError(nextErrors);
      return;
    }

    setStatus("submitting");
    try {
      const result = await submitWarrantyClaim({
        ...formData,
        selectedModel: selectedModel.name,
      });
      setSubmissionId(result.claimId);
      setEstimatedResponse(result.estimatedResponse);
      setStatus("success");
      focusStatus();
    } catch {
      setStatus("error");
      setSubmitError(
        "We could not submit your claim just now. Please try again. Your information is still here.",
      );
      focusStatus();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files ?? []);
    event.target.value = "";
    if (selectedFiles.length === 0) return;

    setUploadError("");
    const availableSlots = MAX_FILE_COUNT - formData.attachments.length;
    if (availableSlots <= 0 || selectedFiles.length > availableSlots) {
      setUploadError("You can add up to 5 files.");
    }

    const acceptedFiles = selectedFiles
      .slice(0, Math.max(0, availableSlots))
      .filter((file) => {
        if (!isAllowedFile(file)) {
          setUploadError("That file type is not supported. Please add a JPG, PNG, HEIC, or PDF.");
          return false;
        }
        if (file.size > MAX_FILE_SIZE) {
          setUploadError("This file is larger than 10 MB.");
          return false;
        }
        return true;
      })
      .map((file, index): ClaimAttachment => ({
        id: `${file.name}-${file.lastModified}-${index}`,
        file,
        name: file.name,
        size: file.size,
        type: file.type,
      }));

    if (acceptedFiles.length > 0) {
      setFormData((current) => ({
        ...current,
        attachments: [...current.attachments, ...acceptedFiles],
      }));
    }
  };

  const removeAttachment = (id: string) => {
    setFormData((current) => ({
      ...current,
      attachments: current.attachments.filter((attachment) => attachment.id !== id),
    }));
  };

  const startAnotherClaim = () => {
    setFormData(createInitialForm(selectedModel));
    setErrors({});
    setStatus("idle");
    setSubmitError("");
    setSubmissionId("");
    setEstimatedResponse("");
    setUploadError("");
  };

  if (status === "success") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        className="scroll-mt-40 bg-white p-6 outline-none sm:p-9"
        role="status"
        aria-live="polite"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-byacre-red">
          Claim received
        </p>
        <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[0.05em] text-granite">
          Thank you, {formData.fullName} — your warranty claim has been received.
        </h2>
        <p className="mt-4 text-base leading-7 text-slate">
          We will review your information and contact you if we need anything else.
        </p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <div className="bg-byacre-light-blue p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate">
              Claim reference
            </p>
            <p className="mt-2 text-xl font-bold text-granite">{submissionId}</p>
          </div>
          <div className="bg-byacre-light-blue p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate">
              Estimated response
            </p>
            <p className="mt-2 text-xl font-bold text-granite">{estimatedResponse}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={startAnotherClaim}
          className="font-montserrat mt-8 inline-flex items-center justify-center rounded-2xl border-0 bg-byacre-black px-10 py-4 text-base font-semibold uppercase leading-[1.7] text-white transition-[color] hover:text-byacre-red focus:outline-none focus:ring-4 focus:ring-byacre-red/20"
        >
          Start another claim
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-4 bg-byacre-light-blue p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-white">
            {selectedModel.imageSrc ? (
              <Image
                src={selectedModel.imageSrc}
                alt={selectedModel.imageAlt ?? selectedModel.name}
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
            ) : null}
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
          onClick={onChangeModel}
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
          Add the details below so byACRE can review your claim and help you get moving again.
        </p>
      </div>

      {status === "error" ? (
        <div
          ref={statusRef}
          tabIndex={-1}
          className="mt-6 scroll-mt-40 border-l-4 border-byacre-red bg-pale-rose p-4 text-base leading-7 text-granite outline-none"
          role="alert"
          aria-live="assertive"
        >
          {submitError}
        </div>
      ) : null}

      <form className="mt-8" aria-label="Warranty claim form" noValidate onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-extrabold text-granite" htmlFor="claim-full-name">
            Full name<RequiredMark />
            <input
              id="claim-full-name"
              name="fullName"
              className={`${fieldClass} ${errors.fullName ? errorFieldClass : ""}`}
              type="text"
              value={formData.fullName}
              onChange={(event) => updateTextField("fullName", event.target.value)}
              aria-invalid={Boolean(errors.fullName)}
              aria-required="true"
              aria-describedby={errors.fullName ? "claim-full-name-error" : undefined}
              autoComplete="name"
            />
            <FieldError id="claim-full-name-error" message={errors.fullName} />
          </label>
          <label className="block text-sm font-extrabold text-granite" htmlFor="claim-email">
            Email<RequiredMark />
            <input
              id="claim-email"
              name="email"
              className={`${fieldClass} ${errors.email ? errorFieldClass : ""}`}
              type="email"
              value={formData.email}
              onChange={(event) => updateTextField("email", event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-required="true"
              aria-describedby={errors.email ? "claim-email-error" : undefined}
              autoComplete="email"
            />
            <FieldError id="claim-email-error" message={errors.email} />
          </label>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-extrabold text-granite" htmlFor="claim-phone">
            Phone <span className="font-normal text-slate">(optional)</span>
            <input
              id="claim-phone"
              name="phone"
              className={fieldClass}
              type="tel"
              value={formData.phone}
              onChange={(event) => updateTextField("phone", event.target.value)}
              autoComplete="tel"
            />
          </label>
          <label className="block text-sm font-extrabold text-granite" htmlFor="claim-order-number">
            Order number <span className="font-normal text-slate">(optional)</span>
            <input
              id="claim-order-number"
              name="orderNumber"
              className={fieldClass}
              type="text"
              value={formData.orderNumber}
              onChange={(event) => updateTextField("orderNumber", event.target.value)}
            />
          </label>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-extrabold text-granite" htmlFor="claim-purchase-location">
            Purchase location<RequiredMark />
            <Select
              name="purchaseLocation"
              value={formData.purchaseLocation}
              onValueChange={(value) => updateTextField("purchaseLocation", value)}
            >
              <SelectTrigger
                id="claim-purchase-location"
                className={`${fieldClass} ${errors.purchaseLocation ? errorFieldClass : ""}`}
                aria-invalid={Boolean(errors.purchaseLocation)}
                aria-required="true"
                aria-describedby={errors.purchaseLocation ? "claim-purchase-location-error" : undefined}
              >
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                {purchaseLocations.map((location) => (
                  <SelectItem key={location.value} value={location.value}>
                    {location.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldError id="claim-purchase-location-error" message={errors.purchaseLocation} />
          </label>
          <label className="block text-sm font-extrabold text-granite" htmlFor="claim-purchase-date">
            Date of purchase <span className="font-normal text-slate">(optional)</span>
            <input
              id="claim-purchase-date"
              name="purchaseDate"
              className={fieldClass}
              type="date"
              value={formData.purchaseDate}
              onChange={(event) => updateTextField("purchaseDate", event.target.value)}
            />
          </label>
        </div>

        <label className="mt-5 block text-sm font-extrabold text-granite" htmlFor="claim-serial-number">
          Serial number <span className="font-normal text-slate">(optional)</span>
          <input
            id="claim-serial-number"
            name="serialNumber"
            className={fieldClass}
            type="text"
            value={formData.serialNumber}
            onChange={(event) => updateTextField("serialNumber", event.target.value)}
            placeholder="e.g. BA-2024-000000"
          />
        </label>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-extrabold text-granite" htmlFor="claim-issue-category">
            Issue category<RequiredMark />
            <Select
              name="issueCategory"
              value={formData.issueCategory}
              onValueChange={(value) => {
                setFormData((current) => ({
                  ...current,
                  issueCategory: value as IssueCategory,
                }));
                clearError("issueCategory");
              }}
            >
              <SelectTrigger
                id="claim-issue-category"
                className={`${fieldClass} ${errors.issueCategory ? errorFieldClass : ""}`}
                aria-invalid={Boolean(errors.issueCategory)}
                aria-required="true"
                aria-describedby={errors.issueCategory ? "claim-issue-category-error" : undefined}
              >
                <SelectValue placeholder="Select issue category" />
              </SelectTrigger>
              <SelectContent>
                {issueCategories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldError id="claim-issue-category-error" message={errors.issueCategory} />
          </label>
          <label className="block text-sm font-extrabold text-granite" htmlFor="claim-issue-started">
            When did it start? <span className="font-normal text-slate">(optional)</span>
            <input
              id="claim-issue-started"
              name="issueStartedAt"
              className={fieldClass}
              type="text"
              value={formData.issueStartedAt}
              onChange={(event) => updateTextField("issueStartedAt", event.target.value)}
              placeholder="For example, last week"
            />
          </label>
        </div>

        <label className="mt-6 block text-sm font-extrabold text-granite" htmlFor="claim-issue-description">
          Describe the issue<RequiredMark />
          <textarea
            id="claim-issue-description"
            name="issueDescription"
            className={`${fieldClass} h-auto min-h-36 py-3 ${errors.issueDescription ? errorFieldClass : ""}`}
            value={formData.issueDescription}
            onChange={(event) => updateTextField("issueDescription", event.target.value)}
            aria-invalid={Boolean(errors.issueDescription)}
            aria-required="true"
            aria-describedby={errors.issueDescription ? "claim-issue-description-error" : undefined}
            placeholder="Tell us what happened and what you noticed."
          />
          <FieldError id="claim-issue-description-error" message={errors.issueDescription} />
        </label>

        <div className="mt-6">
          <p className="text-sm font-extrabold text-granite">Photos / proof of purchase</p>
          <label
            htmlFor="claim-photos"
            className="mt-2 flex min-h-32 cursor-pointer flex-col items-center justify-center rounded-[6px] border border-dashed border-border bg-white px-5 text-center transition hover:border-byacre-red focus-within:border-byacre-red"
          >
            <span className="text-base font-bold text-granite">Add photos or proof of purchase</span>
            <span className="mt-2 text-sm text-slate">JPG, PNG, HEIC, or PDF · up to 10 MB each</span>
            <input
              id="claim-photos"
              name="attachments"
              type="file"
              accept=".jpg,.jpeg,.png,.heic,.pdf,image/jpeg,image/png,image/heic,application/pdf"
              multiple
              className="sr-only"
              onChange={handleFileChange}
            />
          </label>
          <p className="mt-2 text-sm leading-6 text-slate">
            {formData.attachments.length === 0
              ? "No photos added yet. Clear photos help us review your claim faster."
              : `${formData.attachments.length} of ${MAX_FILE_COUNT} files added.`}
          </p>
          {uploadError ? (
            <p className="mt-2 text-sm font-semibold text-byacre-red" role="alert">
              {uploadError}
            </p>
          ) : null}
          {formData.attachments.length > 0 ? (
            <ul className="mt-3 space-y-2" aria-label="Selected files">
              {formData.attachments.map((attachment) => (
                <li
                  key={attachment.id}
                  className="flex items-center justify-between gap-4 border border-border bg-white px-4 py-3 text-sm"
                >
                  <span className="min-w-0 truncate text-granite">
                    {attachment.name} <span className="text-slate">({formatFileSize(attachment.size)})</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => removeAttachment(attachment.id)}
                    className="font-montserrat shrink-0 text-xs font-bold uppercase text-granite underline decoration-border underline-offset-4 transition hover:text-byacre-red focus:outline-none focus:ring-2 focus:ring-byacre-red/30"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-slate" htmlFor="claim-consent">
          <input
            id="claim-consent"
            name="consent"
            type="checkbox"
            checked={formData.consent}
            onChange={(event) => {
              setFormData((current) => ({ ...current, consent: event.target.checked }));
              clearError("consent");
            }}
            aria-invalid={Boolean(errors.consent)}
            aria-required="true"
            aria-describedby={errors.consent ? "claim-consent-error" : undefined}
            className="mt-1 h-4 w-4 rounded border-border text-byacre-red focus:ring-byacre-red"
          />
          <span>
            I confirm that the information is correct and agree that byACRE may contact me about this claim.<RequiredMark />
          </span>
        </label>
        <FieldError id="claim-consent-error" message={errors.consent} />

        <button
          type="submit"
          disabled={status === "submitting" || !requiredFieldsFilled}
          className="font-montserrat mt-7 inline-flex items-center justify-center rounded-2xl border-0 bg-byacre-black px-10 py-4 text-base font-semibold uppercase leading-[1.7] text-white transition-[color] hover:text-byacre-red disabled:cursor-not-allowed disabled:bg-byacre-black disabled:text-slate disabled:hover:text-slate focus:outline-none focus:ring-4 focus:ring-byacre-red/20 sm:w-auto"
        >
          {status === "submitting" ? "Submitting claim..." : "Submit warranty claim"}
        </button>
      </form>
    </>
  );
}
