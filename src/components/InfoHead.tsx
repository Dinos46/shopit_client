import Head from 'next/head'
import React from 'react'

type headProps = {
  title: string
  des: string
  icon: string
}

const InfoHead: React.FC<headProps> = ({ title, des, icon }) => {
  return (
    <Head>
      <meta name="description" content={des} />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href={icon} />
      <title>{title}</title>
    </Head>
  )
}

export default InfoHead
