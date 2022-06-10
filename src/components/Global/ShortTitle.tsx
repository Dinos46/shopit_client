//REAXT-NEXT
import React, { useState } from 'react'

type Props = {
  title: string
}

const ShortTitle: React.FC<Props> = ({ title }) => {
  const [isShown, setIsShown] = useState(false)

  return (
    <div className="self-end border-t-2 border-gray-200">
      <h4 className="font-pop text-bl">
        {title.slice(0, 19)}
        {isShown && title.slice(19, title.length)}
      </h4>

      {!isShown && (
        <span
          className="cursor-pointer font-pop text-bl"
          onClick={() => setIsShown(!isShown)}
        >
          show more...
        </span>
      )}
      {isShown && (
        <span
          className="cursor-pointer font-pop text-bl"
          onClick={() => setIsShown(!isShown)}
        >
          show less...
        </span>
      )}
    </div>
  )
}

export default ShortTitle
