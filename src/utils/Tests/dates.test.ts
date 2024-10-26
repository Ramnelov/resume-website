import { describe, it, expect } from 'vitest'
import { dateIsInFuture, formatDate, sortByDate } from '~/utils/dates'

describe('formatDate', () => {
  it('returns "Present." for future dates', () => {
    const futureDate = new Date()
    futureDate.setFullYear(futureDate.getFullYear() + 1) // Next year
    expect(formatDate(futureDate.toISOString())).toBe('Present.')
  })

  it('returns "Present." for null dates', () => {
    expect(formatDate(null)).toBe('Present.')
  })

  it('formats past dates correctly', () => {
    expect(formatDate('2020-01-01')).toMatch(/^\w{3}\. \d{4}$/)
  })
})

describe('sortByDate', () => {
  it('sorts dates correctly', () => {
    const items = [
      { start_date: '2020-01-01', end_date: '2020-12-31' },
      { start_date: '2021-01-01', end_date: '2021-12-31' },
    ]
    const sorted = [...items].sort(sortByDate)
    expect(sorted[0].end_date).toBe('2021-12-31')
    expect(sorted[1].end_date).toBe('2020-12-31')
  })

  it('handles equal end_dates by start_date', () => {
    const items = [
      { start_date: '2020-01-01', end_date: '2021-12-31' },
      { start_date: '2021-01-01', end_date: '2021-12-31' },
    ]
    const sorted = [...items].sort(sortByDate)
    expect(sorted[0].start_date).toBe('2021-01-01')
    expect(sorted[1].start_date).toBe('2020-01-01')
  })

  it('treats null end_date as the latest', () => {
    const items = [
      { start_date: '2020-01-01', end_date: '2020-12-31' },
      { start_date: '2021-01-01', end_date: null },
    ]
    const sorted = [...items].sort(sortByDate)
    expect(sorted[0].end_date).toBeNull()
    expect(sorted[1].end_date).toBe('2020-12-31')
  })
})

describe('dateIsInFuture', () => {
  it('returns true for future dates', () => {
    const futureDate = new Date()
    futureDate.setFullYear(futureDate.getFullYear() + 1) // Next year
    expect(dateIsInFuture(futureDate.toISOString())).toBe(true)
  })

  it('returns false for past dates', () => {
    const pastDate = new Date()
    pastDate.setFullYear(pastDate.getFullYear() - 1) // Last year
    expect(dateIsInFuture(pastDate.toISOString())).toBe(false)
  })

  it('returns false for the current date', () => {
    const currentDate = new Date().toISOString()
    expect(dateIsInFuture(currentDate)).toBe(false)
  })
})
