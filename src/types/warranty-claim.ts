export interface ModelCard {
  name: string;
  description: string;
  badge: string;
  accentClass: string;
  imageSrc?: string;
  imageAlt?: string;
}

export type IssueCategory =
  | "brake"
  | "wheel"
  | "frame"
  | "seat_or_textile"
  | "handle"
  | "shipping_damage"
  | "other";

export interface ClaimAttachment {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
}

export interface WarrantyClaimFormData {
  selectedModel: string;
  fullName: string;
  email: string;
  phone: string;
  orderNumber: string;
  purchaseLocation: string;
  purchaseDate: string;
  serialNumber: string;
  issueCategory: IssueCategory | "";
  issueStartedAt: string;
  issueDescription: string;
  attachments: ClaimAttachment[];
  consent: boolean;
}

export interface ClaimSubmissionResult {
  claimId: string;
  submittedAt: string;
  estimatedResponse: string;
}
