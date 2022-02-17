import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

const ItemCategory = () => {
  const router = useRouter()
  const [categories] = useState([
    `men's clothing`,
    `women's clothing`,
    'accessories',
    'electronics',
  ])

  const handleClick = (ctg: string) => {
    const params = {
      pathname: '/shop',
      query: {
        ctg,
      },
    }
    router.push(params)
  }

  return (
    <section className=" mt-5 grid h-1/6 grid-cols-2 grid-rows-2 gap-7">
      {categories.map((ctg, idx) => (
        <article
          className="relative cursor-pointer"
          onClick={() => handleClick(ctg)}
        >
          <div className="ctg-card">
            <h3 className=" capitalize text-wh">{ctg}</h3>
          </div>
          <Image
            priority
            src={`/ctg/pic${idx + 1}.jpg`}
            layout="responsive"
            height={20}
            width={20}
            className="rounded-md"
          />
        </article>
      ))}
    </section>
  )
}

export default ItemCategory
