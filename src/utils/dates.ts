/**
 * Formats a date string to a human-readable format.
 * @param date - The date string to format.
 * @returns date - The formatted date string.
 */
export function formatDate(date: string): string {
  const dateObj = new Date(date);
  const currentDate = new Date();

  if (dateObj > currentDate) {
    return "Present.";
  }

  return dateObj
    .toLocaleDateString("en-US", { month: "short", year: "numeric" })
    .replace(" ", ". ");
}

/**
 * Sorts an array of objects by date.
 * @param a - The first object to compare.
 * @param b - The second object to compare.
 * @returns number - The comparison value.
 */
export function sortByDate(
  a: { end_date: string; start_date: string },
  b: { end_date: string; start_date: string }
): number {
  const endDateA = new Date(a.end_date).getTime();
  const endDateB = new Date(b.end_date).getTime();
  const startDateA = new Date(a.start_date).getTime();
  const startDateB = new Date(b.start_date).getTime();

  if (endDateA > endDateB) return -1;
  if (endDateA < endDateB) return 1;

  if (startDateA > startDateB) return -1;
  if (startDateA < startDateB) return 1;

  return 0;
}
