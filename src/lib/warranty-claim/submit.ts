import type {
  ClaimSubmissionResult,
  WarrantyClaimFormData,
} from "@/types/warranty-claim";

export async function submitWarrantyClaim(
  data: WarrantyClaimFormData,
): Promise<ClaimSubmissionResult> {
  await new Promise((resolve) => setTimeout(resolve, 1200));

  if (data.issueDescription.toLowerCase().includes("trigger-error")) {
    throw new Error("SUBMIT_FAILED");
  }

  return {
    claimId: "WTY-2026-1048",
    submittedAt: new Date().toISOString(),
    estimatedResponse: "2-3 business days",
  };
}
