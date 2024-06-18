export interface EducationData {
  id: number;
  created_at: string;
  level: string;
  title: string;
  location: string;
  start_date: string;
  end_date: string;
  description: string;
  link: string;
}

export interface ExperienceData {
  id: number;
  created_at: string;
  title: string;
  company: string;
  location: string;
  start_date: string;
  end_date: string;
  description: string;
  link: string;
}

export interface ResumeTextData {
  id: number;
  created_at: string;
  description: string;
  content: string;
}
