# byACRE Warranty Claim Project Overview

> **Product-led warranty claim prototype** for a premium byACRE customer portal experience.

---

## 1. Product Summary

The **byACRE Warranty Claim** project is a working frontend prototype for a customer-facing warranty claim page.

The page helps byACRE customers submit a warranty claim for their rollator through a calm, guided, product-first experience. 

The UI should refer to the provided page screenshot as the main visual reference. Customers should first see a calm, product-led warranty page, then continue into a guided claim flow after choosing the relevant rollator model.

The prototype should demonstrate:
- Strong frontend craft.
- Brand fidelity to byACRE.
- Clear UX judgment.
- Mobile responsiveness.
- Accessible form design.
- Thoughtful handling of empty, loading, error, disabled, and success states in later phases.

---

## 2. Core Problem

byACRE wants to improve after-sales self-service for customers worldwide.

Today, after-sales work is spread across:
- Outsourced agency workflows.
- Email.
- Amazon.
- Phone support.
- Manual internal processes.

This creates friction for both customers and the internal team:
- Customers may not know where to go for help.
- Warranty claims may arrive with incomplete information.
- Support teams may need several follow-up emails.
- Product, order, and warranty data may be fragmented.
- The service experience may not fully match byACRE's premium brand.

The prototype solves the first customer-facing part of this problem: it gives customers a clear, guided way to start a warranty claim.

---

## 3. Project Goal

Create a premium, accessible, product-led **Warranty Claim** page for byACRE rollators.

The page should:
- Feel calm, spacious, and design-led.
- Avoid a clinical or medical look.
- Help customers choose their rollator model first.
- Guide customers through the information byACRE needs.
- Make the first screen feel complete without showing a long form immediately.
- Be realistic enough that it could later connect to production systems.

---

## 4. Product Scope

### In scope

This project focuses on **rollator warranty claims**.

Rollator models:
- Carbon Ultralight.
- Carbon Overland.
- Nordic Pioneer.
- Scandinavian Butler.

### Secondary product acknowledgement

byACRE also has **Dorica Seat**. In this prototype, Doric Seat should be acknowledged as a secondary support path, but not built as a full warranty claim flow unless the warranty process is confirmed.

Suggested copy:

> Need help with Doric Seat?  
> This warranty claim flow is currently designed for byACRE rollators. For Doric Seat support, contact byACRE support or start a general support request.

### Out of scope

- Full customer portal.
- Returns flow.
- General support flow.
- Back-office claim management.
- Real authentication.
- Real Business Central integration.
- Real Magento integration.
- Real Amazon integration.
- Real file upload storage.
- Real email sending.

---

## 5. Target Users

| Persona | Description | Main Needs |
|---|---|---|
| byACRE Customer | A person who owns a byACRE rollator and needs warranty help | Clear guidance, reassurance, simple claim submission |
| Caregiver / Family Member | Someone helping a byACRE customer submit a claim | Easy language, accessible layout, low-friction form |
| Customer Service Team | Internal byACRE team reviewing submitted claims later | Structured claim data, product context, photos, order details |
| IT / NewTech Team | Internal team building the portal and integrations | Scalable frontend structure, clear data contracts, future integration path |

---

## 6. Product Positioning

**One-line pitch:**

> A calm, product-led warranty claim experience for byACRE rollator customers.

**Possible tagline:**

> Let's get your rollator moving smoothly again.

**UI references:**

- Refer to the provided screenshot for the page UI direction and first-load structure.
- Use byACRE.com for brand fidelity, typography, spacing, and tone.
- Use the existing byACRE warranty registration page for warranty-specific data points.
- Keep the experience premium, calm, spacious, and product-led.

---

## 7. Brand Principles

byACRE is a Danish design company making premium mobility aids. The brand aims to destigmatize mobility aids and speak to empowered people, not patients.

The page should feel:
- Premium.
- Warm.
- Human.
- Calm.
- Spacious.
- Design-led.
- Scandinavian.
- Accessible without looking patronizing.

The page should never feel:
- Clinical.
- Medical.
- Pitying.
- Bureaucratic.
- Like an insurance form.
- Like a generic SaaS dashboard.

---

## 8. Design System Direction

### Colors

Use the byACRE design tokens:

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

### Color usage

- White: main page background.
- Granite: default text.
- Slate: secondary text.
- Light blue: calm hero sections, panels, and callouts.
- byACRE red: primary CTAs and small accents only.
- Secondary colors: optional badges, illustrations, or subtle product accents.

### Typography

Use **Raleway** only.

Recommended Next.js setup:

```tsx
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
```

Typography rules:
- 400 for body text.
- 500-600 for labels and subheadings.
- 700 for emphasis.
- 800 for main headings.
- 900 for badges or strong status labels.
- Body text should be at least 16px.
- Body line-height should be around 1.6-1.8.
- Small labels can use uppercase and letter spacing.

---

## 9. Core UX Concepts

### 9.1 Product-first support

The first decision should be product/model selection, not a long form.

The first screen should answer:
- What is this page for?
- Which product do I need help with?


### 9.2 Progressive disclosure

Do not show all form fields immediately.

Recommended flow:
1. Choose rollator model.
2. Add product and issue details.
3. Add photos.
4. Review and submit.
5. Confirmation.

### 9.3 Guided claim submission

Customers should feel guided through a short process, not dropped into a support-ticket form.

### 9.4 Accessibility as brand quality

The page should be easy to read and use for older adults and caregivers without looking medical or patronizing.

---


## 10. Feature Breakdown

### 10.1 Model Selection

Show four rollator models:

| Model | Description | Optional Badge |
|---|---|---|
| Carbon Ultralight | Lightweight everyday rollator with a clean carbon frame | Lifetime frame warranty |
| Carbon Overland | Built for outdoor paths and uneven ground | Lifetime frame warranty |
| Nordic Pioneer | Reliable support for daily movement | Standard warranty |
| Scandinavian Butler | Elegant indoor support for home and hospitality spaces | Lifetime frame warranty |



### 10.2 Order Details

Fields:
- Order number.
- Email address.
- Purchase location.
- Purchase date.


### 10.3 Product and Issue Details

Fields:
- Serial number.
- Issue category.
- Date issue started.
- Safety status.
- Issue description.

Issue categories:
- Brake issue.
- Wheel issue.
- Frame issue.
- Seat or textile issue.
- Handle issue.
- Shipping damage.
- Other.

Safety statuses:
- Yes, it can still be used safely.
- No, it should not be used.
- I am not sure.

### 10.4 Photo Upload

Fields:
- Issue photos.
- Optional proof of purchase.

Accepted files:
- JPG.
- PNG.
- HEIC.
- PDF for proof of purchase.

Prototype limits:
- Maximum 5 issue photos.
- Maximum 10 MB per file.

### 10.5 Contact and Review

Fields:
- Full name.
- Email.
- Phone, optional.
- Country.
- Preferred contact method.
- Consent checkbox.

Review summary:
- Selected model.
- Order details.
- Product details.
- Issue details.
- Uploaded files.
- Contact details.

---

## 11. User Experience

### 11.1 First Load Layout

```text
+-------------------------------------------------------+
| Header: byACRE / Warranty support                     |
+-------------------------------------------------------+
| Hero                                                  |
| - Warranty support                                    |
| - Let us get your rollator moving smoothly again.     |
| - Short explanation                                   |
+-------------------------------------------------------+
| Choose your rollator                                  |
| [Carbon Ultralight] [Carbon Overland]                 |
| [Nordic Pioneer]    [Scandinavian Butler]             |
+-------------------------------------------------------+
| Static claim form preview                             |
+-------------------------------------------------------+
| Dorica Seat support block                             |
+-------------------------------------------------------+
| Footer/help                                           |
+-------------------------------------------------------+
```

### 11.2 Interactive Flow Layout

```text
+-------------------------------------------------------+
| Header                                                |
+-------------------------------------------------------+
| Selected model summary                                |
| Warranty claim for Carbon Ultralight                  |
| Change model                                          |
+-------------------------------------------------------+
| Stepper                                               |
| 1 Order -> 2 Issue -> 3 Photos -> 4 Review            |
+----------------------+--------------------------------+
| Main form             | Support / help panel           |
|                       |                                |
| Current step fields   | What you need / reassurance    |
|                       |                                |
+----------------------+--------------------------------+
```

### 11.3 Responsive Behavior

Mobile:
- Single-column layout.
- Model cards stack vertically.
- Full-width buttons.
- Full-width form fields.
- Compact stepper.
- No horizontal scrolling.

Tablet:
- Two-column model grid.
- Form remains centered and readable.
- Info cards can use two columns or stack.

Desktop:
- Four cards in one row or two-by-two grid.
- Form can sit beside a support panel.
- Max content width around 1120-1200px.

---

## 12. Suggested Navigation Structure

| Route | Purpose |
|---|---|
| `/` | Optional landing/home page |
| `/warranty-claim` | Main warranty claim page |
| `/warranty-claim/success` | Optional separate confirmation route |
| `/support` | Optional future general support page |
| `/portal` | Optional future customer portal dashboard |
| `/portal/claims/[id]` | Optional future claim status page |

For this prototype, only `/warranty-claim` is required.

---

## 13. Technical Stack

| Category | Choice |
|---|---|
| Framework | Next.js with App Router |
| Language | TypeScript |
| UI styling | Tailwind CSS |
| Forms | React Hook Form or controlled React state |
| Validation | Zod, if time allows |
| Icons | lucide-react or inline SVG |
| Deployment | Vercel |
| Data | Local mock data |
| APIs | Mock async functions only |
| Auth | Out of scope |
| Database | Out of scope |
| ERP | Business Central future integration, out of scope |

---


## 14. Mock API Behavior

For later prototype phases, use mock async functions.

### Order lookup

```txt
BYA-1001 -> order found
BYA-404  -> order not found
BYA-500  -> server error
```

Successful mock order:

```ts
{
  orderNumber: "BYA-1001",
  email: "customer@example.com",
  source: "byacre_webshop",
  model: "carbon-ultralight",
  productName: "Carbon Ultralight",
  variant: "Nordic Grey",
  purchaseDate: "2025-03-12",
  warrantyStatus: "covered"
}
```

---

## 15. References

- `@context/byacre-design-guidelines.md`
- `@context/page-ui-spec.md`

