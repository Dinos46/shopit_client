//REAXT-NEXT
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
//MATERIAL-UI
import CloseIcon from '@mui/icons-material/Close'
//APP STATE
import { useAppContext } from '../../store/context/UserContext'
//COMPONENTS HOOKS TYPES
import { IReview } from '../../model/review.model'
import { EvForm } from '../../model/filterBy.model'
import StarsRating from '../Global/StarsRating'

type Props = {
  setIsOpen: (isOpen: boolean) => void
  review?: IReview
}

const ReviewForm: React.FC<Props> = ({ setIsOpen, review }) => {
  const route = useRouter()
  const [titleInput, setTitleInput] = useState<string>('')
  const [bodyInput, setBodyInput] = useState<string>('')
  const [rate, setRate] = useState<number | null>(0)
  const { reviewStore, authStore } = useAppContext()

  const handleSubmit = useCallback(
    async (ev: EvForm) => {
      ev.preventDefault()
      const itemId = route.query.id as string
      const reviewToAdd = {
        body: bodyInput,
        title: titleInput,
        rating: rate || 0,
        userId: authStore.user?.id!,
        itemId,
        id: review ? review.id : '',
      }
      review
        ? await reviewStore.updateReview(reviewToAdd)
        : await reviewStore.createReview(reviewToAdd)
      resetForm()
    },
    [rate, titleInput, bodyInput]
  )

  useEffect(() => {
    if (review) {
      setBodyInput(review.body)
      setRate(review.rating)
      setTitleInput(review.title)
    }
  }, [])

  const resetForm = useCallback(() => {
    setRate(0)
    setTitleInput('')
    setBodyInput('')
    setIsOpen(false)
  }, [])

  return (
    <div className="review-modal">
      <form className="review-form" onSubmit={handleSubmit}>
        <button className="self-end" onClick={() => setIsOpen(false)}>
          <CloseIcon />
        </button>
        <h2 className="mb-4 text-2xl font-medium capitalize">add a review</h2>
        <input
          type="text"
          name="title"
          value={titleInput}
          onChange={(e) => setTitleInput(e.currentTarget.value)}
          className="review-form-input mb-3"
        />
        <textarea
          name="body"
          value={bodyInput}
          onChange={(e) => setBodyInput(e.currentTarget.value)}
          className="review-form-input mb-2 h-[50%] resize-none"
        />
        <StarsRating
          isReadOnly={false}
          name=""
          value={rate}
          handler={setRate}
        />
        <button className="btn mt-2">submit</button>
      </form>
    </div>
  )
}

export default ReviewForm
