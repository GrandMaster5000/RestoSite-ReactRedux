import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const AppHeader = ({sumPrice}) => {
    return (
        <header className="header">
            <Link className="header__link" to='/'>
                Menu
            </Link>
            <Link className="header__link" to='/basket'>
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {sumPrice} $
            </Link>
        </header>
    )
};

const mapStateToProps = (state) => {
    return {
        sumPrice: state.sum
    }
}

export default connect(mapStateToProps)(AppHeader);