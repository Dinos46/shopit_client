import { FormEvent, MouseEventHandler } from 'react'

export interface IFilterBy {
  name: string
  maxPrice: number
  minPrice: number
  ctg: string
}

export type EvInput = FormEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>
export type EvForm = FormEvent<HTMLFormElement>

export type clickEv = MouseEventHandler<HTMLButtonElement>
