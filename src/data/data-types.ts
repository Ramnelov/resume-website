export interface EducationData {
  id: number;
  created_at: string;
  level: string;
  title: string;
  location: string;
  start_date: string;
  end_date: string | null;
  description: string;
  link: string | null;
}

export interface ExperienceData {
  id: number;
  created_at: string;
  company: string;
  role: string;
  location: string;
  start_date: string;
  end_date: string | null;
  description: string;
  link: string | null;
}

export interface ResumeTextData {
  id: number;
  created_at: string;
  description: string;
  content: string;
}

export interface LinkData {
  id: number;
  created_at: string;
  description: string;
  link: string;
}
