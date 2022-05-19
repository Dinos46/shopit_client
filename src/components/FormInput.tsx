import React from 'react'
import { EvInput } from '../model/filterBy.model'

type Props = {
  type: string
  name: string
  placeholder: string
  handler: (ev: EvInput) => void
  val: string | number
  id?: string
  style?: string
}

const FormInput: React.FC<Props> = ({
  name,
  handler,
  placeholder,
  type,
  val,
  id,
  style,
}) => {
  return (
    <input
      className={style}
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
