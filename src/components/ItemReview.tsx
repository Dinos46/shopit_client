import { IReview } from '../model/review.model'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import StarsRating from './StarsRating'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { useAppContext } from '../store/context/UserContext'
import { useMemo } from 'react'

type Props = {
  review: IReview
}

const ItemReview: React.FC<Props> = ({ review }) => {
  const { user } = review
  const { authStore } = useAppContext()

  const isUserOwn = useMemo(
    () => user.id === authStore.user?.id,
    [user, authStore.user]
  )

  const onEdit = async () => {}

  const onDelete = async () => {}

  return (
    <section className="mt-6 flex items-center justify-between rounded-md text-base text-wh">
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
        <div>
          <button className="mr-3" onClick={onEdit}>
            <EditIcon />
          </button>
          <button className="" onClick={onDelete}>
            <DeleteIcon />
          </button>
        </div>
      )}
    </section>
  )
}

export default ItemReview
