import './Nav.css'
import { FiHeart } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";

export default function Nav() {
  return (
    <nav>
        <div className="nav-container">
            <input type="text" className='search-input' placeholder='Enter your search...' />
        </div>
        <div className="profile-container">
            <a href="#" className='nav-icons'><FiHeart /></a>
            <a href="#" className='nav-icons'><FaShoppingCart /></a>
            <a href="#" className='nav-icons'><TiUserAdd /></a>
        </div>
    </nav>
  )
}
