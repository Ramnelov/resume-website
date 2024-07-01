import { supabase } from '~/utils/supabase'

/**
 * Fetches resume data from the database
 * @returns the resume data
 */
export async function fetchResumeData() {
  const { data, error } = await supabase
    .from('documents')
    .select('data')
    .eq('descriptor', 'resume-data')

  if (error) {
    throw new Error(error.message)
  }

  return data?.[0].data
}

/**
 * Fetches an image from the database
 * @param image - the image to fetch
 * @returns the public URL of the image
 */
export async function fetchImageUrl(image: string) {
  const { data, error } = await supabase.storage.from('images').download(image)

  if (error) {
    throw new Error(error.message)
  }

  return URL.createObjectURL(data)
}
