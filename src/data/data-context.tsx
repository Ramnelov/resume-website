import { createContext, useContext } from 'solid-js'
import type { Resource, JSX } from 'solid-js'
import { ResumeData } from '~/data/data-types'

const ResumeDataContext = createContext<Resource<ResumeData>>()

export function ResumeDataProvider(props: { value: Resource<ResumeData>; children: JSX.Element }) {
  return (
    <ResumeDataContext.Provider value={props.value}>{props.children}</ResumeDataContext.Provider>
  )
}

export function useResumeData() {
  const value = useContext(ResumeDataContext)
  if (value === undefined) {
    throw new Error('useResumeData must be used within a ResumeDataProvider')
  }
  return value
}
