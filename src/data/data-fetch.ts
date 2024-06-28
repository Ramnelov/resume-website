import { supabase } from '~/utils/supabase'
import { ResumeData, ResumeDataResponse } from '~/data/data-types'

/**
 * Fetches resume data from the database
 * @returns {Promise<ResumeData>} - The resume data
 */
export async function fetchResumeData(): Promise<ResumeData> {
  const request = await supabase.from('documents').select('data').eq('descriptor', 'resume-data')

  if (request.error) {
    console.log(request.error)
    throw new Error(request.error.message)
  }

  return (request.data as ResumeDataResponse[])?.[0].data
}
