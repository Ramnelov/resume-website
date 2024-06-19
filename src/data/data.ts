import { supabase } from "~/utils/supabase";
import {
  EducationData,
  ExperienceData,
  LinkData,
  ResumeTextData,
} from "./data-types";

/**
 * Fetches education data from the database
 * @returns {Array} - Returns an array of objects containing education data
 */
export async function fetchEducationData(): Promise<EducationData[]> {
  const request = await supabase.from("education").select();

  return request.data as EducationData[];
}

/**
 * Fetches experience data from the database
 * @returns {Array} - Returns an array of objects containing experience data
 */
export async function fetchExperienceData(): Promise<ExperienceData[]> {
  const request = await supabase.from("experience").select();
  return request.data as ExperienceData[];
}

/**
 * Fetches resume text data from the database
 * @returns {string} - Returns an array of objects containing resume text data
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

/**
 * Fetches resume text data from the database
 * @returns {string} - Returns an array of objects containing resume text data
 */
export async function fetchImageLinkData(description: string): Promise<string> {
  const request = await supabase
    .from("image-links")
    .select("link")
    .eq("description", description);
  return (request.data as LinkData[])?.[0].link;
}

/**
 * Fetches resume text data from the database
 * @returns {string} - Returns an array of objects containing resume text data
 */
export async function fetchLinkData(description: string): Promise<string> {
  const request = await supabase
    .from("links")
    .select("link")
    .eq("description", description);
  return (request.data as LinkData[])?.[0].link;
}
