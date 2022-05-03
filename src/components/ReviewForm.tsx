import { useCallback, useEffect, useRef, useState } from 'react'
import { EvForm } from '../model/IFilterBy'
import StarsRating from './StarsRating'
type Props = {
  setIsOpen: () => void
}

const ReviewForm: React.FC<Props> = ({ setIsOpen }) => {
  const titleRef = useRef(null)
  const bodyRef = useRef(null)
  const [rate, setRate] = useState<number | null>(0)
  const [open, setOpen] = useState(true)

  useEffect(() => {
    //   if()
  }, [])

  const handleSubmit = useCallback(
    async (ev: EvForm) => {
      ev.preventDefault()
      //@ts-ignore
      console.log('Rating', titleRef?.current?.value, rate)
    },
    [rate]
  )

  return (
    <div className="absolute inset-0 z-50 flex h-full w-full items-center justify-center bg-black/60 backdrop-blur-sm">
      <form
        className="flex h-[50%] w-[50%] flex-col items-center justify-center rounded-md bg-slate-600 font-pop"
        onSubmit={handleSubmit}
      >
        <button onClick={setIsOpen}>exit</button>
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
        <button className="mt-2">submit</button>
      </form>
    </div>
  )
}

export default ReviewForm
