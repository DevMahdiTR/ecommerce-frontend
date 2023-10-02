import './header.scss';
import { logo } from '../../assets/index';
import { HeartOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined, CloseOutlined } from '@ant-design/icons';
const Header = () => {



    const showHidenSearch = () => {
        const searchHidden = document.querySelector('.header__search-hidden');
        searchHidden.classList.toggle('show_search');
    }
    return (
        <div className='header'>
            <div className='header__left'>
                <img src={logo} alt='logo' />
            </div>
            <div className='header__middle'>
                <ul>
                    <li>
                        <a href="#">
                            Home
                        </a>

                    </li>
                    <li>
                        <a href="#">
                            Shop
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Pages
                        </a>
                    </li>
                </ul>
            </div>
            <div className='header__left'>
                <div className="header__left__search">
                    <SearchOutlined
                        className='header__icons search-icon'
                        onClick={showHidenSearch}
                    />
                </div>
                <div className="header__left__authentication">
                    <UserOutlined className='header__icons' />
                </div>
                <div className="header__left__favorits">
                    <HeartOutlined className='header__icons' />
                </div>
                <div className="header__left__cart">
                    <ShoppingCartOutlined className='header__icons' />
                </div>
            </div>
            <div 
                className="header__search-hidden"
                onAuxClick={showHidenSearch}
            >
                <CloseOutlined onClick={showHidenSearch}/>
            </div>
        </div>
    )
}

export default Header
