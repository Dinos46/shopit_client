//REAXT-NEXT
import { Dispatch, SetStateAction } from 'react'
//MATERIAL-UI
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
        readOnly={isReadOnly}
        value={value}
        onChange={(event, newValue) => {
          handler ? handler(newValue) : null
        }}
      />
    </div>
  )
}

export default StarsRating
