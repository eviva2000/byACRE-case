# byACRE Warranty Claim UI Phase 1 Spec

## Overview

This is phase 1 for the byACRE warranty claim page UI.

Build a **frontend UI prototype** for the interview case. The goal of this phase is to create the visual structure, brand feel, layout, typography, responsive UI, and a light product-first reveal interaction for the warranty claim page.

Do **not** add real claim-processing functionality in this phase. No form submission, no validation, no API calls, no file upload handling, no multi-step claim workflow, and no working order lookup.

The page should be inspired by Apple Support’s product-first experience: the user first sees a calm support page and chooses their byACRE rollator model before seeing claim details.

## Requirements for phase 1

- Create warranty claim route at `/warranty-claim`
- Build the page UI with limited client-side model selection used only to reveal the form preview
- Use byACRE brand styling:
  - Raleway typography
  - White page background
  - Granite body text
  - Light blue calm sections
  - byACRE red used sparingly for CTA/accent details
  - Generous whitespace
  - Premium, warm, Scandinavian design feel
- Do not make the page look clinical, medical, pitying, or like a generic SaaS support form
- Add responsive layout for desktop, tablet, and mobile
- Add sticky header with byACRE logo, support label, and model navigation
- Add hero section
- Add rollator model selection section with four selectable cards:
  - Carbon Ultralight
  - Carbon Overland
  - Nordic Pioneer
  - Scandinavian Butler
- Add product images for each model from the approved CDN URLs
- Add a small secondary Doric Seat support block
- Add "What happens next" section
- Add warranty claim form preview that is hidden by default and revealed after model selection
- Add static footer/help section
- Use display-only form controls after the form is revealed
- Buttons should have visual states, such as hover/focus styles
- Model buttons/cards should set the currently selected model and reveal the form preview
- The form preview should show the current selected model name at the top
- The form reveal should slide in smoothly under the model section
- No mocked API is required
- No validation is required
- No file upload functionality is required

## Page structure

```txt
/warranty-claim

Header
  byACRE logo
  Support label
  Sticky translucent background
  Navigation link: Choose model

Hero section
  Eyebrow: Warranty support
  Heading: Let us get your rollator moving smoothly again.
  Body: Choose your byACRE rollator model and we will guide you through a clear warranty claim.
  Primary CTA link: Start with your model
  Secondary text link: Need general support?
  Hero product image: Carbon Ultralight

Model selection section
  Section label: Choose your rollator
  Heading: Which model do you need help with?
  Description: Select your model so the claim can be routed with the right product context.
  Four selectable model cards:
    Carbon Ultralight
    Carbon Overland
    Nordic Pioneer
    Scandinavian Butler


Claim form preview
  Hidden by default until the user selects a model
  Slides in smoothly underneath the model cards after selection
  Selected model summary:
    Label: Selected model
    Current selected model name
    Small product thumbnail
  Heading: Warranty claim details
  Body: After choosing a model, customers will add their order details, issue description, photos, and contact information.
  Display-only fields:
    Your name
    Your email
    Serial number
    Where did you purchase your product?
    Date of purchase
    Describe the issue
    Add photos
  Display-only submit button: Submit warranty claim

What happens next section
  Section label: After submission
  Heading: What happens next
  Three steps:
    Review
    Guidance
    Movement
  

Doric Seat support block
  Heading: Need help with Doric Seat?
  Body: This warranty claim flow is currently designed for byACRE rollators. For Doric Seat support, contact byACRE support or start a general support request.
  Display-only link/button: Contact support

Footer/help section
  Small reassurance copy
  Support contact placeholder
```

## Visual direction

The page should feel like a premium product support experience, not a traditional form page.

Use:
- Large calm hero area
- Product-first layout
- Spacious cards
- Wide desktop content with reduced side whitespace
- Clear hierarchy
- Soft borders
- Larger card and panel border radii
- Minimal shadows
- Small red accents
- Light blue panels
- Comfortable font sizes
- Accessible contrast
- Clean mobile stacking

Avoid:
- Heavy dashboard styling
- Dark mode
- Hospital/medical blue-grey styling
- Dense forms at the top of the page
- Too many red areas
- Overly rounded pill UI everywhere
- Small text
- Crowded spacing
- Pitying or medical copy

## Design tokens

Use these tokens in CSS, Panda CSS, Tailwind theme, or global styles.

```css
:root {
  --byacre-black: #000000;
  --byacre-white: #ffffff;
  --byacre-red: #e62d2b;
  --byacre-light-blue: #e0eef5;

  --granite: #3f4040;
  --slate: #707b81;
  --border: #dfe3e6;
  --bg: #ffffff;

  --champagne-gold: #e0ceb5;
  --oyster-white: #e9e6cb;
  --glacier-green: #c7ddd1;
  --pale-rose: #f7e4e7;
  --morning-blue: #bbdce9;
  --royal-blue: #2a2b57;
  --british-racing-green: #323e31;
  --defender-green: #77896f;
  --bentley-brown: #8a796c;
  --rose-gold: #cdb8b9;
}
```

## Typography

Use Raleway only.

Recommended Next.js setup:

```tsx
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
```

Typography requirements:
- Body text minimum 16px
- Body line-height around 1.6-1.8
- Main headings use 800 weight
- Main hero heading uses 58px on larger screens and `text-4xl` on mobile
- Labels and small section titles use uppercase with letter spacing and 600 weight
- Primary CTA labels use 600 weight
- Do not use another typeface

## Static model card content

### Carbon Ultralight

Short description:
> Lightweight everyday rollator with a clean carbon frame.

Badge:
> Lifetime frame warranty

### Carbon Overland

Short description:
> Built for outdoor paths and uneven ground.

Badge:
> Lifetime frame warranty

### Nordic Pioneer

Short description:
> Reliable support for daily movement.

Badge:
> Standard warranty

### Scandinavian Butler

Short description:
> Elegant indoor support for home and hospitality spaces.

Badge:
> Lifetime frame warranty

Mark warranty badges as prototype assumptions in the README if used.

## Claim form reveal and preview fields

The form should be hidden on initial page load. It should be revealed only after the user selects one of the four rollator models.

Reveal behavior:
- Selecting a model card or model button sets the selected model.
- The form slides in smoothly under the model section.
- The top of the form shows the selected model name and a small product thumbnail.
- The user can clear/change the selected model from the form header.
- The form fields remain display-only and do not submit data.

Fields to display:
- Your name
- Your email
- Serial number
- Where did you purchase your product?
- Date of purchase
- Describe the issue
- Add photos

Serial number helper text:
> You can find the serial number on the rollator frame under the right rear wheel. It is written on a white sticker with a small QR code beside it.

Consent checkbox copy:
> I confirm that the information is correct and agree that byACRE may contact me about this claim.

Display-only button:
> Submit warranty claim

## Responsive requirements

### Desktop

- Main header, hero, and model card content can use a wider max width around 88rem
- Hero can use two columns if useful
- Model cards can be 4 columns or 2x2 grid
- Form preview should reveal beneath the model cards with a centered max width

### Tablet

- Model cards should become 2 columns
- Maintain generous spacing

### Mobile

- Everything stacks in one column
- Model cards become full-width
- Buttons become full-width if appropriate
- Form fields are full-width
- Keep tap targets comfortable
- Avoid horizontal scrolling

## Accessibility requirements

Even though this phase does not submit data, the UI should still be accessible.

- Use semantic HTML sections
- Use real labels for form fields
- Buttons should be buttons or links, not divs
- Cards should have clear headings
- Model selection buttons should expose selected state where appropriate
- Hidden form content should not be presented as visible content before model selection
- Ensure readable contrast
- Ensure visible focus styles
- Body text should be at least 16px
- Avoid relying on color alone for meaning

## Suggested components

```txt
WarrantyClaimPage
  ClaimHeader
  ClaimHero
  ModelSelection
  ModelCard
  ClaimFormPreview
  WhatHappensNext
  DoricSeatSupportBlock
  ClaimFooter
```

Keep components small and focused on UI.

## Suggested file structure

```txt
app/
  warranty-claim/
    page.tsx

features/
  warranty-claim/
    components/
      ClaimHeader.tsx
      ClaimHero.tsx
      ModelSelection.tsx
      ModelCard.tsx
      ClaimFormPreview.tsx
      WhatHappensNext.tsx
      DoricSeatSupportBlock.tsx
      ClaimFooter.tsx
    data/
      rollatorModels.ts
    styles/
      warranty-claim.css
```

Adjust the structure to match the project conventions.

## Out of scope for phase 1

Do not implement:
- Multi-step claim logic
- Form data state beyond selected model display
- Form validation
- Order lookup
- API calls
- Mock API calls
- File upload behavior
- Submit behavior
- Confirmation screen
- Error states
- Loading states
- Back-office UI
- Real Business Central integration
- Real Magento or Amazon integration

These can be added in later phases.

## Acceptance criteria

Phase 1 is complete when:

- `/warranty-claim` route exists
- Page loads without runtime errors
- UI is a frontend prototype with model selection used only to reveal the claim form preview
- Header, hero, model cards, What happens next, Doric Seat support block, and footer are visible
- All four rollator models are displayed
- Form preview is hidden on initial load
- Selecting a model reveals the form preview smoothly beneath the model section
- Revealed form preview shows the selected model name at the top
- Page feels complete on first load
- Page does not show a functional multi-step flow
- Page does not perform any API or form actions
- Layout is responsive on mobile, tablet, and desktop
- Raleway is used consistently
- byACRE brand colors are used correctly
- Red is used sparingly
- Light blue surfaces feel calm, not medical
- Copy is warm, confident, and non-pitying
- Code is componentized and readable

## References

- @context/byacre-design-guidelines.md
- @context/screenshots/byacre-prot1.png
- @context/screenshots/byacre-prot2.png
