# byACRE Warranty Claim Phase 2 Spec

## Overview

Implement the warranty claim form as a working prototype with client-side validation, local file state, mock submission, and clear UI states.

The focus is on form behavior and status details only:
- Empty states
- Validation errors
- Upload states
- Loading state
- Success confirmation
- Submit error state
- Disabled states

No real backend integration is required.

---

## Requirements

- Convert the claim form into a working client-side form
- Add client-side validation
- Add accessible field-level error messages
- Add local-only file selection state
- Add mock submit behavior
- Show loading state during submission
- Show success confirmation after successful submission
- Show recoverable error state after failed submission
- Keep form data intact after submit error
- Prevent duplicate submissions while loading
- Keep styling true to byACRE:
  - Raleway typography
  - White/light-blue calm surfaces
  - Granite text
  - byACRE red used sparingly
  - Premium, warm, non-clinical tone

---

## Form Fields

### Required

- Selected rollator model
- Full name
- Email
- Purchase location (country dropdown)
- Issue category
- Issue description
- Consent checkbox

### Optional

- Phone
- Order number
- Serial number
- Date of purchase
- Photos / proof of purchase

---

## Field Options

### Issue category

- Brake issue
- Wheel issue
- Frame issue
- Seat or textile issue
- Handle issue
- Shipping damage
- Other

---

## Validation Rules

- Full name is required
- Email is required and must be valid
- Purchase location is required
- Issue category is required
- Issue description is required and must be at least 20 characters
- Consent must be checked

Suggested validation messages:

```txt
Please enter your name.
Please enter a valid email address.
Please choose where you purchased your rollator.
Please choose what kind of issue you are experiencing.
Please describe the issue in at least 20 characters.
Please confirm that the information is correct.
```

---

## Upload State

Add local-only file handling. Files do not need to upload to a server.

Accepted file types:
- JPG
- PNG
- HEIC
- PDF

Limits:
- Maximum 5 files
- Maximum 10 MB per file

### Empty upload state

```txt
No photos added yet.
Clear photos help us review your claim faster.
```

### File selected state

Show:
- File name
- File size
- Remove button

### Upload errors

```txt
That file type is not supported. Please add a JPG, PNG, HEIC, or PDF.
This file is larger than 10 MB.
You can add up to 5 files.
```

---

## Submit States

### Loading

When submit starts:
- Disable submit button
- Prevent duplicate submission
- Keep entered data visible
- Show loading button text

```txt
Submitting claim...
```

### Success

After successful mock submission, show a confirmation panel.

```txt
Thank you - your warranty claim has been received.

Your claim reference is WTY-2026-1048.
We will review your information and contact you if we need anything else.
```

Include:
- Claim reference number
- Estimated response time
- Next steps
- Start another claim button

### Error

If submission fails:
- Keep all form data
- Show a clear recoverable error
- Allow retry

```txt
We could not submit your claim just now.
Please try again. Your information is still here.
```

---

## Mock Submit Behavior

Create a mock submit function.

```ts
export async function submitWarrantyClaim(data: WarrantyClaimForm) {
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
```

Test trigger:

```txt
Use trigger-error in the issue description to test submit error state.
```

---

## Suggested Types

```ts
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
  previewUrl?: string;
}

export interface WarrantyClaimForm {
  selectedModel: string;
  fullName: string;
  email: string;
  phone?: string;
  orderNumber?: string;
  purchaseLocation: string;
  purchaseDate?: string;
  serialNumber?: string;
  issueCategory: IssueCategory | "";
  issueStartedAt?: string;
  issueDescription: string;
  attachments: ClaimAttachment[];
  consent: boolean;
}
```

---

## Accessibility Requirements

- Use real labels for all fields
- Connect field errors with `aria-describedby`
- Add `aria-invalid` to invalid fields
- Use visible focus states
- Use `aria-live` for submit status messages
- Move focus to the first error after failed validation
- Move focus to confirmation after successful submit
- Keep all buttons keyboard-accessible

---

## Suggested Components

```txt
WarrantyClaimForm
FormField
SelectField
RadioCardGroup
PhotoUploadField
FileList
FormStatusMessage
SubmitButton
ClaimConfirmation
```

---

## Acceptance Criteria

- Required fields validate clearly
- Email format validates clearly
- Issue description minimum length validates clearly
- Consent checkbox is required
- Upload area has an empty state
- User can add files locally
- User can remove selected files
- Unsupported file type shows an error
- Too-large file shows an error
- Submit button shows loading state
- Submit button prevents duplicate submissions
- Successful submit shows confirmation with claim reference
- Submit error keeps form data and allows retry
- Status messages are accessible
- Mobile layout remains polished
- No real backend integration is added

---

## Reviewer Test Scenarios

```txt
Happy path:
1. Fill all required fields
2. Add one optional photo
3. Submit
4. Confirm success state and claim reference

Validation path:
1. Submit an empty form
2. Confirm field errors are shown

Upload path:
1. Add a supported file
2. Confirm file appears in the file list
3. Remove the file

Submit error path:
1. Fill all required fields
2. Add trigger-error in the issue description
3. Submit
4. Confirm error appears and form data remains
```

---

## References

- @context/byacre-design-guidelines.md
- @context/project-overview.md
