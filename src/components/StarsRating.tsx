import { Dispatch, SetStateAction, useState } from 'react'
import Rating from '@mui/material/Rating'

type Props = {
  name: string
  isReadOnly: boolean
  handler?: Dispatch<SetStateAction<number | null>>
  value: number | null
}

const StarsRating: React.FC<Props> = ({ name, isReadOnly, handler, value }) => {
  return (
    <div>
      <Rating
        name={name}
        precision={0.5}
        readOnly={isReadOnly}
        value={value}
        onChange={(event, newValue) => {
          console.log('first', newValue)
          handler ? handler(newValue) : null
        }}
      />
    </div>
  )
}

export default StarsRating
