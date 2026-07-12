# byACRE Warranty Claim Prototype

A product-led warranty claim experience for byACRE rollator owners. The
prototype guides a customer from model selection through claim details, local
attachments, validation, and a simulated confirmation state.

## Current status

The main experience is available at [`/warranty-claim`](http://localhost:3000/warranty-claim).
The root route is currently a minimal placeholder.

Implemented so far:

- Responsive byACRE-styled page with an English desktop header, hero, support
  content, and footer.
- Product-first selection for Carbon Ultralight, Carbon Overland, Nordic
  Pioneer, and Scandinavian Butler.
- Carbon Ultralight selected by default, with smooth scrolling between the
  model cards and the claim form.
- Warranty claim form covering customer, purchase, product, and issue details.
- Accessible client-side validation with field-level errors, focus management,
  required-field handling, and submission status announcements.
- Country and issue-category select controls built with Radix UI.
- Optional local attachments for JPG, PNG, HEIC, and PDF files, limited to five
  files and 10 MB per file.
- Simulated loading, error, and personalized success states with a claim
  reference and estimated response time.
- Responsive layouts for desktop and mobile, including the model-selection and
  form reveal behavior.
- A secondary support path for Dorica Seat customers.

## Prototype behavior and limitations

This repository is a frontend prototype. It does not currently include real
authentication, persistent storage, file uploads, email delivery, or backend
integrations.

- Claim submission is simulated in `src/lib/warranty-claim/submit.ts` and does
  not send customer data anywhere.
- Selected attachments remain in browser memory and are not uploaded.
- The returned claim reference and response estimate are mock values.
- Warranty badges on model cards are static prototype assumptions and must be
  confirmed before production use.
- Header navigation controls are presentational; the mobile menu and destination
  pages are not implemented yet.
- Product images are loaded from an approved remote Cloudflare R2 source.

## Tech stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI Select
- ESLint

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000/warranty-claim](http://localhost:3000/warranty-claim).

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server on port 3000 |
| `npm run lint` | Run ESLint |
| `npm run build` | Create and validate a production build |
| `npm run start` | Serve the production build |

There is currently no automated test script configured in `package.json`.

## Project structure

```text
src/
├── app/
│   ├── globals.css                  # Brand tokens and global styles
│   └── warranty-claim/page.tsx      # Warranty claim route and page shell
├── components/
│   ├── ui/select.tsx                # Reusable Radix Select wrapper
│   └── warranty-claim/              # Model flow, form, and scroll controls
├── lib/
│   ├── scroll-to-models.ts          # Header-aware smooth scrolling
│   └── warranty-claim/submit.ts     # Mock claim submission
└── types/warranty-claim.ts          # Claim and product data types
```

Project context, feature history, design guidance, and implementation specs are
kept in the [`context`](./context) directory.
