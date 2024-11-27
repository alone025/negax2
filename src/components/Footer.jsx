
import { Link } from 'react-router-dom'
import home from "../img/home.svg"
import home2 from "../img/home2.svg"
import footer1 from "../img/footer.svg"
import footer2 from "../img/footer2.svg"
import footer2Rgb from "../img/footer2-rgb.svg"
import footer3 from "../img/footer3.svg"
import footer3Rgb from "../img/footer3-rgb.svg"

const Footer = () => {


  const pathname = window.location.pathname

  return (
    <div className='w-full bg-white rounded-tl-xl rounded-tr-xl border shadow-md fixed bottom-0 left-0 right-0'>
       <div className='container justify-between flex items-center py-3'>
        <div className='w-8 h-8'>
        <Link to="/">
           <img src={pathname === '/' ? home : home2} alt="" />
        </Link>
        </div>
        <div className='w-8 h-8 text-3xl'>
        <Link to="/personals">
           <img src={footer1} alt="" />
        </Link>
        </div>
        <div className='w-8 h-8 '>
          <Link to="/likesh">
          <img src={pathname === '/likesh' ? footer2Rgb:footer2 } alt="" />
          </Link>
        </div>
        <div className='w-8 h-8 text-3xl'>
          <Link to="/profiless">
          <img src={pathname === "/profiless" ? footer3Rgb : footer3} alt="" />
          </Link>
        </div>
       </div>
    </div>
  )
}

export default Footer