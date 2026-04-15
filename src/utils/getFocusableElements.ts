export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      `
      a[href],
      button:not([disabled]),
      textarea,
      input,
      select,
      [tabindex]:not([tabindex="-1"])
    `,
    ),
  );
}
