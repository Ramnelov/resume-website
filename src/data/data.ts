import { supabase } from "~/utils/supabase";
import { EducationData, ResumeTextData } from "./data-types";

/**
 * Fetches education data from the database
 * @returns {Array} - Returns an array of objects containing education data
 */
export async function fetchEducationData(): Promise<EducationData[]> {
  const request = await supabase.from("education").select();
  return request.data as EducationData[];
}

/**
 * Fetches resume text data from the database
 * @returns {Array} - Returns an array of objects containing resume text data
 */
export async function fetchResumeTextData(
  description: string
): Promise<string> {
  const request = await supabase
    .from("resume-text")
    .select("content")
    .eq("description", description);
  return (request.data as ResumeTextData[])?.[0].content;
}
