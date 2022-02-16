import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute top-10 z-10 p-5 md:left-10 ">
        <h2 className=" font-pop text-3xl text-bl md:text-5xl">
          Welcom to ShopIt
        </h2>
        <h3 className="mb-3 font-pop text-2xl font-light text-gray-800 md:text-3xl">
          some subtitle text here
        </h3>
        <button className="btn">
          <Link href="/shop">explore our store</Link>
        </button>
      </div>
      <Image
        src={'/pic55.jpg'}
        priority
        layout="responsive"
        objectFit="cover"
        height={50}
        width={50}
        alt="hero pic"
      />
    </section>
  )
}

export default Hero
