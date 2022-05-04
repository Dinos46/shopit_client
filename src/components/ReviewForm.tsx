import { useCallback, useEffect, useRef, useState } from 'react'
import { EvForm } from '../model/IFilterBy'
import StarsRating from './StarsRating'
import CloseIcon from '@mui/icons-material/Close'
import { useAppContext } from '../store/context/UserContext'
import { useRouter } from 'next/router'

type Props = {
  setIsOpen: () => void
}

const ReviewForm: React.FC<Props> = ({ setIsOpen }) => {
  const route = useRouter()
  const titleRef = useRef(null)
  const bodyRef = useRef(null)
  const [rate, setRate] = useState<number | null>(0)
  const { reviewStore, authStore } = useAppContext()

  useEffect(() => {}, [])

  const handleSubmit = useCallback(
    async (ev: EvForm) => {
      ev.preventDefault()
      console.log(
        'Rating',

        rate
      )
      const itemId = route.query.id as string
      const reviewToAdd = {
        //@ts-ignore
        body: bodyRef?.current?.value,
        //@ts-ignore
        title: titleRef?.current?.value,
        rating: rate ? rate + '' : '',
        userId: authStore.user?.id!,
        itemId,
      }

      await reviewStore.createReview(reviewToAdd)
    },
    [rate]
  )

  return (
    <div className="absolute inset-0 z-50 flex h-full w-full items-center justify-center bg-black/60 backdrop-blur-sm">
      <form
        className="flex h-[50%] w-[50%] flex-col items-center justify-center rounded-md bg-slate-600 p-3 font-pop"
        onSubmit={handleSubmit}
      >
        <button className=" self-end" onClick={setIsOpen}>
          <CloseIcon />
        </button>
        <h2 className="mb-4 text-2xl font-medium capitalize">add a review</h2>
        <input type="text" ref={titleRef} className=" review-form-input mb-3" />
        <textarea
          ref={bodyRef}
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
