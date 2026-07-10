# Current Feature: Default Form and Responsive Reveal Behavior

## Status

In Progress


## Goals

- Keep the warranty form visible by default instead of hiding it behind a reveal state on desktop.
- Use Carbon Ultralight as the default selected model.
- Preserve the form reveal effect on mobile when a card is selected.
- When a model card is selected on desktop, scroll the user to the visible form.
- Keep the form visible when “Change model” is clicked and scroll back to the models section.

## Notes

- Desktop should show the form below the model cards without an entrance animation.
- Mobile should keep the selected-card placement and slide-in behavior for the form.
- The card selection interaction should update the selected model before scrolling to the form on desktop.
- “Change model” should only navigate to the model cards and must not clear the selected form.

## History

- Loaded `page-ui-spec.md` as the active feature scope.
- Completed warranty claim page UI: created `/warranty-claim` with sticky byACRE header, hero, CDN product imagery, selectable rollator cards, smooth selected-model form reveal, "What happens next", Doric Seat support, footer/help content, Tailwind v4 brand tokens, and updated Phase 1 spec.
