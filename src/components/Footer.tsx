import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'

const Footer = () => {
  return (
    <footer className="footer">
      <section className="p-1 ">
        <h3 className="mb-1 text-xl font-extralight text-wh">follow us </h3>
        <FacebookIcon className=" font-extralight text-wh" />
        <InstagramIcon className="mx-2 font-extralight text-wh" />
        <YouTubeIcon className="font-extralight text-wh" />
      </section>
    </footer>
  )
}

export default Footer
