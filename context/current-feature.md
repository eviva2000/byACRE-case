# Current Feature: Implement Warranty Claim Phase 2 Form

## Status

In Progress


## Goals

- Convert the static warranty claim preview into a working client-side form.
- Validate required fields, email format, issue description length, and consent with accessible field errors.
- Keep purchase location as a required country dropdown with an issue category field.
- Add local-only photo selection, validation, file listing, and removal states.
- Add mock submission loading, success, recoverable error, and disabled states.
- Keep the submit button disabled until all required fields are filled; validate field formats on submit.
- Preserve entered form data after submission errors and prevent duplicate submissions while loading.
- Keep the mobile layout polished and aligned with the byACRE visual system.
- Use React 19's `SubmitEvent<HTMLFormElement>` type for form submission handling.

## Notes

- No real backend integration is required.
- Uploads accept JPG, PNG, HEIC, and PDF files, with a maximum of five files and 10 MB per file.
- Use `trigger-error` in the issue description to exercise the mock submit error state.
- Move focus to the first validation error or success confirmation and announce status changes accessibly.

## History

- Loaded `page-ui-spec.md` as the active feature scope.
- Completed warranty claim page UI: created `/warranty-claim` with sticky byACRE header, hero, CDN product imagery, selectable rollator cards, smooth selected-model form reveal, "What happens next", Doric Seat support, footer/help content, Tailwind v4 brand tokens, and updated Phase 1 spec.
- Completed default form and responsive reveal behavior: Carbon Ultralight is selected by default, desktop keeps the form visible without entrance animation and scrolls to it after card selection, mobile keeps card-local reveal behavior, and “Change model” scrolls to the model cards without hiding the form.
