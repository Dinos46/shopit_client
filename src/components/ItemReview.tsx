import Image from 'next/image'
import { IReview } from '../model/review.model'

type Props = {
  review: IReview
}

const ItemReview: React.FC<Props> = ({ review }) => {
  const { user } = review

  return (
    <section className="flex">
      <div className="rounded-full">
        <img src={user.image} alt="user image" />
      </div>
      <div>
        <p>{user.username}</p>
        <p>{review.title}</p>
        <p>"{review.body}"</p>
        <p>{review.rating}</p>
      </div>
    </section>
  )
}

export default ItemReview
