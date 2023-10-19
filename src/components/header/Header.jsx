import './header.scss';
import { logo, men, women } from '../../assets/index';
import { HeartOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined, CloseOutlined , MenuOutlined} from '@ant-design/icons';
import { SearchActions } from '../../redux/index'
import store from '../../redux/store';
import { Form, Input } from 'antd';

const Header = () => {

    const showHidenSearch = () => {
        const searchHidden = document.querySelector('.header__search-hidden');
        searchHidden.classList.toggle('show_search');
    }
    const showHidenlLogin = () => {
        const searchHidden = document.querySelector('.hidden__login');
        searchHidden.classList.toggle('show_search');
    }
    const onClickLogin = () => {
        showHidenlLogin();
        store.dispatch(SearchActions.ToggleSearch(true));
    }
    const onClickSearch = () => {
        showHidenSearch();
        store.dispatch(SearchActions.ToggleSearch(true));
    }
    const onClickCloseLogin = () => {
        showHidenlLogin();
        store.dispatch(SearchActions.ToggleSearch(false));
    }
    const onClickCloseSearch = () => {
        showHidenSearch();
        store.dispatch(SearchActions.ToggleSearch(false));
    }
    const revealElementByClassName = (className) => {
        const element = document.querySelectorAll(className);
        element.forEach((element) => {
            if(element.classList.contains('aria-hidden')){
                element.classList.remove('aria-hidden');
            }
        });
    }
    const hideElementByClassName = (className) => {
        const element = document.querySelectorAll(className);
        element.forEach((element) => {
            if(!element.classList.contains('aria-hidden')){
                element.classList.add('aria-hidden');
            }
        });
    }
    const switchAuthState = (state) => {
        const signup = document.querySelectorAll(".signup-element");
        const login = document.querySelectorAll(".login-element");
        const forget = document.querySelectorAll(".forget-element");
        
        revealElementByClassName(".signup-element");
        revealElementByClassName(".login-element");
        revealElementByClassName(".forget-element");

        switch(state){
            case "singup":
                hideElementByClassName(".login-element");
                hideElementByClassName(".forget-element");
                break;
            case "login":
                hideElementByClassName(".signup-element");
                hideElementByClassName(".forget-element");
                break;
            case "forget":
                hideElementByClassName(".login-element");
                hideElementByClassName(".signup-element");
                break;
            default:
                break;
        }
    }
    const onClickMenu = () => {
        const menu = document.querySelector('.header__hidden_left');
        menu.classList.toggle('show_search');
        store.dispatch(SearchActions.ToggleSearch(true));
    }
    const onClickCategories = (state) => {
        const menu = document.querySelector('.header__hidden_menu');
        const categories = document.querySelector('.header__hidden_categories');
        const indicator = document.querySelector('.selection-indicator');
        if(state === "menu")
        {
            if(menu.classList.contains('selected-menu')) return;
            menu.classList.add('selected-menu');
            categories.classList.remove('selected-menu');
            indicator.classList.remove("selection-indicator-move-100");
        }
        else if(state === "categories")
        {
            if(categories.classList.contains('selected-menu')) return;
            menu.classList.remove('selected-menu');
            categories.classList.add('selected-menu');
            indicator.classList.add("selection-indicator-move-100");
        }
    }

    return (
        <div className='header'>
            <div className="header__menu" onClick={onClickMenu}>
                <div className='menu-icon'>
                    <span className='line '></span>
                    <span className='line line-middle'></span>
                    <span className='line '></span>
                </div>
            </div>
            <div className='header__left'>
                <img src={logo} alt='logo' />
            </div>
            <div className='header__middle'>
                <ul className='header__middle-ul'>
                    <li>
                        <a href="#">
                            Shop
                        </a>
                        <div className="header__middle__content">
                            <div className='header__middle__content-container'>
                                <div className='header__middle__title'>
                                    <span>SHOP PAGES</span>
                                </div>
                                <div className='line'></div>
                                <div className='header__middle__list'>
                                    <ul>
                                        <li>
                                            <a className="new" href="">Grid</a>
                                        </li>
                                        <li>
                                            <a className='hot' href="">Masonry</a>
                                        </li>
                                        <li>
                                            <a href="">Packery</a>
                                        </li>
                                        <li>
                                            <a href="">Left sidebar</a>
                                        </li>
                                        <li>
                                            <a className='new' href="">Right Sidebar</a>
                                        </li>
                                        <li>
                                            <a className='new' href="">Drawer sidebarNew</a>
                                        </li>
                                        <li>
                                            <a className='new' href="">Filter sidebarNew</a>
                                        </li>
                                        <li>
                                            <a href="">Filter area</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className='header__middle__content-container'>
                                <div className='header__middle__title'>
                                    <span>FEATURES</span>
                                </div>
                                <div className='line'></div>
                                <div className='header__middle__list'>
                                    <ul>
                                        <li>
                                            <a href="">Pagination </a>
                                        </li>
                                        <li>
                                            <a href="">Load more</a>
                                        </li>
                                        <li>
                                            <a href="">Infinit scrolling</a>
                                        </li>
                                        <li>
                                            <a href="">Has progress bar</a>
                                        </li>
                                        <li>
                                            <a href="">Collection list</a>
                                        </li>
                                        <li>
                                            <a href="">Sub Collection</a>
                                        </li>
                                        <li>
                                            <a href="">List switcher</a>
                                        </li>
                                        <li>
                                            <a href="">Banner Description</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className='header__middle__content-container'>
                                <div className='header__middle__title'>
                                    <span>FEATURES</span>
                                </div>
                                <div className='line'></div>
                                <div className='header__middle__list'>
                                    <ul>
                                        <li>
                                            <a className='new' href="">Pagination </a>
                                        </li>
                                        <li>
                                            <a className='hot' href="">Load more</a>
                                        </li>
                                        <li>
                                            <a href="">Infinit scrolling</a>
                                        </li>
                                        <li>
                                            <a href="">Has progress bar</a>
                                        </li>
                                        <li>
                                            <a href="">Collection list</a>
                                        </li>
                                        <li>
                                            <a href="">Sub Collection</a>
                                        </li>
                                        <li>
                                            <a className='new' href="">List switcher</a>
                                        </li>
                                        <li>
                                            <a className='new' href="">Banner Description</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
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
                            <div className='header__middle__content-container'>
                                <div className='header__middle__title'>
                                    <span>SHOP PAGES</span>
                                </div>
                                <div className='line'></div>
                                <div className='header__middle__list'>
                                    <ul>
                                        <li>
                                            <a className="new" href="">Grid</a>
                                        </li>
                                        <li>
                                            <a className='hot' href="">Masonry</a>
                                        </li>
                                        <li>
                                            <a href="">Packery</a>
                                        </li>
                                        <li>
                                            <a href="">Left sidebar</a>
                                        </li>
                                        <li>
                                            <a className='new' href="">Right Sidebar</a>
                                        </li>
                                        <li>
                                            <a className='new' href="">Drawer sidebarNew</a>
                                        </li>
                                        <li>
                                            <a className='new' href="">Filter sidebarNew</a>
                                        </li>
                                        <li>
                                            <a href="">Filter area</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className='header__middle__content-container'>
                                <div className='header__middle__title'>
                                    <span>FEATURES</span>
                                </div>
                                <div className='line'></div>
                                <div className='header__middle__list'>
                                    <ul>
                                        <li>
                                            <a href="">Pagination </a>
                                        </li>
                                        <li>
                                            <a href="">Load more</a>
                                        </li>
                                        <li>
                                            <a href="">Infinit scrolling</a>
                                        </li>
                                        <li>
                                            <a href="">Has progress bar</a>
                                        </li>
                                        <li>
                                            <a href="">Collection list</a>
                                        </li>
                                        <li>
                                            <a href="">Sub Collection</a>
                                        </li>
                                        <li>
                                            <a href="">List switcher</a>
                                        </li>
                                        <li>
                                            <a href="">Banner Description</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className='header__middle__content-container'>
                                <div className='header__middle__title'>
                                    <span>FEATURES</span>
                                </div>
                                <div className='line'></div>
                                <div className='header__middle__list'>
                                    <ul>
                                        <li>
                                            <a className='new' href="">Pagination </a>
                                        </li>
                                        <li>
                                            <a className='hot' href="">Load more</a>
                                        </li>
                                        <li>
                                            <a href="">Infinit scrolling</a>
                                        </li>
                                        <li>
                                            <a href="">Has progress bar</a>
                                        </li>
                                        <li>
                                            <a href="">Collection list</a>
                                        </li>
                                        <li>
                                            <a href="">Sub Collection</a>
                                        </li>
                                        <li>
                                            <a className='new' href="">List switcher</a>
                                        </li>
                                        <li>
                                            <a className='new' href="">Banner Description</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>

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
                <div className="header__left__search header-icon search">
                    <SearchOutlined
                        className='header__icons search-icon'
                        onClick={onClickSearch}
                    />
                </div>
                <div className="header__left__authentication header-icon authentication">
                    <UserOutlined
                        className='header__icons'
                        onClick={onClickLogin}
                    />
                </div>
                <div className="header__left__favorits header-icon favorits">
                    <HeartOutlined className='header__icons' />
                    <span className='header__left-count'><span>0</span></span>
                </div>
                <div className="header__left__cart header-icon cart">
                    <ShoppingCartOutlined className='header__icons' />
                    <span className='header__left-count'><span>0</span></span>
                </div>
            </div>
            <div className="header__search-hidden">
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
            <div className="header__search-hidden hidden__login">
                <div className="header__search-hidden__top">
                    <span className='login-element'>
                        LOGIN
                    </span>
                    <span className='signup-element aria-hidden'>
                        REGISTER
                    </span>
                    <span className='forget-element aria-hidden'>
                        RESET YOUR PASSWORD
                    </span>
                    <CloseOutlined onClick={onClickCloseLogin} className='header__icons close-icon' />
                </div>
                <div className='hidden__middle'>
                    <div className='forget-element aria-hidden '>
                        <p>
                            Lost your password? Please enter your email address. You will receive a link to create a new password via email.
                        </p>
                    </div>
                    <div className="hidden-form login-element">
                        <Form onFinish={null}>
                            <Form.Item name="Email" rules={[{ required: true, message: 'Please input your email!' }]}>
                                <Input className='field' placeholder='Email' />
                            </Form.Item>
                            <Form.Item name="Password" rules={[{ required: true, message: 'Please input your password!' }]}>
                                <Input className='field' placeholder='Password' />
                            </Form.Item>
                        </Form>

                    </div>

                    <div className="hidden-form signup-element aria-hidden">
                        <Form onFinish={null}>
                            <Form.Item name="FirstName" rules={[{ required: true, message: 'Please input your first name!' }]}>
                                <Input className='field' placeholder='First Name' />
                            </Form.Item>
                            <Form.Item name="LastName" rules={[{ required: true, message: 'Please input your last name!' }]}>
                                <Input className='field' placeholder='Last Name' />
                            </Form.Item>
                            <Form.Item name="Email" rules={[{ required: true, message: 'Please input your email!' }]}>
                                <Input className='field' placeholder='Email' />
                            </Form.Item>
                            <Form.Item name="Password" rules={[{ required: true, message: 'Please input your password!' }]}>
                                <Input className='field' placeholder='Password' />
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="hidden-form forget-element aria-hidden">
                        <Form onFinish={null}>
                            <Form.Item name="Email" rules={[{ required: true, message: 'Please input your email!' }]}>
                                <Input className='field' placeholder='Email' />
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="hidden-login__link login-element">
                        <a onClick = {() => switchAuthState("forget")} href="#">Forget your password?</a>
                    </div>
                    <div className="hidde-login__btn ">
                        <button className='login-element'>Login</button>
                        <button className='signup-element aria-hidden'>Register</button>
                        <button className='forget-element aria-hidden'>Reset Password</button>
                    </div>
                    <div className="hidden-login__link ">
                        <a className="login-element" onClick={() => switchAuthState("singup")} href="#">New customer? Create your account</a>
                        <a className="signup-element aria-hidden" onClick={() => switchAuthState("login")} href="#">Already have an account? Login here</a>
                        <a className='forget-element aria-hidden' href='#' onClick={()=> switchAuthState("login")}>Cancel</a>
                    </div>
                </div>

            </div>
            <div className="header__hidden_left">
                <div className="menu">
                    <span className='header__hidden_menu selected-menu' onClick={() => onClickCategories("menu")}>
                        MENU
                    </span>
                    <span className='header__hidden_categories' onClick={() => onClickCategories("categories")}>
                        CATEGORIES
                    </span>
                    <div className='selection-indicator'>

                    </div>
                </div>
                
            </div>
        </div>
    )
}





export default Header;
