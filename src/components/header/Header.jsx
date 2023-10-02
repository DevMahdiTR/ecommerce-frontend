import './header.scss';
import {logo} from '../../assets/index';
import { HeartOutlined , SearchOutlined , ShoppingCartOutlined , UserOutlined } from '@ant-design/icons';
const Header = () => {
  return (
    <div className='header'>
        <div className='header__left'>
            <img src={logo} alt='logo' />
        </div>
        <div className='header__middle'>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Blog</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className='header__left'>
            <div className="header__left__search">
                <SearchOutlined/>
            </div>
            <div className="header__left__authentication">
                <UserOutlined/>
            </div>
            <div className="header__left__favorits">
                <HeartOutlined/>
            </div>
            <div className="header__left__cart">
                <ShoppingCartOutlined/>
            </div>
        </div>  
    </div>
  )
}

export default Header
