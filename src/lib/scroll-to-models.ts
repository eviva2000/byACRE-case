export function scrollToModelsSection() {
  if (typeof window === "undefined") return;

  const modelsSection = document.getElementById("models");
  if (!modelsSection) return;

  const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
  const sectionPaddingTop = Number.parseFloat(
    window.getComputedStyle(modelsSection).paddingTop,
  ) || 0;
  const targetOffset = Math.max(0, headerHeight - sectionPaddingTop + 16);
  const targetTop =
    modelsSection.getBoundingClientRect().top + window.scrollY - targetOffset;

  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: "smooth",
  });
}
