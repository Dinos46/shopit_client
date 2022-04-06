import Head from 'next/head'

type Props = {
  des: string
  title: string
}

const HeadInfo: React.FC<Props> = ({ des, title }) => {
  const icon = '/head-logo.png'
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

export default HeadInfo
