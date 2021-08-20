import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import { menuLoaded, menuRequested, menuError, addedToCard, sumingPrice } from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested();

        const {RestoService} = this.props;
        RestoService.getMenuItems()
        .then(res => this.props.menuLoaded(res))
        .catch(() => menuError());
    }

    render() {
        const {menuItems, loading, error, addedToCard, sumingPrice} = this.props;
        
        if(loading) {
            return <Spinner/>
        }

        if(error) {
            return <Error/>
        }

        return (
            <ul className="menu__list">
                {menuItems.map(menuItem => {
                    return <MenuListItem onAddToCard={() => {
                        addedToCard(menuItem.id);
                        sumingPrice();
                    }}
                    menuItem={menuItem} key={menuItem.id}/>
                })}
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        laoding: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCard,
    sumingPrice
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));