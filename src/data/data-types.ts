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

export interface TextData {
  [description: string]: string
}

export interface LinkData {
  [description: string]: string
}

export interface ResumeDataResponse {
  id: number
  created_at: string
  data: ResumeData
}

export interface ResumeData {
  links: LinkData
  texts: TextData
  education: EducationData[]
  experience: ExperienceData[]
}
