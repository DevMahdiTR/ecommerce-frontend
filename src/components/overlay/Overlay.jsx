import React, { useEffect } from 'react'; // Import React
import { connect } from 'react-redux';
import './overlay.scss';
import { SearchActions } from '../../redux/index';

const Overlay = ({ visible, onClickOverlay }) => {
    const onClickOverlayHandler = () => {
        onClickOverlay();
        const searchHidden = document.querySelector('.header__search-hidden');
        const loginHidden = document.querySelector('.hidden__login');
        searchHidden.classList.remove('show_search');
        loginHidden.classList.remove('show_search');
    };
    useEffect(() => {
        const ovelay = document.querySelector('.overlay');
        if(!visible){
            ovelay.classList.add('overlay-not-visible');
        }
        else{
            ovelay.classList.remove('overlay-not-visible');
        }
    }, [visible]);
    return (

        <div className="overlay" onClick={onClickOverlayHandler}>

        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        visible: state.search.status,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickOverlay: () => {
            dispatch(SearchActions.ToggleSearch(false));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
