import { IReview } from '../model/review.model'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import StarsRating from './StarsRating'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { useAppContext } from '../store/context/UserContext'
import { useCallback, useMemo, useState } from 'react'
import { observer } from 'mobx-react'
import ReviewStore from '../store/ReviewStore'
import ReviewForm from './ReviewForm'

type Props = {
  review: IReview
}

const ItemReview: React.FC<Props> = ({ review }) => {
  const { user } = review
  const { authStore, reviewStore } = useAppContext()
  const [isOpen, setIsOpen] = useState(false)

  const isUserOwn = useMemo(
    () => user.id === authStore.user?.id,
    [user, authStore.user]
  )

  const onEdit = useCallback(async () => {
    console.log('click')
    setIsOpen(true)
  }, [])

  const onDelete = useCallback(async () => {
    await reviewStore.removeReview(review.id!)
  }, [])

  return (
    <section className="review mt-6 flex items-center justify-between rounded-md text-base text-wh">
      <div className="flex">
        <div className="mr-2 flex flex-col items-center justify-center rounded-full ">
          {user.image ? (
            <img src={user.image} alt="user image" />
          ) : (
            <AccountCircleIcon className=" h-[5rem] w-[5rem] rounded-full " />
          )}
          <p className="text-xl">{user.username}</p>
        </div>
        <div className="flex flex-col items-start justify-center self-end font-pop">
          <h4 className="bg-opacity-95 text-2xl">{review.title}</h4>
          <p className="my-1 opacity-60">"{review.body}"</p>
          <StarsRating
            name={'read-only'}
            isReadOnly={true}
            value={+review.rating}
          />
        </div>
      </div>
      {isUserOwn && (
        <div className="review-actions">
          <button className="mr-3" onClick={onEdit}>
            <EditIcon />
          </button>
          <button className="" onClick={onDelete}>
            <DeleteIcon />
          </button>
        </div>
      )}
      {isOpen && (
        <div>
          <ReviewForm setIsOpen={setIsOpen} review={review} />
        </div>
      )}
    </section>
  )
}

export default observer(ItemReview)
