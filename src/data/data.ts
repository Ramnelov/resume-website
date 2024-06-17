import educationData from "~/data/education.json";
import type { EducationData } from "~/data/data-types";

/**
 * Placeholder function to fetch education data
 * @returns {Array} - Returns an array of objects containing education data
 */
export function fetchEducationData(): Array<EducationData> {
  return educationData;
}
