# Current Feature: Standardize Warranty Page Section Spacing

## Status

In Progress


## Goals

- Give the hero, models, "What happens next", and Dorica Seat sections the same vertical padding at each breakpoint.
- Keep equal top and bottom whitespace within each section.
- Style the hero primary CTA with a black background and red text on hover.
- Style the hero primary CTA with uppercase semibold text, `1rem 2.5rem` padding, a `1rem` radius, `1.7` line height, and no border.
- Match the form submit button to the hero primary CTA styling.
- Display every visible button and button-style action label in uppercase.
- Set the hero heading letter spacing to `0.05em`.
- Use Montserrat for CTA and action-button text.
- Use Montserrat for the header's "Choose your model" action.
- Rebuild the header to match the supplied byACRE navigation reference, including grouped navigation, separators, locale, and cart controls.
- Keep the reference header controls presentational and provide a compact mobile menu treatment.
- Remove the light-blue space above the header.
- Remove border radii from the model cards and hero image background.
- Remove border radii from the form card, form container, and Dorica Seat support panel.
- Style each model-card action as a full-width black footer bar based on the supplied reference.
- Reveal the claim form directly below the selected model card on mobile while keeping it after all cards on desktop.
- Reduce the selected-model label and model-name font sizes on mobile.
- Reduce the font weight of the "Warranty claim details" heading.
- Set the model-selection heading letter spacing to `0.05em`.
- Add subtle transparency and backdrop blur to the sticky header.
- Smoothly animate the claim form's layout height, opacity, and vertical position when it opens.
- Reduce the weight of form placeholders.
- Preserve the section's existing responsive layout and visual styling.

## Notes

- Use the models section's existing responsive padding scale as the shared section rhythm.
- Keep button, badge, form-control, and selected-model summary radii unchanged.
- Apply the smallest responsive spacing changes needed to the existing warranty claim UI.
- Reuse the existing byACRE logo asset and CSS-drawn/SVG interface icons.
- Keep model selection behavior and a visible selected state in the redesigned card actions.
- Use one responsive form instance and replay its clipped `max-height`, opacity, and vertical-position animation when the selected model changes.

## History

- Loaded `page-ui-spec.md` as the active feature scope.
- Completed warranty claim page UI: created `/warranty-claim` with sticky byACRE header, hero, CDN product imagery, selectable rollator cards, smooth selected-model form reveal, "What happens next", Doric Seat support, footer/help content, Tailwind v4 brand tokens, and updated Phase 1 spec.
