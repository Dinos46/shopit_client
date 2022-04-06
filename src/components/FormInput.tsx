import React from 'react'
import { EvInput } from '../model/IFilterBy'

type Props = {
  type: string
  name: string
  placeholder: string
  handler: (ev: EvInput) => void
  val: string | number
  id?: string
}

const FormInput: React.FC<Props> = ({
  name,
  handler,
  placeholder,
  type,
  val,
  id,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={handler}
      value={val}
      id={id}
    />
  )
}

export default FormInput
