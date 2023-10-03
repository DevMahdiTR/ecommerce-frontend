import './header.scss';
import { logo , men , women} from '../../assets/index';
import { HeartOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined, CloseOutlined } from '@ant-design/icons';
import { SearchActions } from '../../redux/index'
import { connect } from 'react-redux';
import store from '../../redux/store';

const Header = () => {

    const showHidenSearch = () => {
        const searchHidden = document.querySelector('.header__search-hidden');
        searchHidden.classList.toggle('show_search');
    }

    const onClickSearch = () => {
        showHidenSearch();
        store.dispatch(SearchActions.ToggleSearch(true));
    }

    const onClickCloseSearch = () => {
        showHidenSearch();
        store.dispatch(SearchActions.ToggleSearch(false));
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
                        <div className="header__middle__content">
                            <ul>
                                <li>
                                    <a href="">Pc Portable</a>
                                </li>
                                <li>
                                    <a href="">Pc Portable</a>
                                </li>
                                <li>
                                    <a href="">Pc Portable</a>
                                </li>
                                <li>
                                    <a href="">Pc Portable</a>
                                </li>
                                <li>
                                    <a href="">Pc Portable</a>
                                </li>
                                <li>
                                    <a href="">Pc Portable</a>
                                </li>
                                <li>
                                    <a href="">Pc Portable</a>
                                </li>
                                <li>
                                    <a href="">Pc Portable</a>
                                </li>
                                <li>
                                    <a href="">Pc Portable</a>
                                </li>
                                

                            </ul>
                            <div className="header__middle__special">
                                <div className="header__middle__speicial">
                                    <img src={women} alt="" />
                                    <button className='header__middle__btn'>Women</button>
                                </div>
                                <div className="header__middle__speicial">
                                    <img src={men} alt="" />
                                    <button className='header__middle__btn'>Men</button>
                                </div>
                            </div>

                        </div>

                    </li>
                    <li>
                        <a href="#">
                            Shop
                        </a>
                        <div className="header__middle__content">

                        </div>
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
                        onClick={onClickSearch}
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

            >
                <div className="header__search-hidden__top">
                    <span>
                        SEARCH OUR SITE
                    </span>
                    <CloseOutlined onClick={onClickCloseSearch} className='header__icons close-icon' />
                </div>
                <div className="header__search-hidden__middle">

                    <select className='select-categories'>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
            </div>
        </div>
    )
}





export default Header;
