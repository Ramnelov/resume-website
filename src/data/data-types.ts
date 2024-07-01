export interface EducationData {
  link: string | null
  level: string
  title: string
  end_date: string | null
  location: string
  start_date: string
  description: string
}

export interface ExperienceData {
  link: string | null
  role: string
  company: string
  end_date: string | null
  location: string
  start_date: string
  description: string
}

export interface ProjectsData {
  link: string | null
  title: string
  end_date: string | null
  start_date: string
  description: string
}

export interface TextData {
  [description: string]: string
}

export interface LinkData {
  [description: string]: string
}

export interface ResumeData {
  links: LinkData
  texts: TextData
  education: EducationData[]
  experience: ExperienceData[]
  projects: ProjectsData[]
}
