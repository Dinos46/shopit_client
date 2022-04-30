import { FormEvent } from 'react'

export interface IFilterBy {
  name: string
  maxPrice: number
  minPrice: number
  ctg: string
}

export type EvInput = FormEvent<HTMLInputElement>
export type EvForm = FormEvent<HTMLFormElement>
