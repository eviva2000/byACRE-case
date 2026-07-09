# Current Feature

## Status

Not Started


## Goals

- Build the static Phase 1 warranty claim page UI from `@context/feature/page-ui-spec.md`.
- Create the `/warranty-claim` route.
- Add a premium, accessible, product-led byACRE warranty support experience.
- Include a static header, hero, rollator model cards, "What you'll need", "What happens next", Doric Seat support block, form preview, and footer/help section.
- Use Raleway typography and byACRE brand colors from `@context/byacre-design-guidelines.md`.
- Make the page responsive across mobile, tablet, and desktop.

## Notes

- Active spec: `@context/feature/page-ui-spec.md`.
- Supporting context: `@context/project-overview.md`, `@context/byacre-design-guidelines.md`, `@context/screenshots/byacre-prot1.png`, and `@context/screenshots/byacre-prot2.png`.
- Phase 1 is display-only. Do not add form submission, validation, API calls, mocked API calls, file upload behavior, product selection behavior, active selected state, multi-step logic, loading states, error states, or confirmation screens.
- Follow Tailwind CSS v4 rules from `@context/coding-standards.md`; do not add a JavaScript Tailwind config.
- Keep components focused and readable. Server components by default; only use client components if required.

## History

- Loaded `page-ui-spec.md` as the active feature scope.
