# byACRE Warranty Claim UI Phase 1 Spec

## Overview

This is phase 1 for the byACRE warranty claim page UI.

Build a **static, display-only** page for the interview case. The goal of this phase is to create the visual structure, brand feel, layout, typography, and responsive UI for the warranty claim page.

Do **not** add real functionality in this phase. No form submission, no validation, no API calls, no file upload handling, no multi-step state logic, and no working order lookup.

The page should be inspired by Apple Support’s product-first experience: the user first sees a calm support page and chooses their byACRE rollator model before seeing claim details.

## Requirements for phase 1

- Create warranty claim route at `/warranty-claim`
- Build static page UI only
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
- Add static header
- Add hero section
- Add rollator model selection section with four display-only cards:
  - Carbon Ultralight
  - Carbon Overland
  - Nordic Pioneer
  - Scandinavian Butler
- Add product images or clean image placeholders for each model
- Add a small secondary Doric Seat support block
- Add "What you'll need" section
- Add "What happens next" section
- Add static warranty claim form preview section
- Add static footer/help section
- Use display-only buttons and form controls
- Buttons should have visual states only if easy to add with CSS, such as hover/focus styles
- No click behavior is required
- No JavaScript state is required
- No mocked API is required
- No validation is required
- No file upload functionality is required

## Page structure

```txt
/warranty-claim

Header
  byACRE logo / wordmark placeholder
  Small support label or navigation text

Hero section
  Eyebrow: Warranty support
  Heading: Let us get your rollator moving smoothly again.
  Body: Choose your byACRE rollator model and we will guide you through a clear warranty claim.
  Primary display-only CTA: Start with your model
  Secondary text link: Need general support?

Model selection section
  Section label: Choose your rollator
  Heading: Which model do you need help with?
  Description: Select your model so the claim can be routed with the right product context.
  Four model cards:
    Carbon Ultralight
    Carbon Overland
    Nordic Pioneer
    Scandinavian Butler

What you'll need section
  Three cards:
    Serial number
    Purchase date or order number
    Photos or short video of the issue

What happens next section
  Four static steps:
    1. Choose your model
    2. Tell us what happened
    3. Add photos
    4. Submit your claim

Doric Seat support block
  Heading: Need help with Doric Seat?
  Body: This warranty claim flow is currently designed for byACRE rollators. For Doric Seat support, contact byACRE support or start a general support request.
  Display-only link/button: Contact support

Static claim form preview
  Heading: Warranty claim details
  Body: After choosing a model, customers will add their order details, issue description, photos, and contact information.
  Static fields:
    Your name
    Your email
    Serial number
    Where did you purchase your product?
    Date of purchase
    Describe the issue
    Add photos
  Display-only submit button: Submit warranty claim

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
- Clear hierarchy
- Soft borders
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
- Labels and small section titles use uppercase with letter spacing
- Buttons use 700 or 800 weight
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

## Static form preview fields

This phase should show the form visually, but the fields do not need to work.

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

- Max content width around 1120-1200px
- Hero can use two columns if useful
- Model cards can be 4 columns or 2x2 grid
- "What you'll need" cards can be 3 columns
- Form preview can sit beside a help panel or use a centered max width

### Tablet

- Model cards should become 2 columns
- Info cards can become 2 columns or stack
- Maintain generous spacing

### Mobile

- Everything stacks in one column
- Model cards become full-width
- Buttons become full-width if appropriate
- Form fields are full-width
- Keep tap targets comfortable
- Avoid horizontal scrolling

## Accessibility requirements

Even though this phase is display-only, the UI should still be accessible.

- Use semantic HTML sections
- Use real labels for form fields
- Buttons should be buttons or links, not divs
- Cards should have clear headings
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
  WhatYouNeed
  WhatHappensNext
  DoricSeatSupportBlock
  ClaimFormPreview
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
      WhatYouNeed.tsx
      WhatHappensNext.tsx
      DoricSeatSupportBlock.tsx
      ClaimFormPreview.tsx
      ClaimFooter.tsx
    data/
      rollatorModels.ts
    styles/
      warranty-claim.css
```

Adjust the structure to match the project conventions.

## Out of scope for phase 1

Do not implement:
- Multi-step logic
- Product selection behavior
- Active selected state
- Form state
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
- UI is static and display-only
- Header, hero, model cards, info sections, Doric Seat support block, form preview, and footer are visible
- All four rollator models are displayed
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
