import { IReview } from '../model/review.model'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import StarsRating from './StarsRating'
import { useState } from 'react'

type Props = {
  review: IReview
}

const ItemReview: React.FC<Props> = ({ review }) => {
  const { user } = review
  return (
    <section className="mt-6 flex rounded-md text-base text-wh">
      <div className="mr-2 flex flex-col items-center justify-center rounded-full ">
        {user.image ? (
          <img src={user.image} alt="user image" />
        ) : (
          <AccountCircleIcon className=" h-[6rem] w-[6rem] rounded-full " />
        )}
        <p className="text-xl">{user.username}</p>
      </div>
      <div className="flex flex-col items-start justify-center font-pop">
        <h4 className="bg-opacity-95 text-2xl">{review.title}</h4>
        <p className="my-1 opacity-60">"{review.body}"</p>
        <StarsRating
          name={'read-only'}
          isReadOnly={true}
          value={+review.rating}
        />
      </div>
    </section>
  )
}

export default ItemReview
